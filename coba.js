const models = require('./models')

// models.Owner.findAll()
//       .then(owners => {
//         owners.forEach(owner => {
//
//           owner.getKosts()
//             .then(kosts => {
//                kosts.forEach(kost => {
//                  console.log(owner.name,' memiliki ');
//                  console.log(kost.name);
//                })
//              })
//           })
//         })

let kota = 'Jakarta'.toLowerCase()
models.Kota.findOne({where : {nama_kota : kota}})
      .then(kota =>{
        console.log(kota);
        models.Kost.findAll({
          where: {KotaId : kota.id}
        }).then((kosts) => {
          kosts.forEach(kost => {
            console.log(kost.name);
          })
        })
})
