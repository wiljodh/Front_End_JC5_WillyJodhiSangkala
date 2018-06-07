import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {

render() {

return (

<div>
  <div>
    <div className="container" style={{textAlign: 'center'}}>
      <div className="row">
        <div className="main">
          <h3>Please Log-In</h3>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <a href="#" className="btn btn-lg btn-primary btn-block">Facebook</a>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
            </div>
          </div>
          <div className="login-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
          </div>
          <form role="form">
            <div className="form-group">
              <label htmlFor="inputUsernameEmail">Username or email</label>
              <input className="form-control" id="inputUsernameEmail" type="text" />
            </div>
            <div className="form-group">
              <Link to ="/ForgotAccount" className="pull-right">Forgot password?</Link>
              <label htmlFor="inputPassword">Password</label>
              <input className="form-control" id="inputPassword" type="password" />
            </div>
            <div className="checkbox pull-right">
              <label>
                <input type="checkbox" />
                Remember me </label>
            </div>
            <button type="submit" className="btn btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <hr />
</div>

        );
    }
} 

export default Login;