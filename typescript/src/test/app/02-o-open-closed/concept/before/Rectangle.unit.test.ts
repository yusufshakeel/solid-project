import Rectangle from '../../../../../app/02-o-open-closed/concept/before/Rectangle';

describe('Testing rectangle', () => {
  test('Should be able to return length and width', () => {
    const rectangle = new Rectangle(10, 20);
    expect(rectangle.getLength()).toBe(10);
    expect(rectangle.getWidth()).toBe(20);
  });
});