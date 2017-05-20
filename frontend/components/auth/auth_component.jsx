import React from 'react';
import LogoOverlay from './logo_overlay';
import LoginOverlay from './login_overlay';
import OptionsOverlay from './options_overlay';
import SignupOverlay from './signup_overlay';
import HeroComponent from './hero_component';
import {connect} from 'react-redux';
import {signup, login, receiveErrors} from '../../actions/session_actions';

const STATUS_NEUTRAL = "neutral";
const STATUS_LOGIN = "login";
const STATUS_SIGNUP = "signup";


class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: STATUS_NEUTRAL
    };
  }

  // componentDidMount() {
  //   this.canvas.addEventListener("mouseenter", this.mouseenter.bind(this));
  //   this.canvas.addEventListener("mouseout", this.mouseout.bind(this));
  //   this.canvas.addEventListener("mousemove", this.mousemove.bind(this), true);
  //   this.canvas.addEventListener("mousedown", this.mousemove.bind(this), true);
  // }
  //
  // componentWillUnmount() {
  //   this.canvas.removeEventListener("mouseenter", this.mouseenter);
  //   this.canvas.removeEventListener("mouseout", this.mouseout);
  //   this.canvas.removeEventListener("mousemove", this.mousemove, true);
  //   this.canvas.removeEventListener("mousedown", this.mousemove, true);
  // }

  onSubmit(e) {
    e.preventDefault();
    const id = form.getAttribute("id");
    const data = this.parseForm(e.currentTarget);
    if(id === "loginForm")
      this.props.login(data);
    else if(id === "signupForm")
      this.props.signup(data);
  }

  parseForm(form) {
    const answer = {};
    $("#"+form.getAttribute("id")+" input").each((idx,el) => {
      let $el = $(el);
      answer[$el.attr("name")] = $el.val();
    });
    return answer;
  }

  onOptionSelect(e) {
    var attr = e.currentTarget.getAttribute("name");
    this.setState({status: attr});
    this.props.clearErrors();
  }

  render() {
    return (
      <section className="auth">
        <HeroComponent className={this.state.status}/>
        <div className="row">
          <LogoOverlay />
        </div>
        {this._renderSwitch()}
      </section>
    );
  }

  _renderSwitch() {
    switch (this.state.status) {
      case STATUS_SIGNUP:
        return <SignupOverlay onSubmit={this.onSubmit.bind(this)} onOptionChange={this.onOptionSelect.bind(this)}/>
      case STATUS_LOGIN:
        return <LoginOverlay onSubmit={this.onSubmit.bind(this)} onOptionChange={this.onOptionSelect.bind(this)}/>
      default:
        return <OptionsOverlay onClick={this.onOptionSelect.bind(this)} onOptionChange={this.onOptionSelect.bind(this)}/>
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
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
