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
  
  test('writes spaces when it is out of lead', () => {
    pencil.write('abc');
    expect(pencil.text).toBe('a  ');
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

  test('can be sharpened', () => {
    pencil.write('a'); 
    pencil.sharpen();
    expect(pencil.leadLength).toBe(1);
  });

  test('can erase', () => {
    pencil.write('a');
    pencil.erase('a');
    expect(pencil.text).toBe(' ');
  });

  test('can erase word', () => {
    pencil = new Pencil(10);
    pencil.write('abc123');
    pencil.erase('abc');
    expect(pencil.text).toBe('   123');
  });
});
