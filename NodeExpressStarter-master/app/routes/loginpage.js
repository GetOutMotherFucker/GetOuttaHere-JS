var express = require('express');
var router = express.Router();

router.get('/loginpage', function(req, res) {

  res.render('loginpage', {
    pageTitle: 'loginpage',
    pageID: 'loginpage'
  });

});