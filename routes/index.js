var express = require('express');
var emailExistence = require('email-existence');

var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});


emailExistence.check('lawar.yamin12@gmail.com', function(error, response){
    console.log('res: '+response);
});
module.exports = router;
