import React from 'react';
import Input from './Input';

const Register = ()=>{
    return (
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Input type="passwoed" placeholder="Confirm Password"/>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;