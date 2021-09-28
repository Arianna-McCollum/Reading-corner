const { Book } = require('../models');

const bookdata = [
  {
    title: 'Donec posuere metus.',
    author: 'Alex the Great',
  },
  {
    title: 'Donec posuere metus.',
    author: 'Alex the Notso Great',
  }
]

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks