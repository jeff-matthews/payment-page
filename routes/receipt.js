var express = require('express');
var router = express.Router();

/* GET receipt page. */
router.get('/', function(req, res, next) {
  res.render('receipt', { title: 'Receipt' });
});

module.exports = router;
