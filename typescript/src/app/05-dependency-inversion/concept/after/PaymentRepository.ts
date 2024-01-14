import Database from './Database';

export default class PaymentRepository implements Database {
  create(): string {
    return 'Created!';
  }
}