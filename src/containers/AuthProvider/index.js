import React from 'react';
/** 
 * TODO:
 * 1. Make Provider listen do some authorization service and respond 
 * 2. Does it realy have to listen to outer service ?? 
 * 3. I think no
 * 4. This instead of any outer service should contain logic for logging in and out.
 * 4.1 first check if there is no session or local or somethin token. 
 * 4.2 then change route state and stuff to login or somewhere else
 * 4.3 
 * what are possible problems:
 * 1. there are no problems 
 */

class AuthProvider extends React.Component {
  constructor() {
    super();
    this.authCheck = this.authCheck.bind(this);
    // options should contains following functions:
    //
    // 1. Is logged
  }

  //  static AuthComponent = ({ loggedIn }) => {
  //    if(loggedIn) {
  //      return
  //
  //  }

  authCheck(comp) {
    const auth = this.props.options.auth;
    console.log('auth: ', auth());
    if (auth()) {
      return comp;
    }
    return this.props.noAuth;
  }

  // to props we should add function that creates a protected component
  render() {
    const {render, ...props} = this.props;

    return render(this.authCheck, props);
  }
}

export default AuthProvider;
