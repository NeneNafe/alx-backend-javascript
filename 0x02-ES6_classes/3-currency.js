export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(Newname) {
    if (typeof Newname === 'string') {
      this._name = Newname;
    } else {
      throw TypeError('Name must a string');
    }
  }

  set code(Newcode) {
    if (typeof Newcode === 'string') {
      this._code = Newcode;
    } else {
      throw TypeError('Code must a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
