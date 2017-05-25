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
      <nav className="sidebar sidebar-expanded">
        <a className="sidebar-brand" href="#">
          {/* <i className="fa fa-headphones"></i> <br/> */}
          <img id="nav-logo" src="headphones.png"></img>
          CloudCast
        </a>

        <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="side-item active">
              <a className="side-link" href="#">
                Discover
                <i className="fa fa-magic"></i>
              </a>
            </li>
            <li className="side-item">
              <a className="side-link" href="#">
                Subscriptions
                <i className="fa fa-th-large"></i>
              </a>
            </li>
          </ul>
          <NavbarLoginComponent currentUser={this.props.currentUser} logout={this.props.logout}/>
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
