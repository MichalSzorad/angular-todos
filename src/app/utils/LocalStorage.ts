const DEFAULT_STORAGE = localStorage;

export class LocalStorage {

  constructor(private prefix: string, private storage: any = DEFAULT_STORAGE, private delimiter: string = ':') {
  }

  private generateKey(key: string): string {
    return this.prefix + this.delimiter + key;
  }

  set(key: string, data: string): void {
    this.storage[this.generateKey(key)] = data;
  }

  get(key: string): string {
    return this.storage[this.generateKey(key)];
  }

  clear(key: string): void {
    delete this.storage[this.generateKey(key)];
  }
}

export default LocalStorage;