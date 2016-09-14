class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('name must be a String');
    }
  }

  get uniCellular() {
    return this._uniCellular;
  }
  set uniCellular(newUni) {
    if (typeof newUni === 'boolean') {
      this._uniCellular = newUni;
    } else {
      throw new TypeError('uniCellular must be a boolean');
    }
  }

  get multiCellular() {
    return !this._uniCellular;
  }
  set multiCellular(newMulti) {
    if (typeof newMulti === 'boolean') {
      this._uniCellular = !newMulti;
    } else {
      throw new TypeError('multiCellular must be a boolean');
    }
  }

  get eukaryote() {
    return this._trueNucleus;
  }
  set eukaryote(newEu) {
    if (typeof newEu === 'boolean') {
      this._trueNucleus = newEu;
    } else {
      throw new TypeError('eukaryote must be a boolean');
    }
  }

  get prokaryote() {
    return !this._trueNucleus;
  }
  set prokaryote(newPro) {
    if (typeof newPro === 'boolean') {
      this._trueNucleus = !newPro;
    } else {
      throw new TypeError('prokaryote must be a boolean');
    }
  }

  get anaerobic() {
    return this._anaerobic;
  }
  set anaerobic(newAn) {
    if (typeof newAn === 'boolean') {
      this._anaerobic = newAn;
    } else {
      throw new TypeError('anaerobic must be a boolean');
    }
  }

  get aerobic() {
    return !this._anaerobic;
  }
  set aerobic(newAe) {
    if (typeof newAe === 'boolean') {
      this._anaerobic = !newAe;
    } else {
      throw new TypeError('aerobic must be a boolean');
    }
  }

  get asexual() {
    return this._asexual;
  }
  set asexual(newAs) {
    if (typeof newAs === 'boolean') {
      this._asexual = newAs;
    } else {
      throw new TypeError('asexual must be a boolean');
    }
  }

  get sexual() {
    return !this._asexual;
  }
  set sexual(newSe) {
    if (typeof newSe === 'boolean') {
      this._asexual = !newSe;
    } else {
      throw new TypeError('sexual must be a boolean');
    }
  }

  get mobile() {
    return this._mobile;
  }
  set mobile(newMo) {
    if (typeof newMo === 'boolean') {
      this._mobile = newMo;
    } else {
      throw new TypeError('mobile must be a boolean');
    }
  }

  get immobile() {
    return !this._mobile;
  }
  set immobile(newIm) {
    if (typeof newIm === 'boolean') {
      this._mobile = !newIm;
    } else {
      throw new TypeError('immobile must be a boolean');
    }
  }

}