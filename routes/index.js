var express = require('express');
var prom = require('prom-client');
var router = express.Router();

const requestCounter = new prom.Counter({
  name: 'request_counter_home_page',
  help: 'count of home page requests',
  labelNames: ['code'],
});

router.get('/', function(req, res, next) {
  requestCounter.inc({code: 200});
  res.render('index', { title: 'OpenShift Demo Site' });
});

module.exports = router;
