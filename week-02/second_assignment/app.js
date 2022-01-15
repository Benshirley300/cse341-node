const express = require("express");
const bodyParser = require('body-parser')
const path = require('path')

const app = express();



const defaultRoutes = require('./routes/defaultRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use(defaultRoutes);




app.listen(3000);