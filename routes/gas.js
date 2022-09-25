var express = require('express');
var router = express.Router();
var cors = require('cors');

var gas_report_calculator = require('../src/gas_reports_calculator');

const allowedOrigins = [
  'http://localhost:3001'
];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.use(cors(corsOptions));

  router.get('/gas-records/:userId', function (req, res, next) {
    console.log(gas_report_calculator.calculate());
    res.json({ id: req.params.userId })
  });

router.get('/users/:user', function (req, res, next) {
  res.json({ id: req.params.userId, name: "John Doe", email: "j@a.com" })
})

module.exports = router;
