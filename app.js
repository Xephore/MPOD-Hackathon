const { Router } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Set Handlebars as templating engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render("home");
});

app.listen(HTTP_PORT, () => {
    console.log(`Web server is listening on Port ${HTTP_PORT}`);
});