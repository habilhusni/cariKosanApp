'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Owners', [
      {
        name: 'Midun',
        phone: '085162173517',
        address: 'Jl.Raya Jakarta no.20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saidah',
        phone: '0851621735212',
        address: 'Jl.Raya Bandung no.20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Seuprit',
        phone: '0851612121627',
        address: 'Jl.Raya Banjarmasin no.20',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Owners', [
      {
        name: 'Midun',
        phone: '085162173517',
        address: 'Jl.Raya Jakarta no.20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saidah',
        phone: '0851621735212',
        address: 'Jl.Raya Bandung no.20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Seuprit',
        phone: '0851612121627',
        address: 'Jl.Raya Banjarmasin no.20',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ])

  }
};
