package lsp.after;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class LSPTests {
    @Test
    @DisplayName("This will not break LSP")
    public void shouldNotBreakLSP() {
        Shape rectangle = new Rectangle(10, 20);
        Shape square = new Square(10);
        Assertions.assertEquals(rectangle.getArea(), 200);
        Assertions.assertEquals(square.getArea(), 100);
    }
}
