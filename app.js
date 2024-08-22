var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var prom = require('prom-client');

prom.collectDefaultMetrics();
var requestCounter = new prom.Counter({
  name: 'request_counter_all',
  help: 'count of all requests',
  labelNames: ['code'],
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var metricsRouter = require('./routes/metrics');
var greetingRouter = require('./routes/greeting.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  next();
  requestCounter.inc({code: res.statusCode});
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/metrics', metricsRouter);
app.use('/greeting', greetingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
