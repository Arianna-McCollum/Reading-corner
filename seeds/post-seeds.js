const { Post } = require('../models');

const postdata = [
  {
    title:
      'Vestibulum ante ',
    post_content: 'Lorem ipsum dolor sit amet',
    user_id: 1
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Lorem ipsum dolor sit amet, consect',
    user_id: 1
  },
  {
    title: 'Etiam justo.',
    post_content: 'Lorem ipsum dolor sit amet, ',
    user_id: 1
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Lorem ipsum dolor sit amet, ',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
