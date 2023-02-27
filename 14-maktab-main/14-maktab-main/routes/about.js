const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  res.render('about',{
    name: 'Maktab haqida',
    title: "Maktab haqida"
  })
});

module.exports = router;