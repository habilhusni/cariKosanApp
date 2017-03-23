'use strict';
module.exports = function(sequelize, DataTypes) {
  var Kota = sequelize.define('Kota', {
    nama_kota: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Kota.belongsToMany(models.Owner,{through : 'Kost'})
        Kota.hasMany(models.Kost)
      }
    }
  });
  return Kota;
};