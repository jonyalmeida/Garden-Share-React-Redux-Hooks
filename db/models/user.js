'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [10, 255],
      }
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(20),
      validates: {
        len: [3, 20],
      }
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(120),
      validates: {
        len: [2, 120],
      }
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true,
    },
    userGeocode: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.DECIMAL),
    },
    tokenId: {
      type: DataTypes.STRING
    },
  },
    {});

  User.associate = function (models) {
  };

  return User;
};
