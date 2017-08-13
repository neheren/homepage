const express = require('express');
const Handlebars = require('handlebars');

const app = express();

app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    const template = Handlebars.compile(import('../views/test.hbs'))
    res.send(template({}))
})

app.listen(3000);
