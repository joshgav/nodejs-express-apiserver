var express = require('express');
var prom = require('prom-client');
var router = express.Router();

const requestCounter = new prom.Counter({
  name: 'request_counter_user_page',
  help: 'count of user requests',
  labelNames: ['code'],
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  requestCounter.inc({code: 200});
  res.send([
    { "name": "Josh",
      "id": 1
    },
    { "name": "Jim",
      "id": 2
    },
    { "name": "Jack",
      "id": 3
    }
  ]);
});

module.exports = router;
