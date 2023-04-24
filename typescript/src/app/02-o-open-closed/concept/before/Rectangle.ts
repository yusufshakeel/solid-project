export default class Rectangle {
  private length = 0;
  private width = 0;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  public getLength() {
    return this.length;
  }

  public getWidth() {
    return this.width;
  }
}