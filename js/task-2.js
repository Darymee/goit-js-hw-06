class Storage {
  #items;

  constructor(initialItems = []) {
    if (!Array.isArray(initialItems)) {
      throw new TypeError('Initial items must be an array');
    }
    this.#items = [...initialItems]; // копія для безпеки
  }

  getItems() {
    // повертаємо копію, для інкапсуляціі
    return [...this.#items];
  }

  addItem(newItem) {
    this.#assertString(newItem);
    this.#items.push(newItem);
    return this;
  }

  removeItem(itemToRemove) {
    this.#assertString(itemToRemove);
    this.#items = this.#items.filter(item => item !== itemToRemove);
    return this;
  }

  hasItem(item) {
    return this.#items.includes(item);
  }

  #assertString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Item must be a string');
    }
  }
}

console.log('--- Task 2 ---');
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
