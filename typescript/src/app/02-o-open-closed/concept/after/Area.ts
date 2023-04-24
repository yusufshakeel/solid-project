import Shape from './Shape';

export default class Area {
  private shapes: Shape[] = [];

  public setShape(shape: Shape) {
    this.shapes.push(shape);
  }

  public getArea(): number {
    return this.shapes.reduce((result, shape) => {
      return result + shape.getArea();
    }, 0);
  }
}