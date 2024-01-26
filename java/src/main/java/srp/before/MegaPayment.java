package srp.before;

public class MegaPayment {
    public String makePayment() {
        // do something...
        return "Payment done!";
    }

    public String getPaymentStatusById(String paymentId) {
        // do something...
        return "Current status of Payment Id " + paymentId + " is PAID.";
    }

    public String getGiftCardBalanceById(String giftCardId) {
        // do something...
        return "Current balance of Gift card Id " + giftCardId + " is 10.";
    }

    public double getDiscount() {
        // do something...
        return 10;
    }
}
