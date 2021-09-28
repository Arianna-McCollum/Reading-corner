// import all models
const Post = require('./Post');
const User = require('./User');
const Book = require('./Book');


// create associations
User.hasMany(Post, {
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


module.exports = { User, Post, Book};
