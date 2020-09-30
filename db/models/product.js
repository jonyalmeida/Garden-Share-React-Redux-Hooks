'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: {
      type: DataTypes.STRING(90),
      allowNull: false,
      valides: {
        len: [5, 90],
      },
    },
    productQty: {
      type: DataTypes.STRING(90),
      allowNull: false,
      valides: {
        len: [3, 90],
      },
    },
    productDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vegetables: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fruit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    animal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models.User, { foreignKey: 'sellerId' });
  };
  return Product;
};