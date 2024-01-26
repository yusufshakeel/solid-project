package srp.after;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class GiftCardServiceTests {
    @Test
    @DisplayName("Get gift card balance by Id")
    public void shouldBeAbleToReturnGiftCardBalanceById() {
        GiftCardService giftCardService = new GiftCardService();
        Assertions.assertEquals(giftCardService.getGiftCardBalanceById("G123"), "Current balance of Gift card Id G123 is 10.");
    }
}
