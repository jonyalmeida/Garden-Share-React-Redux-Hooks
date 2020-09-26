const router = require('express').Router();
const api = require('./api');

router.use('/api', api);

router.get('/', (req, res) => {
    res.send('The back end is working');
});

module.exports = router;
