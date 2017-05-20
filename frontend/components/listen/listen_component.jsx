import React from 'react';
import {connect} from 'react-redux';
import NavbarContainer from '../navbar/navbar_container';
import DiscoverContainer from '../discover/discover_component';

const Listen = (props) => {
  console.log("HERE");
  return (
    <section className="listen">
      <NavbarContainer />
      <DiscoverContainer />
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
