'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: DataTypes.TEXT,
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goodsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Message.associate = function (models) {
    // associations can be defined here
    Message.belongsTo(models.User, { foreignKey: 'senderId' });
    Message.belongsTo(models.User, { foreignKey: 'receiverId' });
    Message.belongsTo(models.User, { foreignKey: 'goodsId' });
  };
  return Message;
};