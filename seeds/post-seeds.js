const { Post } = require('../models');

const postdata = [
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquam eleifend mi in nulla. Morbi tristique senectus et netus et malesuada. Nunc mattis enim ut tellus elementum sagittis vitae.',
    user_id: 1
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquam eleifend mi in nulla. Morbi tristique senectus et netus et malesuada. Nunc mattis enim ut tellus elementum sagittis vitae.',
    user_id: 1
  },
  {
    title: 'Etiam justo.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquam eleifend mi in nulla. Morbi tristique senectus et netus et malesuada. Nunc mattis enim ut tellus elementum sagittis vitae.',
    user_id: 1
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquam eleifend mi in nulla. Morbi tristique senectus et netus et malesuada. Nunc mattis enim ut tellus elementum sagittis vitae.',
    user_id: 1
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Aliquam eleifend mi in nulla. Morbi tristique senectus et netus et malesuada. Nunc mattis enim ut tellus elementum sagittis vitae.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
