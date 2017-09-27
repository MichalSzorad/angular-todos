import { LocalStorage } from './LocalStorage';

describe('LocalStorage util', () => {
  let storage: LocalStorage;
  let source: any = {};
  let delimiter: string = ':';

  beforeAll(() => {
    storage = new LocalStorage('test', source, delimiter);
  });

  it('should return undefined for unknown key', () => {
    expect(storage.get('test-unknown')).not.toBeDefined();
  });

  it('should set data into source', () => {
    storage.set('hello', 'world');
    expect(storage.get('hello')).toBe('world');
  });

  it('should clear data', () => {
    storage.set('hello', 'world');
    storage.clear('hello');
    expect(storage.get('hello')).not.toBeDefined();
  });

});