import React, { Component } from 'react'

class SignIn extends Component {
    render() {
        return (
            <form id="register">
                <h1>Sign In</h1>
                Email:
                <input type="email" placeholder="Enter your email " />
                Password:
                <input type="password" placeholder="Enter your password" />
                <button className="btn" type="submit" >SignIn</button>
                <button className="btn" type="submit" >Register</button>
                <small>Empty fields</small>
            </form>
        )
    }
}

export default SignIn;
