function AuthSvc() {

  function validateUserAndPassword(req) {
    let user = req.user === 'mw' ? true : false;
    let pass = req.pass === 'mijaelwatts' ? true : false;

    if (user && pass) {
        return {msg : 'Access granted.'};
    } else {
        return {msg : 'Username or Password incorrect.'};
    }
  }

  return {
    validateUserAndPassword
  }

}

module.exports = AuthSvc();
