package srp.before;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class MegaPaymentTests {
    @Test
    @DisplayName("Make payment")
    public void shouldBeAbleToMakePayment() {
        MegaPayment megaPayment = new MegaPayment();
        Assertions.assertEquals(megaPayment.makePayment(), "Payment done!");
    }

    @Test
    @DisplayName("Get payment status by Id")
    public void shouldBeAbleToGetPaymentStatusById() {
        MegaPayment megaPayment = new MegaPayment();
        Assertions.assertEquals(megaPayment.getPaymentStatusById("123"), "Current status of Payment Id 123 is PAID.");
    }

    @Test
    @DisplayName("Get gift card balance by Id")
    public void shouldBeAbleToReturnGiftCardBalanceById() {
        MegaPayment megaPayment = new MegaPayment();
        Assertions.assertEquals(megaPayment.getGiftCardBalanceById("G123"), "Current balance of Gift card Id G123 is 10.");
    }

    @Test
    @DisplayName("Get discount")
    public void shouldBeAbleToGetDiscount() {
        MegaPayment megaPayment = new MegaPayment();
        Assertions.assertEquals(megaPayment.getDiscount(), 10);
    }
}
