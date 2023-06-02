import os
import xml.etree.ElementTree as ET


def Agg_Sql_Query(root, output_dir):

    connectors = ET.Element('CONNECTORS')
    for connector in root.iter('CONNECTOR'):
        if connector.get('TOINSTANCETYPE') == 'Aggregator':
            connectors.append(connector)
    agg_trans_list = ET.Element('TRANSFORMATIONS')
    for transformation in root.iter('TRANSFORMATION'):
        if transformation.get('TYPE') == 'Aggregator':
            agg_trans_list.append(transformation)
    # Get all the Aggregator transformations in the XML file
    if not agg_trans_list:
        print("Error: No Aggregator transformation found in XML file")
        exit(1)

    for agg_trans in agg_trans_list:
        Aggregator = agg_trans.get('NAME')
        # Get the target table name
        targets = connectors.findall(
            ".//CONNECTOR[@TOINSTANCETYPE='Aggregator'][@TOINSTANCE='{}']".format(agg_trans.get('NAME')))
        if not targets:
            print("Error: No target definition found for Aggregator transformation '{}' in XML file".format(
                agg_trans.get('NAME')))
            exit(1)

        target_name = targets[0].get('TOINSTANCE')

        # Get the input fields and their corresponding mappings
        input_fields = []
        for connector in connectors.findall(".//CONNECTOR[@TOINSTANCE='{}']".format(target_name)):
            from_field = connector.get('FROMFIELD')
            to_field = connector.get('TOFIELD')
            from_instance = connector.get('FROMINSTANCE')
            input_fields.append((from_field, to_field, from_instance))
        # Check if the input_fields list is empty
        if not input_fields:
            print("Error: No input fields found for Aggregator transformation '{}' in XML file".format(
                agg_trans.get('NAME')))
            exit(1)

        # Get the group-by fields and their expressions
        gb_fields = []
        for field in agg_trans.findall("./TRANSFORMFIELD[@EXPRESSIONTYPE='GROUPBY']"):
            name = field.get('NAME')
            expression = field.get('EXPRESSION')
            gb_fields.append((name, expression))

        # Get the aggregate fields and their expressions
        agg_fields = []
        for field in agg_trans.findall("./TRANSFORMFIELD[@PORTTYPE ='OUTPUT']"):
            name = field.get('NAME')
            expression = field.get('EXPRESSION')
            agg_fields.append((name, expression))

        # Generate the SQL query

        input_fields_str = ",\n".join(["{{{{ref('{}')}}}}.{} as {}".format(
            instance, from_field, to_field) for from_field, to_field, instance in input_fields])
        gb_fields_str = ",\n".join(
            ["{} as {}".format(expression, name) for name, expression in gb_fields])
        agg_fields_str = ",\n".join(
            ["{} as {}".format(expression, name) for name, expression in agg_fields])
        gb_fields_groupby_str = ",\n".join(
            [expression for name, expression in gb_fields])

        query = f"with input1 as (\n  select \n{input_fields_str}\nfrom {{{{ref('{from_instance}')}}}}\n)\n"
        query += f"select \n{gb_fields_str},\n{agg_fields_str}\nFROM input1\nGROUP BY \n{gb_fields_groupby_str}"

        file_name = "{}.sql".format(Aggregator)
        output_file = os.path.join(output_dir, file_name)
        with open(output_file, 'w') as f:
            f.write(query)
