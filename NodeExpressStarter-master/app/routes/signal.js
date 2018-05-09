var express = require('express');
var router = express.Router();

router.get('/signal', function(req, res) {

  res.render('signal', {
    pageTitle: 'signal',
    pageID: 'signal'
  });

});

module.exports = router;