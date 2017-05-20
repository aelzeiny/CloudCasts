import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import {connect} from 'react-redux';

const Listen = (props) => {
  console.log("HERE");
  return (
    <section className="listen">
      {/* <NavBarContainer /> */}
      <i className="fa fa-spinner fa-spin"></i>
      <h3>NOOO</h3>
    </section>
  );
};

function mapStateToProps({ session }) {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

export default connect(mapStateToProps)(Listen);
