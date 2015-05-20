// api

var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
  res.send(JSON.stringify({a: 1, b: 2}));
});

module.exports = router;
