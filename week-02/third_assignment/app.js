const express = require("express");
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const usersRoutes = require('./routes/users');
const defRoutes = require('./routes/default');





app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes.routes);

app.use(defRoutes);



app.listen(3000);