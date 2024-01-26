package srp.after;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class PaymentServiceTests {
    @Test
    @DisplayName("Make payment")
    public void shouldBeAbleToMakePayment() {
        PaymentService paymentService = new PaymentService();
        Assertions.assertEquals(paymentService.makePayment(), "Payment done!");
    }

    @Test
    @DisplayName("Get payment status by Id")
    public void shouldBeAbleToGetPaymentStatusById() {
        PaymentService paymentService = new PaymentService();
        Assertions.assertEquals(paymentService.getPaymentStatusByPaymentId("123"), "Current status of Payment Id 123 is PAID.");
    }
}
