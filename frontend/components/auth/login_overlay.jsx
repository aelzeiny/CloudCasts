import React from 'react';

export default function(props) {
  return (
    <div className="overlay center">
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="un">Username</label>
          <input className="form-control" type="text" name="username" id="un"></input>
        </div>
        <div className="form-group">
          <label htmlFor="pw">Password</label>
          <input className="form-control" type="password" name="password" id="pw"></input>
        </div>
        <button className="btn btn-outline-danger btn-lg">log in</button>
        <button type="button" name="signup" className="btn btn-link btn-outline-link" onClick={props.onOptionChange}>
          signup instead
        </button>
      </form>
    </div>
  );
}
