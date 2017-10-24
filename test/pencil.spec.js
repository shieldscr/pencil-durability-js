import Pencil from "../src/pencil.js";

test('pencil can write', () => {
  let pencil = new Pencil();

  expect(pencil.write('a')).toBe('a');
});
