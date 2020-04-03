import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class SignInForm extends Component {
  
  
  render() {
        return (

          
          <div className="FormCenter">
          <div className="FormTitle">
          <NavLink to="/sign-in"  activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Sign In</NavLink>or
          <NavLink exact to="/" activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Register</NavLink>  
          
          </div>
          <form className="FromFields" onSubmit={(e)=>this.handleSubmmit(e)}>
          
          
          <div className="FormField">
          <label className="FormField__Label" htmlFor="email">Enter your Email</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail" name="email" onChange={(e)=>{this.handlechange(e)}}></input>
          </div>
          <div className="FormField">
          <label className="FormField__Label" htmlFor="password" onChange={(e)=>{this.handlechange(e)}}>Enter your Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter a Password" name="password"></input>
          </div>
          <div className="FormField">
          <button type="submit" className="FormField__Button">Sign In</button>
          </div>
          </form>
          
          
          </div>
        );
    }
}

export default SignInForm;
