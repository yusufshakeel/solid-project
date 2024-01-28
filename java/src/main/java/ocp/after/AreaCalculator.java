package ocp.after;

import java.util.List;

public class AreaCalculator {
    private final List<Shape> shapes;

    public AreaCalculator(List<Shape> shapes) {
        this.shapes = shapes;
    }

    public double totalArea() {
        double total = 0;
        for(Shape shape : shapes) {
            total += shape.getArea();
        }
        return total;
    }
}
