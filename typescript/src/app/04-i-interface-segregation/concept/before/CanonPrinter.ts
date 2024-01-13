import AllInOnePrinter from './AllInOnePrinter';

class CanonPrinter implements AllInOnePrinter {
  print(): string {
    return 'Printing done!';
  }
  scan(): string {
    throw new Error('Method not implemented.');
  }
  copy(): string {
    throw new Error('Method not implemented.');
  }
  fax(): string {
    throw new Error('Method not implemented.');
  }
}

export default CanonPrinter;