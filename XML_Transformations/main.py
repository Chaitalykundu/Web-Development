import os
import sys
import argparse
from Aggregator import Agg_Sql_Query
from Source_Qualifier import source_qualifier_sql_query
from Target import Target_Defination_sql_query
from Joiner import Joiner_Sql_Query
import xml.etree.ElementTree as ET

if __name__ == '__main__':
    # Set up the argument parser
    parser = argparse.ArgumentParser(
        description='Process XML file and create SQL queries.')
    parser.add_argument('xml_file', metavar='xml_file',
                        type=str, help='name of the XML file')
    parser.add_argument('--project', dest='project_name',
                        type=str, help='name of the dbt project')
    parser.add_argument('--output', dest='output_dir',
                        type=str, help='output directory path')

    # Parse the command line arguments
    args = parser.parse_args()

    # Check if the file exists in the current directory
    if not os.path.exists(args.xml_file):
        print(f"File '{args.xml_file}' not found in the current directory.")
        sys.exit()

    # Load the XML file
    tree = ET.parse(args.xml_file)
    root = tree.getroot()

    # Get the project name and output directory from the command line arguments, or prompt the user if not provided
    if args.project_name:
        Name_Of_Your_dbt_Project = args.project_name
    else:
        Name_Of_Your_dbt_Project = input(
            'Enter the name of your dbt project: ')

    if args.output_dir:
        output_dir = args.output_dir
    else:
        output_dir = input('Enter the output directory path: ')

    # Call the aggregator, source qualifier, and target functions from their respective modules
    agg_output = Agg_Sql_Query(root, output_dir)
    sq_output = source_qualifier_sql_query(
        root, Name_Of_Your_dbt_Project, output_dir)
    joiner_output = Joiner_Sql_Query(root, output_dir)
    tgt_output = Target_Defination_sql_query(root, output_dir)

    print(f"Output written to {output_dir}")
