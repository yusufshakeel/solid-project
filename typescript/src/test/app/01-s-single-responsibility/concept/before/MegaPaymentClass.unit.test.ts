import MegaPaymentClass from '../../../../../app/01-s-single-responsibility/concept/before/MegaPaymentClass';

describe('Testing mega payment class', () => {
  test('Should be able to carry out different types of responsibility', () => {
    const megaPaymentClass = new MegaPaymentClass();
    expect(megaPaymentClass.makePayment()).toBe('Made payment');
    expect(megaPaymentClass.validateCreditCard()).toBe('Credit Card validated');
    expect(megaPaymentClass.getGiftCardBalance()).toBe('Got Gift Card balance');
  });
});