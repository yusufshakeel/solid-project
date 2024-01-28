package ocp.after;

public class Square implements Shape {
    private final double side;

    public Square(double side) {
        this.side = side;
    }

    public double getArea() {
        return side * side;
    }
}
