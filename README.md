# aws-secrets-manager-nodejs

This is a simple cli tool to get the value of a secret from AWS Secrets Manager.
It will generate a file called .env in the current directory with the key value pairs of the secret.

## Usage

- npm install -g poettl/aws-secrets-manager-nodejs
- aws-secrets-manager-nodejs --region eu-central-1 --secretId your-secret-id
- .env file is generated in the current directory
