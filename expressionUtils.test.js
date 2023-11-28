const { evaluateExpression } = require('./expressionUtils');

test('Evaluate expression as true', () => {
  const expression = '3 > 2 && 5 < 10';
  expect(evaluateExpression(expression)).toBe(true);
});

test('Evaluate expression as false', () => {
  const expression = '3 > 5 || 10 < 8';
  expect(evaluateExpression(expression)).toBe(false);
});