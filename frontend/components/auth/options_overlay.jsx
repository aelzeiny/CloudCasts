import React from 'react';

export default function(props) {
  return (
    <div className="options">
      <div className="overlay center" id="oSideText">
        <b>Your favorite Podcasts</b>
      </div>
      <div className="overlay center" id="oStrongText">
          <b>All In <br/>
          One Place</b>
      </div>
      <div className="overlay center" id="oButtons">
        <button className="btn btn-lg btn-outline-primary" style={{"margin-right": "38px"}}>
          Login
        </button>
        <button className="btn btn-lg btn-outline-danger">Signup</button>
      </div>
    </div>
  );
}
