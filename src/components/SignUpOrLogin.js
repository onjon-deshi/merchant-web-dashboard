import React from 'react';
import { NavLink } from "react-router-dom";
// import '../styles/SignUpOrLogin.css'

const SignUpOrLogin = () => {
    return (
        <nav className="mb-10">
            {/* Add dynamic class .text-gray-500 for the inactive link  */}
            <NavLink to='/signup' className="mr-5">Signup</NavLink>
            <NavLink to='/login' className="ml-3.5">Login</NavLink>
        </nav >
    );
};

export default SignUpOrLogin;