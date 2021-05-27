import React from 'react'
import Login from '../components/Login/Login';
import logo from '../images/logo.svg';
import './style.css';
import {Link} from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="wrapper">
        <div className="form-wrapper">
            <div className="header">
              <h1>Welcome to Login</h1>
              <p>Create your unique data stories</p>
               <img src={logo} alt="logo" height={90} width={90}/>
              </div>
              <br></br>
           <Login/>
           <div className="d-flex justify-content-center">
            Don't have an account? Go To 
           <Link to="/register">
               Sign Up
          </Link>
          </div>
           </div>
        </div>
    )
}

export default LoginPage
