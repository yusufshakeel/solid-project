package ocp.after;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

public class AreaCalculatorTests {
    @Test
    @DisplayName("Total Area")
    public void shouldBeAbleToReturnTotalAreaOfAllTheShapes() {
        ArrayList<Shape> shapes = new ArrayList<>();

        Square square = new Square(10);
        shapes.add(square);
        Rectangle rectangle = new Rectangle(10, 20);
        shapes.add(rectangle);
        Triangle triangle = new Triangle(5, 10);
        shapes.add(triangle);

        Assertions.assertEquals(new AreaCalculator(shapes).totalArea(), 325);
    }
}
