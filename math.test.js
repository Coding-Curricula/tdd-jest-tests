const { add, multiply } = require('./math');

test('adds two numbers together and returns the result', () => {
    expect(add(2, 2)).toBe(4);
});

test('function named multiply will multiply two numbers together and return the result', () => {
    expect(multiply(3, 2)).toBe(6);
});