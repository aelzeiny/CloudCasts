import React from 'react';

class LoginOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      un: "",
      pw: ""
    };
  }

  fillInForm(){
    console.log("AY");
    const $form = $(this.form);
    const $un = $form.find('#un');
    const $pw = $form.find('#pw');
    let currentControl = $un;
    let string = 'Guest#password';
    let interval = setInterval(() => {
      let char = string.substring(0,1);
      if(char === '#')
        currentControl = $pw;
      else
        currentControl.val(currentControl.val() + char);
      string = string.substring(1);
      if(string === '') {
        clearInterval(interval);
        this.props.onSubmit({currentTarget: this.form, preventDefault: () => {}});
      }
    }, 300);
  }

  render() {
    let thisForm;
    return (
      <div className="overlay center">
        <form id="loginForm" ref={(me)=>{this.form = me;}} onSubmit={this.props.onSubmit}>
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
          <button className="btn btn-outline-primary btn-lg" type="submit">log in</button>
          <div className="row-options">
            <button type="button" name="signup" className="btn btn-link btn-outline-link" onClick={this.props.onOptionChange}>
              signup instead
            </button>
            <button type="button" name="signup" className="btn btn-link btn-outline-link" onClick={this.fillInForm.bind(this)}>
              demo login
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default LoginOverlay;
