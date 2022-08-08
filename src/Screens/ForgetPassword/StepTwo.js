import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button';

import { ImArrowRight2 } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';



export default function StepTwo(props) {

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [otpMobileNumber, setOtpMobileNumber] = useState("");

    let navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        // Check OTP page access is valid or not
        if (state === null || state.mobileNumber === undefined || state.mobileNumber === "" || state.mobileNumber === null) {
            navigate("/forget-password-step-one");
            return;
        }

        setOtpMobileNumber(state.mobileNumber);

        if (isLoaded === true) {
            if (error) {
                toast.error(error.messages.toString());
                return;
            }

            let response = JSON.stringify(apiData);
            response = JSON.parse(response);
            if (response["code"] === 200) {
                window.history.replaceState({}, "");
                navigate("/forget-password-step-three", {
                    state: {
                        mobileNumber: otpMobileNumber,
                        otpNumber: otp
                    }
                });
                return;
            }

            toast.error(response["messages"].toString());
        }
    }, [apiData, isLoaded]);


    var handleChange = (element, index) => {
        if (isNaN(element.value)) {
            return false;
        }

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])
        if (element.value !== "" && element.nextSibling) {
            element.nextSibling.focus();
        }

        if (element.value === "" && element.previousSibling) {
            element.previousSibling.focus();
        }
    }


    async function fetchData(param, isResend=false) {
        await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX + "forgot-password/verify-otp", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),

            body: JSON.stringify({
                mobile_number: otpMobileNumber,
                otp: param
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



    var handleSubmit = (event) => {
        event.preventDefault();
        var otpString = otp.join('');
        if (otpString.length === 6) {
            fetchData(otpString);
            return;
        }

        toast.error("Please enter valid OTP");
    }


    

    var resendOtp = () => {
        try {
            fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX + "forgot-password/send-otp", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }), 
                body: JSON.stringify({
                    mobile_number: otpMobileNumber,
                })
            }).then(res => res.json()).then(
                (resultJSON) => {
                    var result = JSON.stringify(resultJSON);
                    result = JSON.parse(result);

                    if(result["code"]===200) {
                        toast.success(result["messages"].toString());
                        return;
                    }

                    toast.error(result["messages"].toString());
                },
                (error) => {
                    console.log(error.messages);
                    toast.error("A problem occur. Please try again.");
                }
            );
        } catch(ex) {
            console.log(ex.messages.toString());
            toast.error("A problem occur. Please try again.");
        }
    }


    
    setTimeout(()=>{
        $("#resetOtpBtn").hide();
        $("#resetOtpBtnActive").show();
    },60000);


    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-7">{props.title}</h1>
            <div className="bg-neutral-100 px-8 py-10 text-secondary rounded-lg">
                <p className="mb-6">{props.subtitle} <span className="font-bold">{otpMobileNumber}</span></p>
                <form onSubmit={handleSubmit} >
                    <div className="flex items-center space-x-2 container mb-4">
                        {otp.map((data, index) => {
                            return (
                                <input
                                    type="text"
                                    name="otp[]"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center"
                                    onChange={(e) => {
                                        handleChange(e.target, index);
                                    }}
                                    onFocus={(e) => e.target.select()}
                                />
                            );
                        })}
                    </div>
                    <Button name="Verify OTP" />
                    <p> Didn’t get the code yet?
                    <button id="resetOtpBtn" type="button" className="text-ash font-bold ml-2 cursor-default">Send Again <ImArrowRight2 className='inline ml-1' /></button>
                    <button id="resetOtpBtnActive" onClick={resendOtp} type="button" className="hidden font-bold text-primary ml-2">
                        Send Again <ImArrowRight2 className='inline ml-1' />
                    </button>
                    </p>
                </form>
            </div>
        </div>
    );

}