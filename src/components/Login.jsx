import React from 'react';
import Input from './Input';
// import Register from './Register';

const LoginForm = (props) =>{
return(
    <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.reGistered && <Input type="password" placeholder="Confirm Password" />}
        <button type="submit">
            {props.reGistered ? "Login" : "Register"}
        </button>
    </form>
)}

export default LoginForm;




