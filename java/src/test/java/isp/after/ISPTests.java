package isp.after;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class ISPTests {
    @Test
    @DisplayName("ISP testing")
    public void shouldImplementOnlyTheRequiredInterfaces() {
        HpAllInOne hpAllInOne = new HpAllInOne();
        CanonPrinter canonPrinter = new CanonPrinter();

        Assertions.assertNotNull(hpAllInOne.doPrint());
        Assertions.assertNotNull(hpAllInOne.doScan());
        Assertions.assertNotNull(hpAllInOne.doCopy());
        Assertions.assertNotNull(hpAllInOne.doFax());

        Assertions.assertNotNull(canonPrinter.doPrint());
    }
}
