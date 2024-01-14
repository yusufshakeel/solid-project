import PaymentService from '../../../../app/05-d-dependency-inversion/concept/before/PaymentService';
import PostgreSQLDatabase from '../../../../app/05-d-dependency-inversion/concept/before/PostgreSQLDatabase';

describe('Testing dependencies inversion - before', () => {
  test('Should be able to call database methods', () => {
    const db = new PostgreSQLDatabase();
    const service = new PaymentService(db);
    expect(service.makePayment()).toBe('Created!');
  });
});