var express = require('express');
var router = express.Router();

var gas_report_calculator = require('../src/gas_reports_calculator');

router.get('/gas-records/:userId', function (req, res, next) {
  console.log(gas_report_calculator.calculate());
  res.json({ id: req.params.userId })
});

module.exports = router;
