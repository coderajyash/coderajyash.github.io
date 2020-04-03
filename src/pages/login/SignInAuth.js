
import React, { Component } from 'react';


class SignInAuth extends Component {
    


    render() {
        return (
          <div className="FormCenter">
          <form className="FromFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Enter Police ID</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your Unique ID" name="name"></input>
          </div>
          <div className="FormField">
          <button className="FormField__Button">Sign In</button>
          </div>
          </form>
          
          
          </div>
        );
    }
}

export default SignInAuth;
