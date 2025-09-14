const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance;
  },

  getDiscount() {
    return this.discount;
  },

  setDiscount(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('Discount must be a number');
    }
    this.discount = value;
  },

  getOrders() {
    return this.orders;
  },

  addOrder(cost, order) {
    if (typeof cost !== 'number' || Number.isNaN(cost) || cost < 0) {
      throw new TypeError('Cost must be a non-negative number');
    }
    if (typeof order !== 'string' || order.length === 0) {
      throw new TypeError('Order must be a non-empty string');
    }

    const discountAmount = cost * this.discount;
    this.balance -= cost - discountAmount;
    this.orders.push(order);
  },
  // Change code above this line
};
console.log('--- Task 1 ---');
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
