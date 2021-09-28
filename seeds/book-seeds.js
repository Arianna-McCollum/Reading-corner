const { Book } = require('../models');

const bookdata = [
  {
    book_title: 'Donec posuere metus.',
    author: 'Alex the Great',
    user_id: 9
  },
  {
    book_title: 'Donec posuere metus.',
    author: 'Alex the Notso Great',
    user_id:9
  }
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;