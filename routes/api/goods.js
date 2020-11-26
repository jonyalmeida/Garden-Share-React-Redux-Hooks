const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { Op } = require("sequelize");

const { Product, User } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");

const router = new express.Router();

const validateProducts = [
    //TODO
];

async function queryGoods(
    productName = ".*",
    vegetables = false,
    animal = false,
    fruit = false
) {
    return await Product.findAll({
        where: {
            productName: {
                [Op.iRegexp]: productName,
            },
            [Op.or]: [
                {
                    vegetables,
                },
                {
                    animal,
                },
                {
                    fruit,
                },
            ],
        },
    });
}

//list all products matching sellerId
router.put(
    "/goods",
    asyncHandler(async function (req, res) {
        console.log("GOODS PUT", req.body);
        const sellerId = req.body.userId;
        const myGoods = await Product.findAll({
            where: {
                sellerId,
            },
        });

        console.log(myGoods);

        res.json({ myGoods });
    })
);

//list all products NOT matching sellerId
router.put(
    "/all",
    asyncHandler(async function (req, res) {
        console.log("ALL GOODS PUT", req.body);
        const userId = req.body.userId;
        const myGoods = await Product.findAll({
            where: {
                [Op.not]: [
                    {
                        sellerId: userId,
                    },
                ],
            },
        });

        console.log(myGoods);

        res.json({ myGoods });
    })
);

//list all products matching specific queries
router.put(
    "/offered",
    asyncHandler(async function (req, res) {
        const { productName, vegetables, fruit, animal } = req.body;

        const goodsQuery = await queryGoods(
            productName,
            vegetables,
            animal,
            fruit
        );
        res.json({ goodsQuery });
    })
);

//list all offers
router.get(
    "/allgoods",
    asyncHandler(async function (_req, res, _next) {
        const goods = await Product.findAll({
            include: [{ model: User }],
        });
        res.json({ goods });
    })
);

//create new goods listing
router.post(
    "/",
    asyncHandler(async function (req, res) {
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
            productDescription,
        });
        console.log(good);
        res.json({ good });
    })
);

//update goods listing
router.put(
    "/",
    asyncHandler(async function (req, res) {
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
            productDescription,
        });

        res.json({ good });
    })
);

//delete goods listing
router.delete(
    "/",
    asyncHandler(async function (req, res) {
        const { id } = req.body;

        const good = await Product.findByPk({ id });

        res.send("product removed");
    })
);

module.exports = router;
