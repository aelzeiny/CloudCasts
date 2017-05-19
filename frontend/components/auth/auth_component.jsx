import React from 'react';
import DisplayOverlay from './display_overlay';
import LoginOverlay from './login_overlay';
import SignupOverlay from './signup_overlay';
import HeroComponent from './hero_component';
import {connect} from 'react-redux';

const STATUS_NEUTRAL = "NEUTRAL";
const STATUS_LOGIN = "LOGIN";
const STATUS_SIGNUP = "SIGNUP";


class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: STATUS_NEUTRAL
    };
  }

  onSubmit(e) {
    console.log(e.currentTarget);
  }

  render() {
    return (
      <section className="auth">
        <HeroComponent />
        {this._renderSwitch()}
      </section>
    );
  }

  _renderSwitch() {
    switch (this.state.status) {
      case STATUS_SIGNUP:
        return <SignupOverlay onSubmit={this.onSubmit.bind(this)}/>
      case STATUS_LOGIN:
        return <LoginOverlay onSubmit={this.onSubmit.bind(this)}/>
      default:
        return <DisplayOverlay/>
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
