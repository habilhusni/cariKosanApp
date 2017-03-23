'use strict';
module.exports = function(sequelize, DataTypes) {
  var Kost = sequelize.define('Kost', {
    name: DataTypes.STRING,
    deskriptif: DataTypes.STRING,
    KotaId: DataTypes.INTEGER,
    OwnerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Kost.belongsTo(models.Owner)
        Kost.belongsTo(models.Kota)
      }
    }
  });
  return Kost;
};
