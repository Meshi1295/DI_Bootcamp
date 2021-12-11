import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <nav>
                <Link to="/" style={{ margin: "10px" }}>
                    Register
                </Link>

                <Link to="/signIn" style={{ margin: "10px" }}>
                    Sign In
                </Link>
            </nav>

            <form id="register">
                <h1>Register</h1>
                Name:
                <input type="text" placeholder="Enter name (Max 8 characters)" />
                Email:
                <input type="email" placeholder="Enter your email " />
                Password:
                <input type="password" placeholder="Enter your password" />
                <button className="btn" type="submit" >Register</button>
                <small>Incorrect Credentials</small>
            </form>
        </div>
    )
}


export default Register;
