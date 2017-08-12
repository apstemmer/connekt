var express = require('express');
var csprng = require('csprng');
var database = require('../db/connect');
var crypto = require('crypto');
var router = express.Router();

function sha256(pwd, fn) {
  var hash = crypto.createHash('sha256').update(pwd).digest('hex');
  fn(null, hash);
};

/* user interaction */
router.get('/', function(req, res, next) {
  res.json({
    yo:'lo'
  });
});

router.get('/:userid', (req,res,next)=>{
  res.json({
    param: 'yo',
    param2: 'lo',
  });
})

router.post('/create', (req,res)=>{
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let email = req.query.email;
  let password = req.query.password;
  let userid = 15;
  let passalt = csprng();
  let prehash = passalt + password;
  sha256(prehash,(err, passhash)=>{
    console.log(passhash);
    database.query('INSERT INTO users (userid, firstname, lastname, email, passalt, password) VALUES (?, ?, ?, ?, ?, ?)',[userid, firstname,lastname, email, passalt, passhash],(err, result)=>{
      if(err) throw err;
      console.log(result);
    });
  });
  //
  res.json({yo:'lo'});
});

module.exports = router;
