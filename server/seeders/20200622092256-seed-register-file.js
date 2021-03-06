const Helper = require('../helpers/helper')
const users = [
  {
    "email": "admin@email.com",
    "password": "admin123",
    "role": "admin"
  },
  {
    "email": "mimin@email.com",
    "password": "admin123",
    "role": "admin"
  },
  {
    "email": "mince@email.com",
    "password": "admin123",
    "role": "admin"
  },

]
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    users.forEach(user => {
      user.createdAt = new Date()
      user.updatedAt = new Date()
      user.password = Helper.hashPassword(user.password)
    })

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
