import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newValue) {
    if (typeof newValue === 'number') {
      this._amount = newValue;
    }
    throw TypeError('amount must be an number');
  }

  set currency(newcurrency) {
    if (newcurrency instanceof Currency) {
      this._currency = newcurrency;
    } else throw Error('currency must be an instance of Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw TypeError('amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
