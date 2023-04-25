import GiftCardBalance from '../../../../../app/01-s-single-responsibility/concept/after/GiftCardBalance';

describe('Testing gift card balance', () => {
  test('Should be able to get balance', () => {
    const giftCardBalance = new GiftCardBalance();
    expect(giftCardBalance.getBalance()).toBe('Got balance');
  });
});