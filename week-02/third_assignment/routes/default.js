const express = require('express');
const path = require('path');


const router = express.Router();

const userData = require('./users');
const usernames = userData.usernames;

router.get('/', (req, res, next) => {
    res.render('default', {pageTitle: 'Home', path: 'home', users: usernames, productCSS: true, formCSS: true})
});

router.post('/users', (req, res, next) => {
    
    usernames.push({name: req.body.username})
    res.redirect('/users');
});

module.exports = router;