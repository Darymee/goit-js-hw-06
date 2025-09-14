class StringBuilder {
  #value;

  constructor(initialValue = '') {
    if (typeof initialValue !== 'string') {
      throw new TypeError('Initial value must be a string');
    }
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#assertString(str);
    this.#value += str;
    return this; // для чейнінгу
  }

  padStart(str) {
    this.#assertString(str);
    this.#value = str + this.#value;
    return this;
  }

  padBoth(str) {
    this.#assertString(str);
    this.#value = str + this.#value + str;
    return this;
  }

  // приватний хелпер для валідації
  #assertString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Argument must be a string');
    }
  }
}

console.log('--- Task 3 ---');
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
