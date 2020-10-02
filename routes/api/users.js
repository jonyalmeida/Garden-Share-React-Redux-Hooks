const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Op } = require('sequelize');

const { User, Message } = require('../../db/models');
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

const validateMessage = [
    check('message', 'must include a message')
        .exists(),
    check('senderId', 'must be a valid user id integer')
        .exists(),
    check('receiverId', 'must be a valid user id integer')
        .exists()
];

router.get('/:id/messages', asyncHandler(async function (req, res, next) {
    const receiverId = parseInt(req.params.id);
    const senderId = parseInt(req.params.id);
    const messages = await Message.findAll({
        where: {
            [Op.or]: [
                {
                    receiverId,
                },
                {
                    senderId,
                }
            ],
        },
        include: [{ model: User }]
    });
    res.json({ messages });
}));

router.post('/:id/messages', validateMessage, handleValidationErrors, asyncHandler(async function (req, res) {

    const senderId = parseInt(req.params.id);

    const {
        message,
        receiverId,
        goodsId,
    } = req.body;

    const msg = await Message.create({
        message,
        receiverId,
        senderId,
        goodsId
    });

    res.json(await Message.findOne({
        where: {
            id: msg.id
        }
    }));
}));

// router.post('/:id/messages/reply', validateMessage, handleValidationErrors, asyncHandler(async function (req, res) {

//     const senderId = parseInt(req.params.id);

//     const {
//         message,
//         receiverId,
//         goodsId,
//     } = req.body;

//     const msg = await Message.create({
//         message,
//         receiverId,
//         senderId,
//         goodsId
//     });

//     res.json(await Message.findOne({
//         where: {
//             id: msg.id
//         }
//     }));
// }));

module.exports = router;
