# aws-secrets-manager-nodejs

This is a simple cli tool to get the value of a secret from AWS Secrets Manager.
It will generate a file called .env in the current directory with the key value pairs of the secret.

## Usage

clone the repo
cd into the repo
npm install -g
aws-secrets-manager-nodejs --region eu-central-1 --secretId your-secret-id
