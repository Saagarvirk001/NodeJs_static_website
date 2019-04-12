var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
    res.render('about.ejs', { title: 'Express' });
});

module.exports = router;
