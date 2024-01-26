package srp.after;

public class PaymentService {
    public String makePayment() {
        // do something...
        return "Payment done!";
    }

    public String getPaymentStatusByPaymentId(String paymentId) {
        // do something...
        return "Current status of Payment Id " + paymentId + " is PAID.";
    }
}
