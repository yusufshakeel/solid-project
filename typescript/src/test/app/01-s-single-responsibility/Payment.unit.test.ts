import Payment from '../../../app/01-s-single-responsibility/concept/Payment';

describe('Testing payment class', () => {
  test('Should be able to make payment', () => {
    const payment = new Payment();
    expect(payment.makePayment()).toBe('Made payment');
  });
});