const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Op } = require('sequelize');

const { Product } = require('../../db/models');
const { handleValidationErrors } = require('../util/validation');

const router = new express.Route();

const validateProducts = [
    //TODO 
]

async function queryGoods(productName = '.*', vegetable = false, animal = false, fruit = false) {
    return await Product.findAll({
        where: {
            productName: {
                [Op.like]: `${productName}`,
            },
            vegetable,
            animal,
            fruit,
        },
    });
}

//list all products matching sellerId 
router.get('/', asyncHandler(async function (req, res) {
    const { sellerId } = req.body;
    const goods = await Product.findAll({
        where: {
            sellerId
        },
    });

    res.json({ goods });
}));

//list all products matching specific queries 
router.get('/offered', asyncHandler(async function (req, res) {
    const {
        productName,
        vegetable,
        fruit,
        animal,
    } = req.body;

    const goods = queryGoods(productName, vegetable, animal, fruit);

    res.json({ goods });
}));

//create new goods listing
router.post('/', asyncHandler(async function (req, res) {
    const {
        productName,
        vegetable,
        fruit,
        animal,
        sellerId,
        productQty,
        productDescription,
    } = req.body;

    const good = await Product.create({
        productName,
        vegetable,
        fruit,
        animal,
        sellerId,
        productQty,
        productDescription
    });

    res.json({ good });
}));

//update goods listing
router.put('/', asyncHandler(async function (req, res) {
    const {
        productName,
        vegetable,
        fruit,
        animal,
        sellerId,
        productQty,
        productDescription,
    } = req.body;

    const good = await Product.create({
        productName,
        vegetable,
        fruit,
        animal,
        sellerId,
        productQty,
        productDescription
    });

    res.json({ good });
}));

//delete goods listing
router.delete('/', asyncHandler(async function (req, res) {
    const { id } = req.body;

    const good = await Product.findByPk({ id });

    res.send('product removed');
}));
