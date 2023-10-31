# Define the provider and specify AWS as the cloud provider
provider "aws" {
  region = "us-west-2"  # You can change this to your desired region
}

# Define an AWS EC2 instance
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"  # Specify the AMI ID
  instance_type = "t2.micro"               # Specify the instance type

  # Define tags for the instance
  tags = {
    Name = "ExampleInstance"
  }
}

# Define an SSH key pair for connecting to the instance
resource "aws_key_pair" "example" {
  key_name   = "example_key"
  public_key = file("~/.ssh/id_rsa.pub")  # Replace with the path to your public key file
}

# Output the public IP address of the EC2 instance
output "public_ip" {
  value = aws_instance.example.public_ip
}
