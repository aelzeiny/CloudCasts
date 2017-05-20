import React from 'react';

export default function(props) {
  return (
    <div>
      <div className="overlay center">
        <b style={{'font-size':'.5em'}}>Your favorite Podcasts</b>
      </div>
      <div className="overlay center">
          <b>All In <br/>
          One Place</b>
      </div>
      <div className="overlay center">
        <button className="btn btn-lg btn-outline-primary">Login</button>
        <button className="btn btn-lg btn-outline-danger">Signup</button>
      </div>
    </div>
  );
}
