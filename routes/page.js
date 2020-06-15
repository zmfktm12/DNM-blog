const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('main', {
        title: "DNM-Blog",
        user: null,
    });
});

module.exports = router;