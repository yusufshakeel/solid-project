import Database from './Database';

export default class PaymentService {
  private readonly repository: Database;

  constructor(repository: Database) {
    this.repository = repository;
  }

  public makePayment(): string {
    return this.repository.create();
  }
}