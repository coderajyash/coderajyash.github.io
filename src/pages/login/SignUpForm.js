import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class SignUpForm extends Component {
    


    render() {
        return (
          
          <div className="FormCenter">
          <div className="FormTitle">
          <NavLink to="/sign-in"  activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Sign In</NavLink>or
          <NavLink exact to="/" activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Register</NavLink>  
          
          </div>
          <form className="FromFields">
          <div className="FormField">
          <label className="FormField__Label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your Full Name" name="name"></input>
          </div>
          <div className="FormField">
          <label className="FormField__Label" htmlFor="adhaar">Adhaar Number</label>
          <input type="tel" id="adhaar" className="FormField__Input" placeholder="Enter your 12-digit adhaar number" name="adhaar"></input>
          </div>
          <div className="FormField">
          <label className="FormField__Label" htmlFor="email">Enter your Email</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail" name="email"></input>
          </div>
          <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Set Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter a Password" name="password"></input>
          </div>
          <div className="FormField">
          <button className="FormField__Button">Sign Up</button>
          </div>
          </form>
          
          
          </div>
        );
    }
}

export default SignUpForm;
