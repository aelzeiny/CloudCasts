import React from 'react';
import ModalForm from './modal_form';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';

export const SIGNUP_ID = "signupFormModal";

class SignupFormComponent extends ModalForm {
  constructor(props) {
    super(props, SIGNUP_ID);
  }

  submit() {
    let newuser = {
      user: this.parseForm()
    };
    this.props.signup(newuser).then(this.closeModal.bind(this));
  }

  renderHeader() {
    return <h3>Sign In</h3>;
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
        <div className="form-group">
          <label htmlFor="cpw">Confirm Password</label>
          <input className="form-control" type="password" name="password_confirm" id="cpw"></input>
        </div>
      </div>
    );
  }
  
  renderFooter() {
    return (
      <button className="btn btn-outline-primary" onClick={this.submit.bind(this)}>SUBMIT</button>
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
    signup: user => dispatch(signup(user))
  };
}

export const SignupFormContainer =
  connect(mapStateToProps, mapDispatchToProps)(SignupFormComponent);
