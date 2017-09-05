var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("welcome to homepage");	
});

router.get('/Profile', function(req, res, next) {
  res.send("welcome to Profile");	
});


module.exports = router;