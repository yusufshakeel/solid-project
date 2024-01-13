import AllInOnePrinter from './AllInOnePrinter';

class HpAllInOnePrinter implements AllInOnePrinter {
  print(): string {
    return 'Printing done!';
  }
  scan(): string {
    return 'Scanning done!';
  }
  copy(): string {
    return 'Copying done!';
  }
  fax(): string {
    return 'Faxing done!';
  }
}

export default HpAllInOnePrinter;