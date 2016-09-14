const LivingThing = require('./LivingThing.js');

module.exports = class Bacteria{
  constructor(name) {
    super(name, true, false, false, true, false);
  }
};