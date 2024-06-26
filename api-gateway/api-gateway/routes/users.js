var express = require('express');
var router = express.Router();
var {APP_NAME} = process.env;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users');
});

module.exports = router;


// axios untuk mempersimple request ke API ke suatu client