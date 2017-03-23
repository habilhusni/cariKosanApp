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
    "name": "Benita",
    "phone": "12244656691 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "439 Bainbridge Street, Shindler, New Hampshire, 2575"
  },
  {
    "name": "Kirkland",
    "phone": "16521928671 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "948 Coventry Road, Grimsley, Missouri, 3981"
  },
  {
    "name": "Dena",
    "phone": "18456510493 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "150 Etna Street, Callaghan, California, 8156"
  },
  {
    "name": "Cervantes",
    "phone": "10846066856 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "322 Hutchinson Court, Freetown, Wisconsin, 9374"
  },
  {
    "name": "Becker",
    "phone": "14261407170 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "470 Brevoort Place, Crisman, Michigan, 1487"
  },
  {
    "name": "Foley",
    "phone": "19140527886 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "588 Macon Street, Chapin, Maine, 4922"
  },
  {
    "name": "Wolf",
    "phone": "13728266208 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "184 Clermont Avenue, Coral, Illinois, 9533"
  },
  {
    "name": "Macias",
    "phone": "14469345464 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "434 Otsego Street, Vaughn, Guam, 5848"
  },
  {
    "name": "Morgan",
    "phone": "17572562720 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "965 Jardine Place, Dalton, Connecticut, 9504"
  },
  {
    "name": "Collier",
    "phone": "11928523435 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "294 Holly Street, Goodville, Minnesota, 630"
  },
  {
    "name": "Cash",
    "phone": "15545203852 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "954 Hoyts Lane, Bodega, Oregon, 8826"
  }

],{});
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
    "name": "Benita",
    "phone": "12244656691 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "439 Bainbridge Street, Shindler, New Hampshire, 2575"
  },
  {
    "name": "Kirkland",
    "phone": "16521928671 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "948 Coventry Road, Grimsley, Missouri, 3981"
  },
  {
    "name": "Dena",
    "phone": "18456510493 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "150 Etna Street, Callaghan, California, 8156"
  },
  {
    "name": "Cervantes",
    "phone": "10846066856 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "322 Hutchinson Court, Freetown, Wisconsin, 9374"
  },
  {
    "name": "Becker",
    "phone": "14261407170 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "470 Brevoort Place, Crisman, Michigan, 1487"
  },
  {
    "name": "Foley",
    "phone": "19140527886 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "588 Macon Street, Chapin, Maine, 4922"
  },
  {
    "name": "Wolf",
    "phone": "13728266208 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "184 Clermont Avenue, Coral, Illinois, 9533"
  },
  {
    "name": "Macias",
    "phone": "14469345464 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "434 Otsego Street, Vaughn, Guam, 5848"
  },
  {
    "name": "Morgan",
    "phone": "17572562720 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "965 Jardine Place, Dalton, Connecticut, 9504"
  },
  {
    "name": "Collier",
    "phone": "11928523435 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "294 Holly Street, Goodville, Minnesota, 630"
  },
  {
    "name": "Cash",
    "phone": "15545203852 0",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "address": "954 Hoyts Lane, Bodega, Oregon, 8826"
  }

],{});
  }
};
