import Pencil from "../src/pencil.js";

let pencil;

beforeEach(() => {
  pencil = new Pencil(1);
});

describe('pencil', () => {
  test('can write', () => {
    expect(pencil.write('a')).toBe('a');
  });
  
  test('lead durability degrades by 1 when writing a single character', () => {
    pencil.write('a');
    expect(pencil.leadLength).toBe(0);
  });
  
  test('no longer writes when it is out of lead', () => {
    pencil.write('abc');
    expect(pencil.text).toBe('a');
  });
  
  test('can return what it wrote', () => {
    pencil = new Pencil(5);
    pencil.write('abc');
    expect(pencil.text).toBe('abc');
  });
  
  test('capital letters degrade lead by 2', () => {
    pencil = new Pencil(5);
    pencil.write('A');
    expect(pencil.leadLength).toBe(3);
  });
  
  test('spaces expend no lead', () => {
    pencil.write(' ');
    expect(pencil.leadLength).toBe(1);
  });
});
