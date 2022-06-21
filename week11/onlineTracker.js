class OnlineTracker {
  constructor() {
    this.users = {};
  }

  addUser(name) {
    this.users = { ...this.users, [name]: true };
  }

  getUsers() {
    return this.users;
  }

  setInactive(name) {
    this.users = { ...this.users, [name]: false };
  }

  setActive(name) {
    this.users = { ...this.users, [name]: true };
  }
}

module.exports = OnlineTracker;
