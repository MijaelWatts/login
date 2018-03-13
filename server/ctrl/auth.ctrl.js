function AuthCtrl() {

  function validateUserAndPassword(req) {
    let user = req.body.user === 'mw' ? true : false;
    let pass = req.body.pass === 'mijaelwatts' ? true : false;

    if (user && pass) {
        return {msg : 'access granted.'};
    } else {
        return {msg : 'access not granted.'};
    }
  }

  return {
    validateUserAndPassword: validateUserAndPassword
  }

}

module.exports = AuthCtrl();
