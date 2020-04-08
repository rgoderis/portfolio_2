const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, './client/build')));
 };

app.use(routes)

/* === Express 404 error handler === */
app.use(function(req, res, next) {
  var err = new Error('404 in Server.js, route Not Found');
  err.status = 404;
  next(err);
});

/* Development error handler will print stacktrace */
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
          message: err.message,
          error: err
      });
  });
}

/* Production error handler no stacktraces leaked to user */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: {}
  });
});

app.listen(PORT, function(){
    console.log(`server on port${PORT}`)
})