'use strict';
module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define('Owner', {
    nama: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Owner;
};