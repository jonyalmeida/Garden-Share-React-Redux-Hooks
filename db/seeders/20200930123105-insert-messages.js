'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      { message: "Do you deliver?", receiverId: 1, senderId: 2, goodsId: 10, createdAt: new Date(), updatedAt: new Date() },
      { message: "That sounds good!", receiverId: 6, senderId: 6, goodsId: 3, createdAt: new Date(), updatedAt: new Date() },
      { message: "Very well, thanks!", receiverId: 1, senderId: 6, goodsId: 9, createdAt: new Date(), updatedAt: new Date() },
      { message: "Do you have other fruits?", receiverId: 3, senderId: 1, goodsId: 6, createdAt: new Date(), updatedAt: new Date() },
      { message: "Are they organic?", receiverId: 3, senderId: 4, goodsId: 10, createdAt: new Date(), updatedAt: new Date() },
      { message: "What are you to trade for?", receiverId: 5, senderId: 1, goodsId: 10, createdAt: new Date(), updatedAt: new Date() },
      { message: "I don't use pesticides.", receiverId: 3, senderId: 2, goodsId: 3, createdAt: new Date(), updatedAt: new Date() },
      { message: "What time can I come pick up?", receiverId: 3, senderId: 6, goodsId: 12, createdAt: new Date(), updatedAt: new Date() },
      { message: "Just come by and grab 'em", receiverId: 1, senderId: 2, goodsId: 4, createdAt: new Date(), updatedAt: new Date() },
      { message: "See you soon!", receiverId: 3, senderId: 4, goodsId: 4, createdAt: new Date(), updatedAt: new Date() },
      { message: "Do you have anymore onions?", receiverId: 3, senderId: 6, goodsId: 7, createdAt: new Date(), updatedAt: new Date() },
      { message: "That looks delicious!", receiverId: 3, senderId: 6, goodsId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Messages', null, {});
  }
};
