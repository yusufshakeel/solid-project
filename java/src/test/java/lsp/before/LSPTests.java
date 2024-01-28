package lsp.before;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class LSPTests {
    @Test
    @DisplayName("This will break LSP")
    public void shouldBreakLSP() {
        Rectangle rectangle = new Square(10);
        rectangle.setHeight(10);
        rectangle.setWidth(20);
        Assertions.assertNotEquals(rectangle.getArea(), 200);
    }
}
