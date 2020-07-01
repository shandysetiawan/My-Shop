'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.addConstraint('Carts', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'fkkey_constraint_ProductId',
      references: { //Required field
        table: 'Products',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeConstraint('Carts', 'fkkey_constraint_ProductId');

  }
};
