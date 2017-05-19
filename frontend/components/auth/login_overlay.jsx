import React from 'react';

export default LoginOverlay = function(props) {
  return (
    <div className="overlay">
      <form onSubmit={this.props.onSubmit}>
        <div className="overlay">
          <div className="form-group">
            <label htmlFor="un">Username</label>
            <input className="form-control" type="text" name="username" id="un"></input>
          </div>
          <div className="form-group">
            <label htmlFor="pw">Password</label>
            <input className="form-control" type="password" name="password" id="pw"></input>
          </div>
        </div>
        <button class="btn btn-danger">submit</button>
      </form>
    </div>
  );
}
