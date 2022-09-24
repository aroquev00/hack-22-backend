var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gas-records/:userId', function (req, res, next) {
  res.json({ id: req.params.userId })
});

module.exports = router;
