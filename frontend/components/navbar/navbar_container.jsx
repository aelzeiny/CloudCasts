import React from 'react';
import {connect} from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import {fetchSubscriptions} from '../../actions/subscription_actions';
import NavbarLoginComponent from './navbar_login_component';
import {Link} from 'react-router-dom';

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
              <Link className="side-link" to={`/podcasts`}>
                Discover
                <i className="fa fa-magic"></i>
              </Link>
            </li>
            <li className="side-item">
              <Link className="side-link" to={`/subscriptions`}>
                Subscriptions
                <i className="fa fa-th-large"></i>
              </Link>
            </li>
            <li className="side-item">
              <Link className="side-link" to={`/timeline`}>
                Timeline
                <i className="fa fa-clock-o"></i>
              </Link>
            </li>
            <li className="side-item">
              <Link className="side-link" to={`/playlists`}>
                Playlists
                <i className="fa fa-list"></i>
              </Link>
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
