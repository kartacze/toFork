class AuthService {

  constructor() {
    this.loggedIn = true;
    this.isAuthorized = this.isAuthorized.bind(this);
  }

  isAuthorized() {
    return this.loggedIn;
  }

  changeAuth(val) {
    this.loggedIn = val;
  }
}

export default AuthService;

