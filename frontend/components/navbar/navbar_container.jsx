import React from 'react';
import {connect} from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          CommuteCasts <i className="fa fa-headphones"></i>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Listen
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <i className="fa fa-user"></i> LOG IN
            <i className="fa fa-user"></i> SIGN UP
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  const session = state.session;
  return ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
