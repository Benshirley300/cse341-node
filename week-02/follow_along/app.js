const express = require("express");
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


// FOR HANDLEBARS ENGINE
// const expressHbs = require('express-handlebars');

// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts/', 
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs');
// app.set('views', 'views');

// FOR PUG ENGINE
// app.engine('view engine', 'pug');
// app.set('views', 'views')



const adminData= require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoute = require('./routes/error');




app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use(errorRoute);



app.listen(3000);