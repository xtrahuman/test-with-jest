class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add = () => this.num1 + this.num2;

  substract = () => this.num1 - this.num2;

  multiply = () => this.num1 * this.num2;

  divide = () => this.num1 / this.num2;
}
module.exports = Calculator;
