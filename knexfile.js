module.exports = {
  development: {
    client: 'mssql',
    connection: {
      host: process.env.MSSQL_SERVER,
      user: process.env.MSSQL_USERNAME,
      password: process.env.MSSQL_PASSWORD,
      database: process.env.MSSQL_DATABASE,
      options: {
        encrypt: true
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
