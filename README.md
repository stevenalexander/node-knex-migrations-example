# Example using knex for DB migrations

Simple example applications connecting to an MS SQL DB hosted in Azure.

## Run

```
# install dependencies
npm install

# Install knex globally for CLI
npm install knex -g

# Set environmental variables for DB connection
export MSSQL_USERNAME='USERNAME'
export MSSQL_PASSWORD='PASSWORD'
export MSSQL_SERVER='SERVER.database.windows.net'
export MSSQL_DATABASE='DATABASE'

# Set default environment used if env is not specified
export NODE_ENV='development'

# runs all migration scripts adding person table and people rows
knex migrate:latest --env development

# Query and get person rows
node knex.js

# Rollback last migration script to remove added people
knex migrate:rollback

# Query and get no person rows
node knex.js
```

## Notes

Setup project with:

```
npm install
npm install knex -g
knex init

# create a new migration script in /migrations
knex migrate:make initial_setup

# update development to latest version
knex migrate:latest --env development

```

* Migration scripts are timestamped, which means if multiple devs are working on scripts there won't be collision, which is good and bad. Which ever developer created their script first will get their script to run first, meaning there could be issues as they won't know the running order
* Can create seed scripts which always run to create test data

## Links

* [Knex](http://knexjs.org)
* [Knex migration API](http://knexjs.org/#Migrations-API)