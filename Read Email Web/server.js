const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/index');

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static(__dirname + '/public'));

app.use('/', router)

app.listen(process.env.PORT || 3000)