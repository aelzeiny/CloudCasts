import React from 'react';

export default function(props) {
  return (
    <div className="overlay center">
      <form id="signupForm" onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="un">Username</label>
          <input className="form-control" type="text" name="username" id="un"></input>
        </div>
        <div className="form-group">
          <label htmlFor="pw">Password</label>
          <input className="form-control" type="password" name="password" id="pw"></input>
        </div>
        <div className="form-group">
          <label htmlFor="cpw">Confirm Password</label>
          <input className="form-control" type="password" name="password_confirm" id="cpw"></input>
        </div>
        <button className="btn btn-default">submit</button>
        <button type="button" name="login" className="btn btn-link btn-outline-link" onClick={props.onOptionChange}>
          login instead
        </button>
      </form>
    </div>
  );
}
