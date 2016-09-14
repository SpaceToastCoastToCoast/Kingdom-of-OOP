const Bilateral = require('./Bilateral.js');

module.exports = class Vertebrate extends Bilateral {
  constructor(name) {
    super(name, 'vertebral-column');
  }
};