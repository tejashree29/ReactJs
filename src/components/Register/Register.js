import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const history=useHistory();
    /*  const redirectToLogin = () => {
         history.push("/login");
       }; */
     const getInitialchk={
         containsNumber:false,
         containsUppercase:false,
         containsLowercase:false,
         containsSymbol:false,
         containsMinChar:false
 
     }
    const[pass,setPass]=useState(getInitialchk)
    
     const getInitialData={
         email:'',
         firstname:'',
         lastname:'',
         countrycode:'',
         phone:'',
         password:'',
         confirmPassword:''
     }
     const[userData,setuserData]=useState(getInitialData);
     const[redirect,setRedirect]=useState(false);
     const[errors,setErrors]=useState({});
     const{email,firstname,lastname,countrycode,phone,password,confirmPassword}=userData;
      const validateForm=()=>{
         let errors={};
         if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email))
         {
             errors.email='Invalid Email';
         }else if(userData.email==='')
         {
             errors.email='Email is required'; 
         }
         if(!/^[A-Za-z]+$/.test(userData.firstname))
         {
             errors.firstname='First name contains only character';
         }else if(userData.firstname==='')
         {
             errors.firstname='First Name is Required';
         }
         if(!/^[A-Za-z]+$/.test(userData.lastname))
         {
             errors.lastname='Last name contains only character';
         }else if(userData.lastname==='')
         {
             errors.lastname='Last Name is Required';
         }
         if(!/^[0-9]+$/.test(userData.countrycode))
         {
             errors.countrycode='Please check country code number';
         }else if(userData.countrycode==='')
         {
             errors.countrycode='Please Provide country code';
         }
         if(!/^[0-9]+$/.test(userData.phone))
         {
             errors.phone='Please check phone number';
         }else if(userData.phone.length!==10)
         {
             errors.phone='Please provide 10 digits number';
         }else if(userData.phone==='')
         {
             errors.phone='Phone number cannot be blank';
         }
         if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(userData.password))
         {
             errors.password='Not a strong password';
         }else if(userData.password==='')
         {
             errors.password='Password cannot be Blank';
         }
         if(userData.confirmPassword!==userData.password)
         {
             errors.confirmPassword='Password does not match';
         }
 
         return errors
     } 
   
     
     const handleonChange=(e)=>{
         setuserData({
             ...userData,
             [e.target.name]:e.target.value
         });
        /*  setErrors({
             ...errors,
             [e.target.name]:''
         }) */
         
           if(e.target.name==="password")
         {  
             
             let targetValue=e.target.value;
             //let num=(/\d/).match(targetValue);
             console.log(targetValue);
             setPass({
                 containsMinChar:targetValue.length>8 ? true:false,
                 containsNumber:targetValue.match(/\d/)!==null ? true:false,
                 containsUppercase:targetValue.match(/[A-Z]/)!==null ? true:false,
                 containsLowercase:targetValue.match(/[a-z]/)!==null ? true:false,
                 containsSymbol:targetValue.match(/[!@#%&*#]/)!==null ?true:false
             })
             
         } 
     }
     
     const handleonSubmit=(e)=>{
         e.preventDefault();
         //console.log(userData);
        let errors= validateForm();
        setErrors(errors);
        if(Object.keys(errors).length===0)
        {   
            const data={
            email:userData.email,
            password:userData.password,
            firstname:userData.firstname,
            lastname:userData.lastname                     
                  }
            localStorage.setItem("UserDetails",JSON.stringify(userData));
            axios.post('https://reqres.in/api/register',data)
            .then((response)=>
            {
                setRedirect(true);
                localStorage.setItem("token",JSON.stringify(response.data.token));
                //console.log(response);
                //console.log(response.data);
                //console.log(response.data.token);
                if(response.status===200)
                {
                    history.push("/login");
                 }
                 else
                 {
                     history.push("/register");
                 }
                
            }).catch((err)=>console.log("error",err));
            //alert("Hi sumitted with correct data")
            //console.log("no errors");
         //setuserData(getInitialData);
         //setPass(getInitialchk);
      }
        else{
            console.log(errors);
            setErrors(errors);
        } 
 
     }
     let {containsMinChar,containsNumber,containsUppercase,containsLowercase,containsSymbol}=pass;
     
     return (
         <>
         <form className="form-group" onSubmit={handleonSubmit}>
         <label>Email</label>
         <input type="text" className="form-control mb-2" name="email" value={email} onChange={handleonChange} placeholder="Enter Email"/>
         {errors.email && <span className="text-danger">{errors.email}</span>}
         <div className="row">
             <div className="col-6">
                <label>First Name</label>
                <input type="text" className="form-control mb-2" name="firstname" value={firstname} onChange={handleonChange} placeholder="Enter First Name"/>
                {errors.firstname && <span className="text-danger">{errors.firstname}</span>}
             </div>
             <div className="col-6">
                <label>Last Name</label>
                <input type="text" className="form-control mb-2" name="lastname" value={lastname} onChange={handleonChange} placeholder="Enter Last Name"/>
                {errors.lastname && <span className="text-danger">{errors.lastname}</span>}
             </div>
         </div>
         <div className="row">
             <div className="col-4">
             <label>Country Code</label>
             <input type="text" className="form-control mb-2" name="countrycode" value={countrycode} onChange={handleonChange} placeholder="+22"/>
             {errors.countrycode && <span className="text-danger">{errors.countrycode}</span>}
             </div>
             <div className="col-lg-8">
             <label>Phone No.</label>
             <input type="text" className="form-control mb-2" name="phone" value={phone} onChange={handleonChange} placeholder="Enter Phone number"/>
             {errors.phone && <span className="text-danger">{errors.phone}</span>}
             </div>
         </div>
         <label>Password</label>
         <input type="password" className="form-control mb-2" name="password" value={password} onChange={handleonChange} placeholder="Enter Password"/>
         {errors.password && <span className="text-danger">{errors.password}</span>}
          <br></br>
          <label className="text-muted">Hide Password policy</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" checked={containsNumber?true:false}  />
           <label className="form-check-label"  htmlFor="gridCheck">
            Have one number
           </label>
           <br></br>
           <input className="form-check-input" type="checkbox" id="gridCheck1" checked={containsUppercase?true:false} />
           <label className="form-check-label"  htmlFor="gridCheck1">
           Have one Uppercase Character 
           </label>
           <br></br>
           <input className="form-check-input" type="checkbox" id="gridCheck2"  checked={containsLowercase?true:false}/>
           <label className="form-check-label"  htmlFor="gridCheck2">
           Have one Lowercase Character
           </label>
           <br></br>
           <input className="form-check-input" type="checkbox" id="gridCheck3" checked={containsSymbol?true:false} />
           <label className="form-check-label"  htmlFor="gridCheck3">
           Have one special character
           </label>
           <br></br>
           <input className="form-check-input" type="checkbox" id="gridCheck4" checked={containsMinChar?true:false} />
           <label className="form-check-label" htmlFor="gridCheck4">
           Have minimum 8 character 
           </label>
       </div>
         <br></br>
        <label>Confirm Password</label>
        <input type="password" className="form-control mb-2" name="confirmPassword" value={confirmPassword} onChange={handleonChange} placeholder="Enter Password again"/>
        {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
        <br></br>
        <button type="submit" className="form-control btn btn-primary mb-4">Save</button>
        </form>
        <div className="d-flex justify-content-center">
               Already have an account?
               <Link to="/login">
                 Sign In
               </Link>
         </div>
        </>
     )
}

export default Register
