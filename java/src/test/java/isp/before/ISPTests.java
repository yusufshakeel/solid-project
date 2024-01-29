package isp.before;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class ISPTests {
    @Test
    @DisplayName("Class that implements all the methods")
    public void shouldNotVioletISP() {
        HpAllInOne hpAllInOne = new HpAllInOne();
        Assertions.assertEquals(hpAllInOne.print(), "Print done!");
        Assertions.assertEquals(hpAllInOne.scan(), "Scan done!");
        Assertions.assertEquals(hpAllInOne.copy(), "Copy done!");
        Assertions.assertEquals(hpAllInOne.fax(), "Fax done!");
    }

    @Test
    @DisplayName("Class that does not implements all the methods")
    public void shouldVioletISP() {
        CanonPrinter canonPrinter = new CanonPrinter();
        Assertions.assertEquals(canonPrinter.print(), "Print done!");
        Assertions.assertNull(canonPrinter.scan());
        Assertions.assertNull(canonPrinter.copy());
        Assertions.assertNull(canonPrinter.fax());
    }
}
