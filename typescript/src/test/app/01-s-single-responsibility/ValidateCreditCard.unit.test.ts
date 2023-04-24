import ValidateCreditCard from '../../../app/01-s-single-responsibility/concept/ValidateCreditCard';

describe('Testing validate credit card', () => {
  test('Should be able to validate', () => {
    const validateCreditCard = new ValidateCreditCard();
    expect(validateCreditCard.isValid()).toBeTruthy();
  });
});