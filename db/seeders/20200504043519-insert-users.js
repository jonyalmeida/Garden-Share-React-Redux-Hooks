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
      r({ email: 'demo@example.com', firstName: 'Jon', lastName: 'Miles', address: '1234 Star St./Yuba City/CA/94953', userGeocode: [42.123344, 41.1242], hashedPassword: createPassword() }),
      r({ email: 'yusuzke@example.com', firstName: 'Mila', lastName: 'Jo', address: '1354 Far St./Marys City/CA/94233', userGeocode: [32.1223344, 45.1252], hashedPassword: createPassword() }),
      r({ email: 'petdrea@example.com', firstName: 'Kat', lastName: 'Len', address: '751 Close St./Carlton City/CA/93753', userGeocode: [42.126444, 44.6252], hashedPassword: createPassword() }),
      r({ email: 'demgod@example.com', firstName: 'Jon', lastName: 'Miles', address: '1223 Star St./Yuba City/CA/94953', userGeocode: [42.12394, 41.1242], hashedPassword: createPassword() }),
      r({ email: 'yusgukasde@example.com', firstName: 'Mila', lastName: 'Jo', address: '43134 Far St./Marys City/CA/94233', userGeocode: [32.122834, 45.1252], hashedPassword: createPassword() }),
      r({ email: 'pertraq@example.com', firstName: 'Kat', lastName: 'Len', address: '7542 Close St./Carlton City/CA/93753', userGeocode: [42.12474, 44.6252], hashedPassword: createPassword() }),
      r({ email: 'demtods@example.com', firstName: 'Jon', lastName: 'Miles', address: '12342 Star St./Yuba City/CA/94953', userGeocode: [42.12364, 41.1242], hashedPassword: createPassword() }),
      r({ email: 'yusjukea@example.com', firstName: 'Mila', lastName: 'Jo', address: '13424 Far St./Marys City/CA/94233', userGeocode: [32.122364, 45.1252], hashedPassword: createPassword() }),
      r({ email: 'pmetrasa@example.com', firstName: 'Kat', lastName: 'Len', address: '7415 Close St./Carlton City/CA/93753', userGeocode: [42.12444, 44.6252], hashedPassword: createPassword() }),
      r({ email: 'demnoda@example.com', firstName: 'Jon', lastName: 'Miles', address: '12413 Star St./Yuba City/CA/94953', userGeocode: [42.12334, 41.1242], hashedPassword: createPassword() }),
      r({ email: 'yusurkdafe@example.com', firstName: 'Mila', lastName: 'Jo', address: '13414 Far St./Marys City/CA/94233', userGeocode: [32.122134, 45.1252], hashedPassword: createPassword() }),
      r({ email: 'petrge2a@example.com', firstName: 'Kat', lastName: 'Len', address: '7542 Close St./Carlton City/CA/93753', userGeocode: [42.12244, 44.6252], hashedPassword: createPassword() }),
      r({ email: 'demowdw@example.com', firstName: 'Jon', lastName: 'Miles', address: '1243 Star St./Yuba City/CA/94953', userGeocode: [42.12334, 41.1242], hashedPassword: createPassword() }),
      r({ email: 'yususkfde@example.com', firstName: 'Mila', lastName: 'Jo', address: '1344 Far St./Marys City/CA/94233', userGeocode: [32.1224, 45.1252], hashedPassword: createPassword() }),
      r({ email: 'peatrdsaa@example.com', firstName: 'Kat', lastName: 'Len', address: '755 Close St./Carlton City/CA/93753', userGeocode: [42.144, 44.6252], hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
