const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(13);
    expect(fibonacci.next()).toBe(21);
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(2);
    expect(fibonacci.next()).toBe(3);
});

test('When initialized with a number not in fibonacci the next number can be returned', () => {
    expect(() => {
        fibonacci.init(7);
      }).toThrow();
});

test('When skipping a set number to return that number in the list', () => {
    expect(fibonacci.skip(8)).toBe(13);
});

test('When initialised at 2. skipping a set number to return that number in the list', () => {
    fibonacci.init(2);
    expect(fibonacci.skip(3)).toBe(8);
});

