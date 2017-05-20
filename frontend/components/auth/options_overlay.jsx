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
        <button name="login" onClick={props.onClick} className="btn btn-lg btn-outline-primary" style={{"marginRight": "38px"}}>
          Login
        </button>
        <button name="signup" onClick={props.onClick} className="btn btn-lg btn-outline-danger">Signup</button>
      </div>
    </div>
  );
}
