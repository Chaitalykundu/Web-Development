import os
import xml.etree.ElementTree as ET


def source_qualifier_sql_query(root, project_name, output_dir):

    # Create a new root element containing only the CONNECTOR blocks
    connectors = ET.Element('CONNECTORS')
    for connector in root.iter('CONNECTOR'):
        if connector.get('TOINSTANCETYPE') == 'Source Qualifier':
            connectors.append(connector)

    # Get all unique Source Qualifier instances
    source_qualifiers = set([target.get('TOINSTANCE')
                            for target in connectors])

    for source_qualifier in source_qualifiers:
        input_fields = []
        # Get all CONNECTOR elements with TOINSTANCE attribute set to the current source qualifier
        for connector in connectors:
            if connector.get('TOINSTANCE') == source_qualifier:
                from_field = connector.get('FROMFIELD')
                to_field = connector.get('TOFIELD')
                from_instance = connector.get('FROMINSTANCE')
                input_fields.append((from_field, to_field, from_instance))

        # Check if the input_fields list is empty
        if not input_fields:
            print("Error: No input fields found in XML file for target {}".format(
                source_qualifier))
            continue

        # Generate the SQL query for the current target
        query = "with input1 as (\n  select \n"
        for from_field, to_field, instance in input_fields:
            query += "{}.{} as {},\n".format(instance, from_field, to_field)
        query = query[:-2] + "\nfrom {{{{source('{}', '{}')}}}}\n)".format(
            project_name, from_instance.lower())
        query += "\nselect \n"
        for from_field, to_field, instance in input_fields:
            query += "{},\n".format(to_field)
        query = query[:-2] + "\nFROM input1\n"

        file_name = "{}.sql".format(source_qualifier)
        output_file = os.path.join(output_dir, file_name)
        with open(output_file, 'w') as f:
            f.write(query)
