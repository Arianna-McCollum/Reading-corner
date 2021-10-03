const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedBooks = require('./book-seeds.js');
// const seedFriends = require('./friendship-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedBooks();
  console.log('--------------');

  // await seedFriends();
  // console.log('--------------');

  process.exit(0);
};

seedAll();
