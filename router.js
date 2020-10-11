const express = require('express');
const router = express.Router();

/** Check if server is running*/
router.get('/', (req, res) => {
    res.send({response: 'Server is up and running.'}).status(200);
});

router.get('/login', (req, res) => {
    res.send({response: 'Server is up and running.'}).status(200);
});

router.get('/logout', (req, res) => {
    res.send({response: 'Server is up and running.'}).status(200);
});

module.exports = router;