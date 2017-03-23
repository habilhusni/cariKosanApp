var express = require('express');
var router = express.Router();
const models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {


});

router.get('/owner/register',function(req, res, next) {
  res.render('user/register_owner',
  { title: '.::Kosan App ::.' });
})

router.get('/user/register',function(req, res, next) {
  res.send('Cari Kost Sekarang juga')
})


module.exports = router;
