var express = require('express');
var router = express.Router();
var prom = require('prom-client');

router.get('/', async (req, res, next) => {
    res.set('Content-Type', prom.register.contentType);
    res.end(await prom.register.metrics());
});

module.exports = router;
