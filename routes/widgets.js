var express = require('express');
var prom = require('prom-client');
var router = express.Router();

const requestCounter = new prom.Counter({
  name: 'request_counter_widgets_page',
  help: 'count of widget requests',
  labelNames: ['code'],
});

// Mock database of widgets
const widgets = [
  {
    "id": 1,
    "name": "Widget A",
    "description": "First widget",
    "price": 9.99
  },
  {
    "id": 2,
    "name": "Widget B",
    "description": "Second widget",
    "price": 14.99
  },
  {
    "id": 3,
    "name": "Widget C",
    "description": "Third widget",
    "price": 19.99
  }
];

/* GET widgets listing. */
router.get('/', function(req, res, next) {
  requestCounter.inc({code: 200});
  res.send(widgets);
});

module.exports = router;
