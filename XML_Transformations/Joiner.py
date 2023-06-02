import os
import xml.etree.ElementTree as ET


def Joiner_Sql_Query(root, output_dir):

    connectors = ET.Element('CONNECTORS')
    for connector in root.iter('CONNECTOR'):
        if connector.get('TOINSTANCETYPE') == 'Joiner':
            connectors.append(connector)
    targets = connectors.findall(".//CONNECTOR[@TOINSTANCETYPE='Joiner']")
    if not targets:
        print("Error: No target definition found in XML file")
        return None

    joiner_trans_list = ET.Element('TRANSFORMATIONS')
    for transformation in root.iter('TRANSFORMATION'):
        if transformation.get('TYPE') == 'Joiner':
            joiner_trans_list.append(transformation)

    for joiner_trans in joiner_trans_list:
        joine_r = joiner_trans.get('NAME')

        # Get the target table name
        targets = connectors.findall(
            ".//CONNECTOR[@TOINSTANCETYPE='Joiner'][@TOINSTANCE='{}']".format(joine_r))
        target_name = targets[0].get('TOINSTANCE')
        input_fields = []
        from_instances = set()

        for connector in connectors.findall(".//CONNECTOR[@TOINSTANCE='{}']".format(target_name)):
            from_field = connector.get('FROMFIELD')
            to_field = connector.get('TOFIELD')
            from_instance = connector.get('FROMINSTANCE')
            input_fields.append((from_field, to_field, from_instance))
            from_instances.add(from_instance)

        # Check if the input_fields list is empty
        if not input_fields:
            print("Error: No input fields found for Joiner transformation '{}' in XML file".format(
                joiner_trans.get('NAME')))
            exit(1)

        join_conditions = []
        for connector in joiner_trans.findall(".//TABLEATTRIBUTE[@NAME='Join Condition']"):
            join_conditions.append(connector.get('VALUE'))
        if not join_conditions:
            print("Error: No join conditions found for Joiner transformation '{}' in XML file".format(
                joiner_trans.get('NAME')))
            exit(1)

        join_type = []
        for connector in joiner_trans.findall(".//TABLEATTRIBUTE[@NAME='Join Type']"):
            join_type.append(connector.get('VALUE'))

        # Generate the SQL query for the current target
        query = "WITH "
        for i, from_instance in enumerate(sorted(from_instances)):
            query += f"input{i+1} as (\n  SELECT \n"
            for from_field, to_field, instance in input_fields:
                if instance == from_instance:
                    query += f"{to_field},\n"
            query = query[:-2] + \
                f"\n  FROM {{{{ref('{from_instance}')}}}}\n),\n"
        query = query[:-2]
        query += f"\nSELECT \n"
        for from_field, to_field, instance in input_fields:
            query += f"{to_field},\n"
        query = query[:-2] + f"\nFROM "
        for i in range(len(from_instances)):
            if i == 0:
                query += f"input{i+1}\n"
            else:
                if join_type[i-1] == 'Normal Join':
                    join_type[i-1] = 'inner join'
                query += f"{join_type[i-1]} input{i+1} on {join_conditions[i-1]}\n"
        file_name = "{}.sql".format(joine_r)
        output_file = os.path.join(output_dir, file_name)
        with open(output_file, 'w') as f:
            f.write(query)
