# MongoDBAtlas-Splunk-integration

This repository provides a solution to integrate MongoDB Atlas Alerts with Splunk via HTTP Event Collector.
This is a private repository and is not officially supported by MongoDB.

![Architecture](images/Architecture.png?raw=true "Architecture")

# Setup

This solution uses the MongoDB Atlas App Service and Atlas Alert Integration via Webhooks.

## Prerequisite

Install and setup of the [MongoDB Realm CLI](https://www.mongodb.com/docs/atlas/app-services/cli/)

## Setup

1. Import content of the folder **App Service** via Realm CLI: https://www.mongodb.com/docs/atlas/app-services/cli/realm-cli-push/

2. Within the newly imported App Service go to **Values** and set the values:

- url: The URL of the Splunk HTTPS Event Collector
- splunkEventToken: The token provided by Splunk as a string in the form `"<Token>"`

3. Within the App Service switch to **HTTPS Endpoints** and select `/alertReciever`. Copy the url displayed under **Endpoint Settings -> Operation Type**

4. Within your Atlas Project configure the Webhook Integration using the previously copied endpoint url
