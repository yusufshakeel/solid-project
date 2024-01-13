import ICopier from './ICopier';
import IFax from './IFax';
import IPrinter from './IPrinter';
import IScanner from './IScanner';

export default class HpAllInOne implements IPrinter, IScanner, ICopier, IFax {
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