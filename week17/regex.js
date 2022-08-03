const assert = require("assert");

const validateUsername = (username) => {
  const re = new RegExp(/^[a-z0-9_-]{3,16}$/);
  return re.test(username);
};

assert.equal(validateUsername("rommel"), true);
assert.equal(validateUsername("rv"), false);
assert.equal(validateUsername("rommel1234567890123"), false);
assert.equal(validateUsername("rommelA"), false);
assert.equal(validateUsername("0123456789"), true);
assert.equal(validateUsername("rommel_-"), true);
assert.equal(validateUsername("rommel$"), false);
console.log("all tests pass");
