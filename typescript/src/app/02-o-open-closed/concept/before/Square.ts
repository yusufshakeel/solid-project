export default class Square {
  private side = 0;

  constructor(side: number) {
    this.side = side;
  }

  public getSide() {
    return this.side;
  }
}