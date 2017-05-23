import React from 'react';

export default function(props) {
  return (
    <div className="overlay center">
      <form id="signupForm" onSubmit={props.onSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <div className="group">
            <input type="text" name="username" id="un" required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="un">Username</label>
          </div>
        </div>
        <div className="form-group">
          <div className="group">
            <input type="password" name="password" id="pw" required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="pw">Password</label>
          </div>
        </div>
        <div className="form-group">
          <div className="group">
            <input type="password" name="password_confirm" id="cpw" required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="cpw">Confirm Password</label>
          </div>
        </div>
        <button className="btn btn-danger btn-outline-danger">sign up</button>
        <button type="button" name="login" className="btn btn-link btn-outline-link" onClick={props.onOptionChange}>
          login instead
        </button>
      </form>
    </div>
  );
}
