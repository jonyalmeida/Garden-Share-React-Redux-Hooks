const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { User } = require('../../db/models');
const { handleValidationErrors } = require('../util/validation');
const { generateToken } = require('../util/auth');
const { jwtConfig: { expiresIn } } = require('../../config');

const validateSignup = [
    check('firstName', 'must be a your first name')
        .exists()
        .isLength({ min: 2, max: 20 }),
    check('lastName', 'must be a your last name')
        .exists()
        .isLength({ min: 2, max: 120 }),
    check('address', 'must be a valid US address')
        .exists()
        .isLength({ min: 5, max: 255 }),
    check('email', 'must be a valid email address')
        .exists()
        .isEmail(),
    check('password', 'must be 6 or more characters')
        .exists()
        .isLength({ min: 6, max: 70 }),
];

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res, _next) {
    const users = await User.findAll();
    res.json({ users });
}));

router.post(
    '/',
    validateSignup,
    handleValidationErrors,
    asyncHandler(async function (req, res) {
        const user = await User.signup(req.body);

        const token = await generateToken(user);
        res.cookie('token', token, {
            maxAge: expiresIn * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: true,
        });

        return res.json({
            user,
        });
    })
);

module.exports = router;
