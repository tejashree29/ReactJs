import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useHistory,Link } from "react-router-dom";

const Login = () => {
    const history=useHistory();
    //console.log(props);
    const regexPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    const loginSchema=Yup.object().shape({
        email:Yup.string().email('Invalid Email').required('Email Required'),
        password:Yup.string().min(8,'Minimum 8 characters required').matches(regexPass,'Must contain atleast 1 lowercase letter,Uppercase letter,symbol,digit').required('Password is required')
     }
     //matches(/?=.*[a-z]/,'Must contain atleast one Lowercase letter').matches(/?=.*[A-Z]/,'Must contain atleast one Uppercase letter').matches(/?=.*[\d]/,'Must contain atleast one digit').matches(/?=.*[!@#$%^&*]/,'Must contain atleast one symbol')
     );
     const user=localStorage.getItem("UserDetails");
     const parsedata=JSON.parse(user);
     
    return(
    <Formik initialValues={{email:'',password:''}}
        onSubmit={(values,{setSubmitting},errors)=>{
            console.log(values);
           if((values.email===parsedata.email)&&(values.password===parsedata.password))
           {  
                  localStorage.setItem("UserLogin",values)
                  
                  history.push("/dashboard")

           }
            else
           {
                history.push("/login");
                alert("Check Username and Password"); 
                //console.log(errors);
           } 
        }}
        validationSchema={loginSchema}
        >
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit})=>(<form className="form-group" onSubmit={handleSubmit}>
                <br></br>
                <label>Email</label>
                <input type="text" className="form-control" name="email" placeholder="email@email.com" value={values.email} onChange={handleChange} onBlur={handleBlur}></input>
                {errors.email && touched.email ?(<span className="text-danger text-center">{errors.email}</span>):null}
                <br></br>
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="password..." value={values.password} onChange={handleChange} onBlur={handleBlur}></input>
                {errors.password && touched.password ?(<span className="text-danger">{errors.password}</span>):null}
                <br></br>
                <button type="submit" className="form-control btn btn-primary mt-2 mb-4">Login</button>
            </form>
            )}
        </Formik>  
    ) 
}

export default Login
