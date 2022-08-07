import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../../components/Button';
import { ImArrowRight2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    let navigate = useNavigate();

    function handleChange(element, index) {
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

    const onSubmit = (e) => {
        e.preventDefault();
        let otpString = otp.join('');
        console.log(otpString);
        if (otpString.length === 6) {
            navigate('/signup/step-three')
        }

    }

    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-7">Join Deshi</h1>
            <div className="bg-neutral-100 px-8 py-10 text-secondary rounded-lg">
                <p className="mb-6">Please enter the 6 digit code we've sent to: <span className="font-bold">+880 1676533442</span></p>
                <form onSubmit={onSubmit}>
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
                    <p> Didn’t get the code yet? <button type="button" className="font-bold text-primary">Send Again <ImArrowRight2 className='inline ml-1' /></button></p>
                </form>
            </div>
        </div>
    );
};

export default StepTwo;