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
    return queryInterface.bulkInsert('Kosts', [
      {
       nama: 'Kost Haji Midun', 
       deskriptif: 'Kost yang pas untuk anda',
       KotaId:2,
       OwnerId:1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nama: 'Kost Ibu Saidah',
       deskriptif: 'Kost pilihan anda',
       KotaId:1,
       OwnerId:2,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nama: 'Kost Mantap', 
       deskriptif: 'Pilihan terbaik untuk kos', 
       KotaId:2, 
       OwnerId:2,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nama: 'Kost SegarSari',
       deskriptif: 'Kost yang sejuk', 
       KotaId:2, 
       OwnerId:1,
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ],{})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Kosts', [
      {
       nama: 'Kost Haji Midun', 
       deskriptif: 'Kost yang pas untuk anda',
       KotaId:2,
       OwnerId:1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nama: 'Kost Ibu Saidah',
       deskriptif: 'Kost pilihan anda',
       KotaId:1,
       OwnerId:2,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nama: 'Kost Mantap', 
       deskriptif: 'Pilihan terbaik untuk kos', 
       KotaId:2, 
       OwnerId:2,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nama: 'Kost SegarSari',
       deskriptif: 'Kost yang sejuk', 
       KotaId:2, 
       OwnerId:1,
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ],{})
  }
};
