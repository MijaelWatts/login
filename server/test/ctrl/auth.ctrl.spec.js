const assert = require('assert');
const AuthCtrl = require('../../ctrl/auth.ctrl');

describe('AuthCtrl', function() {
  describe('Validate Credentials', function() {
    it('Should return right message with right creentials', function() {
      assert.equal(true, AuthCtrl.validateUserAndPassword({"user": "mw", "pass": "mijaelwatts"}));
    })
  });
});
