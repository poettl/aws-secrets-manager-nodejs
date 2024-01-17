#!/usr/bin/env node

const fs = require("fs");
const { SecretsManager } = require("@aws-sdk/client-secrets-manager");
const yargs = require("yargs");

const argv = yargs
  .option("region", {
    description: "AWS region",
    type: "string",
    demandOption: true,
  })
  .option("secretId", {
    description: "SecretId in AWS Secrets Manager",
    type: "string",
    demandOption: true,
  }).argv;

// Configure AWS SDK
const region = argv.region;
const client = new SecretsManager({
  region,
});
const secretId = argv.secretId;

return new Promise((resolve, reject) => {
  // Retrieving secrets from Secrets Manager
  client.getSecretValue({ SecretId: secretId }, (err, data) => {
    if (err) {
      console.error("Error occurred");
      reject(err);
    } else {
      // Parsing the fetched data into JSON
      const secretsJSON = JSON.parse(data.SecretString);

      let secretsString = "";
      Object.keys(secretsJSON).forEach((key) => {
        secretsString += `${key}=${secretsJSON[key]}\n`;
      });

      // Write to .env file
      fs.writeFile(".env", secretsString, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Secrets successfully written to .env file");
        }
      });
    }
  });
});
