package ocp.before;

import java.util.List;

public class AreaCalculator {
    private final List<Object> shapes;

    public AreaCalculator(List<Object> shapes) {
        this.shapes = shapes;
    }

    public double totalArea() {
        double total = 0;
        for(Object shape: shapes) {
            if (shape instanceof Square) {
                Square square = (Square) shape;
                total += square.getSide() * square.getSide();
            }
            else if (shape instanceof Rectangle) {
                Rectangle rectangle = (Rectangle) shape;
                total += rectangle.getLength() * rectangle.getWidth();
            }
            else if (shape instanceof Triangle) {
                Triangle triangle = (Triangle) shape;
                total += 0.5 * triangle.getBase() * triangle.getHeight();
            }
        }
        return total;
    }
}
