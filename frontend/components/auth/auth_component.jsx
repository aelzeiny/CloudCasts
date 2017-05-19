import React from 'react';
import DisplayOverlay from './display_overlay';
import LoginOverlay from './login_overlay';
import SignupOverlay from './signup_overlay';

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
        {this.renderSwitch()}
      </section>
    );
  }

  renderSwitch() {
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

export default AuthComponent;
