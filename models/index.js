// imports all models
const Post = require('./Post');
const User = require('./User');
const Book = require('./Book');

// create associations
User.hasMany(Post);

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Book}