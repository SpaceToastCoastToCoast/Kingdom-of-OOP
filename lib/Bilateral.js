const Animal = require('./Animal.js');

module.exports = class Bilateral extends Animal {
  constructor(name, body) {
    super(name, 'bilateral');
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(newBody) {
    if (typeof newBody === 'string') {
      this._body = newBody;
    } else {
      throw new TypeError('body must be a string');
    }
  }

};