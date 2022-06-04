# node-express-mongo-api-template
A simple template for a ready to use Node Express Mongo template


### Installation
```npm install```

###  Configuration
Modify  config/default.json and config/test.json with your desired values.
```
port: # the port the app runs on. Default 3000 and 3001 for testing
db: # the uri to connect to your mongo databse. Uses localhost by default, and a db name project or project-test
```

### Start
```npm start```
then open http://localhost:3000/


## Overview
### index.js
This is the starting point of the app, where everything is declared and the server configured

### app folder
Contains everything needed for the app  to run

#### app/express.js
Defines the global express router.

#### app/routes folder
Where the different routers are defined. A router just maps a route to a controller function.

#### app/controllers folder
Where the different controllers are defined. The controller role is to listen to a request, do validation, eventually call a DAO, and send appropriate result.

#### app/DAOs folder
Where the Data Access Objects (DAO) are defined. A DAO role is only to query the database.

