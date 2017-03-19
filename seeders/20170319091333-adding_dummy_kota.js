'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Kota', [
      {
        nama_kota: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kota: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kota: 'Tangerang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kota: 'Banjarmasin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Kota', [
      {
        nama_kota: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kota: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kota: 'Tangerang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kota: 'Banjarmasin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  }
};
