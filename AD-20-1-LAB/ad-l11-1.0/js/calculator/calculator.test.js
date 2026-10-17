const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('the multiply of 5 * 10 to equal 50', ()=>{
  expect(calculator.multiply(5,10)).toBe(50);
});

test('the result of 10 / 5 to equal 2', ()=>{
  expect(calculator.divide(10,5)).toBe(2);
});

test('divide() debería lanzar un error si el segundo argumento es 0', () => {
  // NOTA IMPORTANTE: Debemos pasar una función flecha () => a expect, 
  // para que Jest pueda "atrapar" el error. Si no, la prueba colapsa.
  expect(() => divide(10, 0)).toThrow("No se puede dividir por cero");
});