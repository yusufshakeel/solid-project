package srp.after;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class DiscountServiceTests {
    @Test
    @DisplayName("Get discount")
    public void shouldBeAbleToGetDiscount() {
        DiscountService discountService = new DiscountService();
        Assertions.assertEquals(discountService.getDiscount(), 10);
    }
}
