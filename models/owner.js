'use strict';
module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define('Owner', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Owner.belongsToMany(models.Kota,{through : 'Kost'})
        Owner.hasMany(models.Kost)
      }
    }
  });
  return Owner;
};