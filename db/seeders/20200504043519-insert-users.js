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
      r({ email: 'demo@example.com', firstName: 'Jon', lastName: 'Maloney', address: '520407 Basilone Rd, Camp Pendleton North, CA 92055', userGeocode: [33.3870493, -117.5236667], hashedPassword: createPassword() }),
      r({ email: 'mila@example.com', firstName: 'Mila', lastName: 'Yammich', address: '520407 Basilone Rd, Camp Pendleton North, CA 92055', userGeocode: [33.3870493, -117.5236667], hashedPassword: createPassword() }),
      r({ email: 'kat@example.com', firstName: 'Kat', lastName: 'Spears', address: '2600 Avenida Del Presidente, San Clemente, CA 92672', userGeocode: [33.40208, -117.5987686], hashedPassword: createPassword() }),
      r({ email: 'yan@example.com', firstName: 'Yan', lastName: 'Biggs', address: '243 Avenida Lobeiro, San Clemente, CA 92672', userGeocode: [33.4026117, -117.6134673], hashedPassword: createPassword() }),
      r({ email: 'emilia@example.com', firstName: 'Emilia', lastName: 'Yomovich', address: '990 Avenida Vista Hermosa, San Clemente, CA 92673', userGeocode: [33.4582507, -117.6055279], hashedPassword: createPassword() }),
      r({ email: 'jennifer@example.com', firstName: 'Jennifer', lastName: 'Sarandon', address: '28352 Avenida La Mancha, San Juan Capistrano, CA 92675', userGeocode: [33.4915418, -117.6422635], hashedPassword: createPassword() }),
      r({ email: 'robert@example.com', firstName: 'Robert', lastName: 'Duval', address: '31520 Camino Capistrano, San Juan Capistrano, CA 92675', userGeocode: [33.4992005, -117.6599017], hashedPassword: createPassword() }),
      r({ email: 'roger@example.com', firstName: 'Roger', lastName: 'Sports', address: '23700 Club House Dr, Laguna Niguel, CA 92677', userGeocode: [33.5083972, -117.7176657], hashedPassword: createPassword() }),
      r({ email: 'carla@example.com', firstName: 'Carla', lastName: 'Laredo', address: '30799 S Coast Hwy, Laguna Beach, CA 92651', userGeocode: [33.523711, -117.745904], hashedPassword: createPassword() }),
      r({ email: 'michael@example.com', firstName: 'Michael', lastName: 'Miles', address: 'Aliso Creek and, Pacific Park Dr, Aliso Viejo, CA 92656', userGeocode: [33.5711379, -117.7233306], hashedPassword: createPassword() }),
      r({ email: 'joseph@example.com', firstName: 'Joseph', lastName: 'Margura', address: '22300 Canyon Crest Dr, Mission Viejo, CA 92692', userGeocode: [33.6126776, -117.6479712], hashedPassword: createPassword() }),
      r({ email: 'liza@example.com', firstName: 'Liza', lastName: 'Kravitz', address: '19152 E Santiago Canyon Rd, Trabuco Canyon, CA 92679', userGeocode: [33.6531256, -117.7071944], hashedPassword: createPassword() }),
      r({ email: 'julia@example.com', firstName: 'Julia', lastName: 'Wells', address: '3405 Michelson Dr, Irvine, CA 92612', userGeocode: [33.6706281, -117.8203192], hashedPassword: createPassword() }),
      r({ email: 'paul@example.com', firstName: 'Paul', lastName: 'Rosen', address: '2961 El Camino Real, Tustin, CA 92782', userGeocode: [33.7142135, -117.7777104], hashedPassword: createPassword() }),
      r({ email: 'gabriel@example.com', firstName: 'Gabriel', lastName: 'Menudo', address: '401 Newport Center Dr, Newport Beach, CA 92660', userGeocode: [33.6196141, -117.9098643], hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
