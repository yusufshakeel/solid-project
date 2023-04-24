import message from '../../app';
describe('This is a sample test', () => {
  test('Should always pass', () => {
    expect(message()).toBe('Hello, World!');
  });
});