const path = require("path");
const express = require("express");
var bodyParser = require('body-parser');
const { readFILE, writeFILE } = require('./utils');

const app = express();
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, '../views'));
app.set("view engine", "hbs");

app.get('/', (req, res) => {
    readFILE().then((data) => {
        data = JSON.parse(data);
        res.render('index', { data });
    });
})

app.post('/post', (req, res, next) => {
    const data = req.body;
    res.send("[+] Data received!");
    writeFILE(data);
})

module.exports = app;