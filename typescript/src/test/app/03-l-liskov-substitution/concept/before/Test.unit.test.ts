import Eagle from '../../../../../app/03-l-liskov-substitution/concept/before/Eagle';
import Penguin from '../../../../../app/03-l-liskov-substitution/concept/before/Penguin';
import Bird from '../../../../../app/03-l-liskov-substitution/concept/before/Bird';

describe('Testing Liskov Substitution Principle - before', () => {
  test('Should be able to work with individual object types', () => {
    const eagle = new Eagle();
    const penguin = new Penguin();
    expect(eagle.fly()).toBe('I am Eagle. I can fly.');
    expect(() => penguin.fly()).toThrow();  // fly() throws error which violates LSP
  });

  test('Should not work if objects are swapped', () => {
    const eagle: Bird = new Eagle();
    const penguin: Eagle = new Penguin();
    expect(eagle.fly()).toBe('I am Eagle. I can fly.');
    expect(() => penguin.fly()).toThrow();  // fly() throws error which violates LSP
  });
});