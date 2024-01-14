import PostgreSQLDatabase from './PostgreSQLDatabase';

export default class PaymentService {
  private readonly database: PostgreSQLDatabase;

  constructor(database: PostgreSQLDatabase) {
    this.database = database;
  }

  public makePayment(): string {
    return this.database.create();
  }
}