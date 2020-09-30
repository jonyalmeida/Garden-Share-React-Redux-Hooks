const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { User, Product, Message } = require('../../db/models');
const { handleValidationErrors } = require('../util/validation');

const validateMessage = [
    check('message', 'must include a message')
        .exists(),
    check('senderId', 'must be a valid user id integer')
        .exists(),
    check('receiverId', 'must be a valid user id integer')
        .exists()
];

const router = new express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const goodsId = req.body.goodsId;

    const messages = await Message.findAll({
        where: {
            receiverId,
        }
    });

    res.json({ messages });
}));

router.post('/', validateMessage, handleValidationErrors, asyncHandler(async function (req, res) {
    const {
        message,
        receiverId,
        senderId,
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

