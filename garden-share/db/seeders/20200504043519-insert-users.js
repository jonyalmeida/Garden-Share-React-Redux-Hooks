'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ email: 'demo@example.com', firstName: 'Jon', lastName: 'Miles', address: '123 Star St./Yuba City/CA/94953', userGeocode: [42.1234, 41.1242], hashedPassword: createPassword() }),
      r({ email: 'yusuke@example.com', firstName: 'Mila', lastName: 'Jo', address: '134 Far St./Marys City/CA/94233', userGeocode: [32.12234, 45.1252], hashedPassword: createPassword() }),
      r({ email: 'petra@example.com', firstName: 'Kat', lastName: 'Len', address: '75 Close St./Carlton City/CA/93753', userGeocode: [42.1244, 44.6252], hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
