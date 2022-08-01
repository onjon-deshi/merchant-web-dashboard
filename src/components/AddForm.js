import React, { useState } from 'react';
import Button from './Button';
import SignUpOrLogin from './SignUpOrLogin';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddForm = ({ title, subtitle, placeholder, type, name, value }) => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState('');

    let navigate = useNavigate();
    const location = useLocation();


    async function fetchData(param) {
        await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX + "signup/existence", {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),

            body: JSON.stringify({
                mobile_number: param,
            })
        }).then(res => res.json()).then(
            (result) => {
                setData(result);
                console.log(data);
            },
            (error) => {
                "Can't fetch data"
            }
        )
    }


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue.length);

        if (inputValue.length !== 14) {
            toast.error("Please enter valid phone number.");
            return;
        }

        fetchData(inputValue);

        // if (name === "mobileNumber" && /^\d{11}$/.test(inputValue)) {
        //     setInputValue("")
        //     navigate('/otp');
        // }
        // else {
        //     toast.error("Invalid number; must be 11 digits");
        // }

        // if (name === "email" && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(inputValue)) {
        //     setInputValue("")
        //     navigate('/terms-and-policy');
        // }
        // else {
        //     toast.error("Invalid email");
        // }
    }

    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">{title}</h1>
            {location.pathname === "/signup" && <SignUpOrLogin />}
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">{subtitle}</p>
                <form onSubmit={onSubmit} >
                    <div className="mb-4">
                        <input type={type} name={name} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder={placeholder} value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                        {/* <label htmlFor="floatingInput">Mobile number</label> */}
                    </div>
                    <Button value={value} />
                    {location.pathname === "/signup" && <p>Already have an account? <Link to="/login" className="font-bold text-primary">Login Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>}
                    {location.pathname === "/forget-password-step-one" && <p>Don’t have any account? <Link to="/signup" className="font-bold text-primary">Signup Instead <ImArrowRight2 className='inline' /></Link> </p>}
                </form>
            </div>
        </div>
    );
};

export default AddForm;  