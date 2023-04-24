import Rectangle from '../../../../../app/02-o-open-closed/concept/after/Rectangle';

describe('Testing rectangle', () => {
  test('Should be able to return area', () => {
    const rectangle = new Rectangle(10,20);
    expect(rectangle.getArea()).toBe(200);
  });
});