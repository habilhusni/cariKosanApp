'use strict';
module.exports = function(sequelize, DataTypes) {
  var Kota = sequelize.define('Kota', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Kota;
};