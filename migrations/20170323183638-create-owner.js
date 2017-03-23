'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [10, 13],
            msg: `Phone length must be number`
          },
          isNumeric: {
            args: true,
            msg: `Phone not allow letters`
          },
          isAlphanumeric: {
            args: true,
            msg: `Phone not allow alphanumeric`
          }
        }
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Owners');
  }
};