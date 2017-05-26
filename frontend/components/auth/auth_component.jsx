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

  componentDidMount() {
    const authC = document.getElementById("auth");
    const $authC = $(authC);
    $authC.mouseenter(this.mouseenter.bind(this));
    $authC.mouseleave(this.mouseleave.bind(this));
    authC.addEventListener("mousemove", this.mousemove.bind(this));
    authC.addEventListener("mousedown", this.mousemove.bind(this));
  }

  componentWillUnmount() {
    const authC = document.getElementById("auth");
    authC.removeEventListener("mouseenter", this.mouseenter);
    authC.removeEventListener("mouseout", this.mouseout);
    authC.removeEventListener("mousemove", this.mousemove);
    authC.removeEventListener("mousedown", this.mousemove);
  }

  mouseenter(evt) {
    this.hero.mouseenter.apply(this.hero, arguments);
  }

  mouseleave(evt) {
    this.hero.mouseout.apply(this.hero, arguments);
  }

  mousemove(evt) {
    this.hero.mousemove.apply(this.hero, arguments);
  }

  onSubmit(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("id");
    const data = this.parseForm(e.currentTarget);
    const user = {user: data};
    if(id === "loginForm")
      this.props.login(user);
    else if(id === "signupForm")
      this.props.signup(user);
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
    if(this.props.errors.length > 0)
      this.props.clearErrors();
  }

  render() {
    return (
      <section className="auth" id="auth">
        <HeroComponent className={this.state.status} ref={inst => this.hero = inst}/>
        <div>
          <LogoOverlay />
        </div>
          <ul className="validation-errors visible overlay">
            {this.props.errors.map((err, idx) => (
              <li key={typeof(this)+idx} className="validation-items">
                <i className="fa fa-exclamation"></i> {err}
              </li>
            ))}
          </ul>
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
