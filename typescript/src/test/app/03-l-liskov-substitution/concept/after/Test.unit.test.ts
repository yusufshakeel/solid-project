import Eagle from '../../../../../app/03-l-liskov-substitution/concept/after/Eagle';
import Penguin from '../../../../../app/03-l-liskov-substitution/concept/after/Penguin';
import Bird from '../../../../../app/03-l-liskov-substitution/concept/after/Bird';

describe('Testing Liskov Substitution Principle - after', () => {
  test('Should be able to work with individual object types', () => {
    const eagle = new Eagle();
    const penguin = new Penguin();
    expect(eagle.fly()).toBe('I can fly.');
    expect(penguin.fly()).toBe('I cannot fly.');
  });

  test('Should be able to work when object is swapped', () => {
    const eagle: Bird = new Eagle();
    const penguin: Bird = new Penguin();
    expect(eagle.fly()).toBe('I can fly.');
    expect(penguin.fly()).toBe('I cannot fly.');
  });
});