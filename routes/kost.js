var express = require('express');
var router = express.Router();
const models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
	// var kota = req.query.kota
	// res.render('kosan', {title: 'Kosan daerah Bandung'})	
	models.Kost.findAll()
	.then(kosans => {
		res.render('kosan', {title: 'Kosan daerah Bandung', results: kosans})	
	})
	.catch(err=>{
		res.send(err.message)
	})

});

// router.get('/owner/register',function(req, res, next) {
//   res.render('user/register_owner',
//   { title: '.::Kosan App ::.' });
// })

// router.get('/user/register',function(req, res, next) {
//   res.send('Cari Kost Sekarang juga')
// })


module.exports = router;

// <table>
//    		<tr>
//      		<th>Nama Kosan</th>
//  		    <th>Deskripsi</th> 
//  		    <th>Nama Pemilik</th>
//  		    <th>No.Kontak</th>
//  		    <th>Harga</th>
//    		</tr>

//    	<% results.forEach(result => { %>
//    		<tr>
//    			<td> <%= result.nama %> </td>
//    			<td> <%= result.deskriptif %> </td>
//    			<td> </td>
//    			<td> </td>			
//    		</tr>
//    	<% }) %>	
//  		</table>