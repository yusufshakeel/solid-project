import CanonPrinter from '../../../../app/04-i-interface-segregation/concept/after/CanonPrinter';
import HpAllInOne from '../../../../app/04-i-interface-segregation/concept/after/HpAllInOne';

describe('Testing interface segregation - after', () => {
  test('Should be able to call the methods that are implemented', () => {
    const hpAllInOne = new HpAllInOne();
    const canonPrinter = new CanonPrinter();

    expect(hpAllInOne.print()).toBe('Printing done!');
    expect(hpAllInOne.scan()).toBe('Scanning done!');
    expect(hpAllInOne.copy()).toBe('Copying done!');
    expect(hpAllInOne.fax()).toBe('Faxing done!');

    expect(canonPrinter.print()).toBe('Printing done!');
  });
});