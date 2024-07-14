var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    res.send('POST request image media')
});

module.exports = router

