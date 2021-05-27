import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
import logo from '../images/logo.svg';
import Register from "../components/Register/Register";

const RegisterPage = () => {
    return(
        <div className="wrapper">
        <div className="form-wrapper">
            <div className="header">
              <h1>SignUp Form</h1>
              <p>Please provide following details</p>
               <img src={logo} alt="logo" height={90} width={90}/>
              </div>
              <br></br>
           <Register/>
        </div>
        </div>
    );
}

export default RegisterPage
