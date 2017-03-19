'use strict';
module.exports = function(sequelize, DataTypes) {
  var Adding_kota = sequelize.define('Adding_kota', {
    nama_kota: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Adding_kota;
};