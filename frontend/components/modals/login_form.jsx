import React from 'react';
import ModalForm from './modal_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

export const LOGIN_ID = "loginFormModal";

class LoginFormComponent extends ModalForm {
  constructor(props) {
    super(props, LOGIN_ID);
  }

  submit() {
    const user = {
      user: this.parseForm()
    };
    this.props.login(user).then(this.closeModal.bind(this));
  }

  renderHeader() {
    return <h3>Login</h3>;
  }

  renderBody() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="un">Username</label>
          <input className="form-control" type="text" name="username" id="un"></input>
        </div>
        <div className="form-group">
          <label htmlFor="pw">Password</label>
          <input className="form-control" type="password" name="password" id="pw"></input>
        </div>
      </div>
    );
  }
  
  renderFooter() {
    return (
      <button className="btn btn-outline-primary" onClick={this.submit.bind(this)}>Login</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.session.errors,
    loggedIn: Boolean(state.session.currentUser)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(login(user))
  };
}

export const LoginFormContainer =
  connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
