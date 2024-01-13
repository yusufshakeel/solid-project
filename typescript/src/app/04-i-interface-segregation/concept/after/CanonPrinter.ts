import IPrinter from './IPrinter';

export default class CanonPrinter implements IPrinter {
  print(): string {
    return 'Printing done!';
  }
}