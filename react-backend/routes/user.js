var express = require('express');
var router = express.Router();

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

router.post('/', (req,res)=>{
  res.json({
    hel:'los'
  });
});

module.exports = router;
