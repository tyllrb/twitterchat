class Store {
  store = {};

  write (key, value) {
    if (typeof key === 'array') {
      key.reduce((prev, current) => {
        return (prev) ? store : prev.push(current);
      })
    } else {
      this.store[key] = value;
    }
  }

  read (key) {
    return this.store[key];
  }

  remove (key) {
    delete this.store[key];
  }

}