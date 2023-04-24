import Shape from './Shape';

export default class Square implements Shape {
  private side = 0;

  constructor(side: number) {
    this.side = side;
  }

  public getArea() {
    return this.side * this.side;
  }
}