var express = require('express');
var router = express.Router();

router.get('/loginpage', function(req, res) {

  res.render('loginpage', {
    pageTitle: 'Login',
    pageID: 'loginpage'
  });

});

module.exports = router;