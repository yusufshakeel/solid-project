import Bird from './Bird';

export default class Penguin extends Bird {
  fly(): string {
    throw new Error('I cannot fly!'); // this violates Liskov Substitution Principle.
  }
}