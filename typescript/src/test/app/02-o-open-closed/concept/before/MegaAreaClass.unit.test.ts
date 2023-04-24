import Square from '../../../../../app/02-o-open-closed/concept/before/Square';
import Rectangle from '../../../../../app/02-o-open-closed/concept/before/Rectangle';
import MegaAreaClass from '../../../../../app/02-o-open-closed/concept/before/MegaAreaClass';

describe('Testing mega area class', () => {
  test('Should be able to return area', () => {
    const square = new Square(10);
    const rectangle = new Rectangle(10, 20);
    const megaAreaClass = new MegaAreaClass();
    megaAreaClass.setShape(square);
    megaAreaClass.setShape(rectangle);
    expect(megaAreaClass.getArea()).toBe(300);
  });
});