#!/bin/bash

# This is a sample Bash script

echo "Hello, this is a sample Bash script."

# Example: Listing files in the current directory
echo "Listing files in the current directory:"
ls

# Example: Creating a directory and a file inside it
echo "Creating a directory and a file inside it:"
mkdir sample_directory
touch sample_directory/sample_file.txt

# Example: Writing content to the file
echo "Writing content to the file:"
echo "This is a sample text file." > sample_directory/sample_file.txt

# Example: Displaying the content of the file
echo "Displaying the content of the file:"
cat sample_directory/sample_file.txt
