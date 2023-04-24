import Square from '../../../../../app/02-o-open-closed/concept/after/Square';
import Rectangle from '../../../../../app/02-o-open-closed/concept/after/Rectangle';
import Area from '../../../../../app/02-o-open-closed/concept/after/Area';

describe('Testing area', () => {
  test('Should be able to give area', () => {
    const square = new Square(10);
    const rectangle = new Rectangle(10,20);
    const area = new Area();
    area.setShape(square);
    area.setShape(rectangle);
    expect(area.getArea()).toBe(300);
  });
});