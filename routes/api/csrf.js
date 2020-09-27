const express = require('express');
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
    router.get('/token', function (req, res) {
        res.cookie('XSRF-TOKEN', req.csrfToken(), { sameSite: true });
        return res.json({
            message: 'success'
        });
    });
}

module.exports = router;