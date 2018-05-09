var express = require('express');
var router = express.Router();

router.get('/front', function(req, res) {

  res.render('front', {
    pageTitle: 'front',
    pageID: 'front'
  });

});