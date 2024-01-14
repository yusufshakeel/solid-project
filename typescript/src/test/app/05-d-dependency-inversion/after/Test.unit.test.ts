import PaymentRepository from '../../../../app/05-d-dependency-inversion/concept/after/PaymentRepository';
import PaymentService from '../../../../app/05-d-dependency-inversion/concept/after/PaymentService';

describe('Testing dependencies inversion - after', () => {
  test('Should be able to call repository methods from service', () => {
    const paymentRepository = new PaymentRepository();
    const paymentService = new PaymentService(paymentRepository);
    expect(paymentService.makePayment()).toBe('Created!');
  });
});