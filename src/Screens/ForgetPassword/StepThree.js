import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button';

import { ImArrowRight2 } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function StepThree(props) {
    
    const [password, setPassword] = useState({
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [otpMobileNumber, setOtpMobileNumber] = useState("");
    const [otpNumber, setOtpNumber] = useState("");

    let navigate = useNavigate();
    const { state } = useLocation();


    useEffect(()=>{

        // Check OTP page access is valid or not
        if( state === null || state.mobileNumber === undefined || state.mobileNumber === "" || state.mobileNumber === null || state.otpNumber === undefined || state.otpNumber === "" || state.otpNumber === null) {
            navigate("/forget-password-step-one");
            return;
        }

        setOtpMobileNumber(state.mobileNumber);
        setOtpNumber(state.otpNumber);

        if( isLoaded === true ) {
            if( error ) {
                toast.error(error.messages);
                return;
            }

            let response = JSON.stringify(apiData);
            response = JSON.parse(response);

            if (response["code"] === 200) {
                window.history.replaceState({}, "");
                navigate("/login", {
                    state: {
                        passwordChangeMessage: "Password Change Successfully."
                    }
                });
                return;
            }

            toast.error(response["messages"].toString());
        }

    },[apiData, error, isLoaded, navigate, state]);


    // Destroy OTP session and redirect to forget password step one page after 5 minutes
    setTimeout(()=>{
        window.history.replaceState({}, "");
        navigate("/forget-password-step-one");
        return;
    }, 300000);


    async function fetchData() {
        await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX + "forgot-password/reset", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),

            body: JSON.stringify({
                mobile_number: otpMobileNumber,
                otp: otpNumber.join(""),
                password: password.password,
                password_confirmation: password.confirmPassword,
            })

        }).then(res => res.json()).then(
            (result)=>{
                setIsLoaded(true);
                setApiData(result);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        );
    }


    var handleChange = (e) => {
        setPassword({...password, [e.name]: e.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(password.password.length < 8 || password.password.length > 32 ) {
            toast.error("Password must be between 8 to 32 character long.");
            return;
        }
        
        if(password.password === password.confirmPassword) {
            fetchData();
            return;
        }
        
        toast.error("Password and Confirm Password did not match.");
        return;

    }



    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">{props.title}</h1>
            <div className="bg-neutral-100 p-9 text-secondary ">
                <p className="mb-5">{props.subtitle}</p>
                <form onSubmit={handleSubmit} method="POST" className="form-body" autoComplete='off'>

                    <div className="mb-4">
                        <input type={props.type1} name={props.name1} onChange={(e)=>handleChange(e.target)} className="w-full p-3 rounded-lg border-none mb-4" placeholder={props.placeholder1} required />

                        <input type={props.type2} name={props.name2} onChange={(e)=>handleChange(e.target)} className="w-full p-3 rounded-lg border-none" placeholder={props.placeholder2} required />
                    </div>

                    <Button name={props.btnName} />

                    <Link to="/" className='font-bold text-primary inline-block mb-3'><ImArrowRight2 className='inline mr-1 mb-0.5 rotate-180' /> Back to Login?</Link>
                    <p>Don’t have any account? <Link to="/signup" className="font-bold text-primary">Signup Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>
                </form>
            </div>
        </div>
    );

}