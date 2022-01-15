const express = require('express');
const path = require('path');


const router = express.Router();

const usernames = [];

router.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Add a Product', path: 'users', users: usernames, productCSS: true, formCSS: true})
});


exports.routes = router;
exports.usernames = usernames;