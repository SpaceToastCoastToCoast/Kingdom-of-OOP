const Eukaryota = require('./Eukaryota.js');

module.exports = class Animal extends Eukaryota {
  constructor(name, symmetry) {
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry() {
    return this._symmetry;
  }
  set symmetry(newSym) {
    if (typeof newSym === 'string') {
      this._symmetry = newSym;
    } else {
      throw new TypeError('symmetry must be a string');
    }
  }

};