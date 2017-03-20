var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Pilih sebagai Pencari ataupun Pemilik');
});

router.get('/owner/register',function(req, res, next) {
  res.render('user/register_owner',
  { title: '.::Kosan App ::.' });
})

router.get('/user/register',function(req, res, next) {
  res.send('Cari Kost Sekarang juga')
})


module.exports = router;
