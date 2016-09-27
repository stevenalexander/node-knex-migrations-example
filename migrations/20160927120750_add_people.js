exports.up = function (knex, Promise) {
  return Promise.all([
    knex('person').insert([{name: 'Axel'}, {name: 'Mr. Foo'}, {name: 'Ms. Bar'}])
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex('person').whereIn('name', ['Axel', 'Mr. Foo', 'Ms. Bar']).del()
  ])
}
