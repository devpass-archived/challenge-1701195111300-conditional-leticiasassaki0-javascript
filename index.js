const { evaluateExpression } = require('./expressionUtils');

// Example usage
const expression = '3 > 2 && 5 < 10';
const result = evaluateExpression(expression);
console.log('Result:', result);