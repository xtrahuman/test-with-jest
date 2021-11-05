const Calculator = require('./calculator.js');

describe('calculate', () => {
  test('add positive integers', () => {
    expect(new Calculator(0, 2).add()).toBe(2);
  });

  test('add negative integers', () => {
    expect(new Calculator(-1, -2).add()).toBe(-3);
  });

  test('add 0 integers', () => {
    expect(new Calculator(0, 0).add()).toBe(0);
  });
});

describe('multiply', () => {
  test('multiply 0 and positive integer', () => {
    expect(new Calculator(0, 2).multiply()).toBe(0);
  });

  test('multiply negative numbers', () => {
    expect(new Calculator(-1, -2).multiply()).toBe(2);
  });

  test('multiply 0 integers', () => {
    expect(new Calculator(0, 0).multiply()).toBe(0);
  });
});

describe('divide', () => {
  test('divide 0 by positive integer', () => {
    expect(new Calculator(0, 2).divide()).toBe(0);
  });

  test('divide integer by 0', () => {
    expect(new Calculator(1, 0).divide()).toBe(Infinity);
  });

  test('divide two positive integers', () => {
    expect(new Calculator(1, 2).divide()).toBe(0.5);
  });
});