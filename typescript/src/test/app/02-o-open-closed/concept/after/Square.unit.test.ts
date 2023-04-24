import Square from '../../../../../app/02-o-open-closed/concept/after/Square';

describe('Testing square', () => {
  test('Should be able to return area', () => {
    const square = new Square(10);
    expect(square.getArea()).toBe(100);
  });
});