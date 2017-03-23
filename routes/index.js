var express = require('express');
var router = express.Router();
const models = require('../models')
/* GET home page. */

router.get('/', function(req, res, next) {
	models.Kota.findAll()
	.then(citys => {
		res.render('index',{title : 'cari kosan', citys: citys})
	})
		.catch(err => {
		res.send(err.message)
	})

})

module.exports = router;
