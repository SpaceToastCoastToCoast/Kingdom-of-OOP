const LivingThing = require('./LivingThing.js');

module.exports = class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }
  set heterotroph(newHet) {
    if (typeof newHet === 'boolean') {
      this._heterotroph = newHet;
    } else {
      throw new TypeError('heterotroph must be a boolean');
    }
  }

  get autotroph() {
    return !this._heterotroph;
  }
  set autotroph(newAu) {
    if (typeof newAu === 'boolean') {
      this._heterotroph = !newAu;
    } else {
      throw new TypeError('autotroph must be a boolean');
    }
  }

};