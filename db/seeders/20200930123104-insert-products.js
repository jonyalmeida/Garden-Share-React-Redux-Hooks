'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      { productName: "lettuce", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "spinach", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "broccoli", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "squash", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "kale", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "garlic", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "onions", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "beets", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "tomatoes", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "pumpkin", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "parsley", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
      { productName: "dill", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
