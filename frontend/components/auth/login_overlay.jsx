import React from 'react';

export default function(props) {
  return (
    <div className="overlay center">
      <form id="loginForm" onSubmit={props.onSubmit}>
        <h2>Login</h2>
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
        <button className="btn btn-outline-primary btn-lg">log in</button>
        <button type="button" name="signup" className="btn btn-link btn-outline-link" onClick={props.onOptionChange}>
          signup instead
        </button>

      </form>
    </div>
  );
}
