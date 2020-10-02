'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      { productName: "lettuce", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "spinach", productQty: "2.5 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 2, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "broccoli", productQty: "4 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 4, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "squash", productQty: "11.5 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 2, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "kale", productQty: "1 bunch", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 4, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "garlic", productQty: "14 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 3, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "onions", productQty: "24 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 3, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "beets", productQty: "1.5 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 2, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "tomatoes", productQty: "35 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "pumpkin", productQty: "4 units", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 6, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "parsley", productQty: "1 bunch", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 4, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "dill", productQty: "1 bunch", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 5, vegetables: true, animal: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "eggs", productQty: "5 dozens", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, animal: true, vegetables: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "cheese", productQty: "2 units", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 6, animal: true, vegetables: false, fruit: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "banana", productQty: "5.5 lbs", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 4, fruit: true, vegetables: false, animal: false, createdAt: new Date(), updatedAt: new Date() },
      { productName: "watermellon", productQty: "8 units", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 5, fruit: true, vegetables: false, animal: false, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
