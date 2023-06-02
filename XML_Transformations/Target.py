import os
import xml.etree.ElementTree as ET


def Target_Defination_sql_query(root, output_dir):
    # def Target_Defination_sql_query(root):
    # tree = ET.parse(xml_file)
    # root = tree.getroot()
    # Create a new root element containing only the CONNECTOR blocks
    connectors = ET.Element("CONNECTORS")
    for connector in root.iter("CONNECTOR"):
        if connector.get("TOINSTANCETYPE") == "Target Definition":
            connectors.append(connector)

    # Get all unique Target Definition instances
    target_definitions = set([target.get("TOINSTANCE") for target in connectors])

    for target_definition in target_definitions:
        input_fields = []
        # Get all CONNECTOR elements with TOINSTANCE attribute set to the current target definition
        for connector in connectors:
            if connector.get("TOINSTANCE") == target_definition:
                from_field = connector.get("FROMFIELD")
                to_field = connector.get("TOFIELD")
                from_instance = connector.get("FROMINSTANCE")
                input_fields.append((from_field, to_field, from_instance))

        # Check if the input_fields list is empty
        if not input_fields:
            print(
                "Error: No input fields found in XML file for target definition {}".format(
                    target_definition
                )
            )
            continue

        # Generate the SQL query for the current target definition
        query = "with input1 as (\n  select \n"
        for from_field, to_field, instance in input_fields:
            query += "{{{{ref('{}')}}}}.{} as {},\n".format(
                instance, from_field, to_field
            )
        query = query[:-2] + "\nfrom {{{{ref('{}')}}}}\n)".format(from_instance)
        query += "\nselect \n"
        for from_field, to_field, instance in input_fields:
            query += "{},\n".format(to_field)
        query = query[:-2] + "\nFROM input1\n"

        file_name = "{}.sql".format(target_definition)
        output_file = os.path.join(output_dir, file_name)
        with open(output_file, "w") as f:
            f.write(query)
        # print(query)

    # xml_file = Target_Defination_sql_query(abc.xml)
