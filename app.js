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

app.use(routes)

if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, '../build')));
  };

app.listen(PORT, function(){
    console.log(`server on port${PORT}`)
})