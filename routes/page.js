const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('index', {
        title: "DNM-Blog",
    });
});

module.exports = router;