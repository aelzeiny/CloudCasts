import React from 'react';

import {LoginFormContainer, LOGIN_ID} from '../modals/login_form';
import {SignupFormContainer, SIGNUP_ID} from '../modals/signup_form';

class NavbarLoginComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  logoutClick() {
    this.props.logout();
  }

  renderNavbarSignedOutComponent() {
    return(<ul className="sidebar-end">
      <li className="sidebar-item">
        <button className="sidebar-link btn btn-link" data-toggle="modal" data-target={`#${LOGIN_ID}`}>
          <i className="fa fa-user"></i> LOG IN
        </button>
      </li>
      <li>
        <button className="sidebar-link btn btn-link" data-toggle="modal" data-target={`#${SIGNUP_ID}`}>
          <i className="fa fa-user-plus"></i> SIGN UP
        </button>
      </li>
    </ul>);
  }

  renderNavbarSignedInComponent() {
    return(<ul className="sidebar-end">
      <li className="side-item">
        <a className="nav-link">
          <i className="fa fa-user"></i> Welcome {this.props.currentUser.username}!
        </a>
      </li>
      <li className="side-item">
        <button className="btn btn-outline-danger" onClick={this.logoutClick.bind(this)}>LOG OUT</button>
      </li>
    </ul>);
  }
  render() {
    if(this.props.currentUser)
      return this.renderNavbarSignedInComponent();
    return this.renderNavbarSignedOutComponent();
  }

}

export default NavbarLoginComponent;
