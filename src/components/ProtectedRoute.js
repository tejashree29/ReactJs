import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({children,...rest}) => {
    const auth=localStorage.getItem("UserLogin")
    console.log(auth);
    return (
        <Route {...rest} render={()=>auth?(children):(<Redirect to={'/'}/>)}/>
    )
}

export default ProtectedRoute
