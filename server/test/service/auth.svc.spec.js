const assert  = require('assert');
const AuthSvc = require('../../service/auth.svc');

describe('AuthSvc', function() {
  describe('Validate Credentials', function() {
    it('Should grant access with right creentials', function() {
      let objToSend = {
        user: 'mw',
        pass: 'mijaelwatts'
      };

      let objReceived = AuthSvc.validateUserAndPassword(objToSend);

      assert.equal('Access granted.', objReceived.msg);
    });

    it('Should not grant access with incorrect credentials', () => {
      let objToSend = {
        user: 'wrong user',
        pass: 'wrong password'
      };

      let objReceived = AuthSvc.validateUserAndPassword(objToSend);

      assert.equal('Username or Password incorrect.', objReceived.msg);
    })
  });
});
