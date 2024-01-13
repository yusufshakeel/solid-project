import CanonPrinter from '../../../../app/04-i-interface-segregation/concept/before/CanonPrinter';
import HpAllInOnePrinter from '../../../../app/04-i-interface-segregation/concept/before/HpAllInOnePrinter';

describe('Testing Interface Segregation Principle - before', () => {
  describe('When all methods of an interface is implemented', () => {
    test('Should return response for each method call', () => {
      const printer = new HpAllInOnePrinter();
      expect(printer.print()).toBe('Printing done!');
      expect(printer.scan()).toBe('Scanning done!');
      expect(printer.copy()).toBe('Copying done!');
      expect(printer.fax()).toBe('Faxing done!');
    });
  });

  describe('When some of the methods of an interface is implemented', () => {
    describe('When calling implemented method', () => {
      test('Should return response', () => {
        const printer = new CanonPrinter();
        expect(printer.print()).toBe('Printing done!');
      });
    });

    describe('When calling unimplemented method', () => {
      test('Should return response', () => {
        const printer = new CanonPrinter();
        expect(() => printer.scan()).toThrow('Method not implemented');
        expect(() => printer.copy()).toThrow('Method not implemented');
        expect(() => printer.fax()).toThrow('Method not implemented');
      });
    });
  });
});