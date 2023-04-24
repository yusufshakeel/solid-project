import Square from './Square';
import Rectangle from './Rectangle';

type Shape = Square | Rectangle;

export default class MegaAreaClass {
  private shapes: Shape[] = [];

  public setShape(shape: Shape) {
    this.shapes.push(shape);
  }

  public getArea(): number {
    return this.shapes.reduce((result, shape) => {
      if (shape instanceof Square) {
        return result + (shape.getSide() * shape.getSide());
      } else {
        return result + (shape.getLength() * shape.getWidth());
      }
    }, 0);
  }
}