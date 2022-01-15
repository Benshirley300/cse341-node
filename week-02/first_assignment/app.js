const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("Users Page");
    res.send("<h1>Users Page</h1>");
})

app.use('/', (req, res, next) => {
    console.log("Default Page");
    res.send("<h1>Default Page</h1>");
})


app.listen(3000);