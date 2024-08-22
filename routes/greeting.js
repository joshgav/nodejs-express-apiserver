var express = require('express');
var prom = require('prom-client');
var router = express.Router();

const requestCounter = new prom.Counter({
  name: 'greeting_request_counter',
  help: 'count of greeting requests',
  labelNames: ['code'],
});

/* GET a greeting */
router.get('/', function(req, res, next) {
  requestCounter.inc({code: 200});
  const name = req.query.name ? req.query.name : 'World';
  res.send({ content: `Hello ${name}!`});
});

module.exports = router;
