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
      },
      totalKota: function(callback){
        let kota = 0;
        Kota.findAll()
            .then(_kota => {
              callback(4)
            })
            .catch(err => {
              callback(0)
            })
       }
    }
  });
  return Kota;
};
