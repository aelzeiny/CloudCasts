import React from 'react';
import {connect} from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import {fetchSubscriptions} from '../../actions/subscription_actions';
import NavbarLoginComponent from './navbar_login_component';

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSubscriptions();
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <div className="container">
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
          <NavbarLoginComponent currentUser={this.props.currentUser} logout={this.props.logout}/>
        </div>
      </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  const session = state.session;
  return ({
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestSubscriptions: () => dispatch(fetchSubscriptions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
