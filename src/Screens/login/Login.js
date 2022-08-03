import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputMask from "react-input-mask";
import Button from '../../components/Button';
import SignUpOrLogin from '../../components/SignUpOrLogin';
import { ImArrowRight2 } from "react-icons/im";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = (props) => {

    const { state } = useLocation();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState([]);

    let [input, setInput] = useState({
        mobileNumber: "",
        password: ""
    });


    useEffect(() => {
        if (state !== null) {
            if (state.passwordChangeMessage !== null && state.passwordChangeMessage !== undefined && state.passwordChangeMessage !== "") {
                toast.success(state.passwordChangeMessage.toString());
            }
        }
        window.history.replaceState({}, "");

        if (isLoaded === true) {
            if (error) {
                toast.error(error.messages);
                return;
            }

            let response = JSON.stringify(apiData);
            response = JSON.parse(response);
            if (response["code"] === 200) {
                if (response["data"]["token"] !== undefined) {
                    let token = response["data"]["token"];
                    window.localStorage.setItem("UserToken", token);
                    document.location.href = "/dashboard/home";
                    return;
                }
            }

            toast.error(response["messages"].toString());
        }

    }, [apiData, isLoaded]);


    let handleInputChange = (e) => {
        setInput({ ...input, [e.name]: e.value });
    }

    let handleSubmit = async (event) => {
        event.preventDefault();

        var mobileNumberFinal = input.mobileNumber.split(" ").join("");
        mobileNumberFinal = mobileNumberFinal.replace(/_+/g, '');

        if (mobileNumberFinal.length !== 14) {
            toast.error("Please enter valid phone number.");
            return;
        }

        if (input.password.length < 8 || input.password.length > 32) {
            toast.error("Password must be between 8 to 32 character long.");
            return;
        }

        try {
            await fetch(process.env.REACT_APP_API_BASE_URL + "api/v1/auth/signin", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),

                body: JSON.stringify({
                    mobile_number: mobileNumberFinal,
                    password: input.password
                })
            }).then(res => res.json()).then(
                (result) => {
                    setIsLoaded(true);
                    setApiData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        }
        catch (err) {
            toast.error(error.messages.toString());
            console.log(error);
        }
    }


    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">{props.title}</h1>
            <SignUpOrLogin />
            <div className="bg-neutral-100 p-9 text-secondary ">
                <p className="mb-5">{props.subtitle}</p>
                <form onSubmit={handleSubmit} method="POST" className="form-body">

                    <div className="mb-4">
                        <InputMask mask="+880 999 999 9999" value={input.mobileNumber} type={props.type} name={props.name1} onChange={(e) => handleInputChange(e.target)} className="w-full p-3 rounded-lg mb-4" min-length="16" autoComplete='off' placeholder={props.placeholder1} required />
                        <input type={props.type2} value={input.password} name={props.name2} onChange={(e) => handleInputChange(e.target)} className="w-full p-3 rounded-lg border-none" placeholder={props.placeholder2} required />
                    </div>
                    <Button name={props.btnName} />
                    <Link to="/forget-password-step-one" className='font-bold text-primary inline-block mb-3'>Forgot Password?</Link>
                    <p>Don’t have any account? <Link to="/signup/step-one" className="font-bold text-primary">Signup Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>
                </form>
            </div>
        </div>
    );
}


export default Login;

