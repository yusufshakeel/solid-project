import Square from '../../../../../app/02-o-open-closed/concept/before/Square';

describe('Testing square class', () => {
  test('Should be able to return side', () => {
    const square = new Square(10);
    expect(square.getSide()).toBe(10);
  });
});