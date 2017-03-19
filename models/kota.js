'use strict';
module.exports = function(sequelize, DataTypes) {
  var Kota = sequelize.define('Kota', {
    nama_kota: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Kota;
};