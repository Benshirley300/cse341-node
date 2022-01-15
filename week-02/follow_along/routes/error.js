const express = require('express');
const path = require('path');



const router = express.Router();

router.use('/', (req, res, next) => {
    res.render('404', {pageTitle: 'Page not Found', path: ''})
})

module.exports = router;