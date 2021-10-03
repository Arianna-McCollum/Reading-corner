// import all models
const Post = require('./Post');
const User = require('./User');
const Book = require('./Book');
// const Friendship = require('./Friendship');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasMany(Book, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Friendship associations
// Friendship.belongsTo(User, {
//    as: 'info',
//    foreignKey: 'user_id' 
// });

// User.belongsToMany(User, { 
//   as: 'friends', 
//   through: Friendship
// });

// User.hasMany(Friendship, {
  //  as: 'friends', 
  //  foreignKey: 'user' 
  // });
// 
// 


module.exports = { User, Post, Book };
