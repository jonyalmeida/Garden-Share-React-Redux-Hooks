'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [10, 255],
      },
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
      },
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(120),
      validates: {
        len: [2, 120],
      },
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
      type: DataTypes.STRING(36),
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        }
      }
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Message, { foreignKey: 'senderId' });
    User.hasMany(models.Message, { foreignKey: 'receiverId' });
    User.hasMany(models.Product, { foreignKey: 'sellerId' });
  };

  User.prototype.toSafeObject = function () {
    const {
      id,
      email
    } = this;

    return { id, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ email, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        email,
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.getCurrentUserById(user.id);
    }
  };

  User.signup = async function ({ email, password, firstName, lastName, address, userGeocode }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      hashedPassword,
      firstName,
      lastName,
      userGeocode,
      address,
    });
    return await User.getCurrentUserById(user.id);
  };

  return User;
}