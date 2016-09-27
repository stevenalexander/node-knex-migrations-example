var config = require('./knexfile').development
var knex = require('knex')(config)

knex('person')
  .limit(10)
  .then(function (rows) {
    console.log(rows)
  })
  .finally(function () {
    return knex.destroy()
  })
