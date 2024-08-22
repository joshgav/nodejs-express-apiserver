var express = require('express');
var prom = require('prom-client');
var router = express.Router();

const requestCounter = new prom.Counter({
  name: 'request_counter_home_page',
  help: 'count of home page requests',
  labelNames: ['code'],
});

var title = process.env.SITE_TITLE ? process.env.SITE_TITLE : "OpenShift Demo Site";
router.get('/', function(req, res, next) {
  requestCounter.inc({code: 200});
  res.render('index', { title: title });
});

module.exports = router;
