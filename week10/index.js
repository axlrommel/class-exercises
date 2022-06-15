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

let onlineTracker = new OnlineTracker();
onlineTracker.addUser("Rommel");
// onlineTracker.addUser("Charlie");
// onlineTracker.addUser("Donnahue");
// onlineTracker.setInactive("Rommel");
console.log(onlineTracker.getUsers());
