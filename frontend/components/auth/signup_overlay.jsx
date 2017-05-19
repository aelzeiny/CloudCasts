import React from 'react';

export default function(props) {
  return (
    <div className="overlay">
      <form onSubmit={props.onSubmit}>
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
        <button class="btn btn-danger">submit</button>
      </form>
    </div>
  );
}
