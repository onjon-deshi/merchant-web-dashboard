import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import SignUpOrLogin from '../../components/SignUpOrLogin';
import { ImArrowRight2 } from "react-icons/im";



const Login = ({ title, subtitle, type1, type2, name1, name2, placeholder1, placeholder2, maxLength, btnName }) => {
    
    const location = useLocation();

    
    // handle button click of login form
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Submit");
    }

    return (
        <div className="w-3/5">
            <h1 className="font-bold text-4xl mb-8">{title}</h1>
            { location.pathname === "/login" && <SignUpOrLogin />}
            <div className="bg-neutral-100 p-9 text-secondary ">
                <p className="mb-5">{subtitle}</p>
                <form onSubmit={onSubmit} method="POST" className="form-body">
                    <div className="mb-4">
                        <input type={type1} name={name1} className="w-full p-3 rounded-lg mb-4" autoComplete='off' maxLength={maxLength} placeholder={placeholder1} required />
                        <input type={type2} name={name2} className="w-full p-3 rounded-lg" placeholder={placeholder2} required />
                        {/* <label htmlFor="floatingInput">Mobile number</label> */}
                    </div>
                    <Button name={btnName} />
                    {location.pathname === "/login" && <Link to="/forgot-pass" className='font-bold text-primary inline-block mb-3'>Forgot Password?</Link>}
                    <p>Don’t have any account? <Link to="/signup" className="font-bold text-primary">Signup Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>
                </form>
            </div>
        </div>

    );
};

export default Login;