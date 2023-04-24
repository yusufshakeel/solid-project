import Shape from './Shape';

export default class Rectangle implements Shape {
  private length = 0;
  private width = 0;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  public getArea(): number {
    return this.length * this.width;
  }
}