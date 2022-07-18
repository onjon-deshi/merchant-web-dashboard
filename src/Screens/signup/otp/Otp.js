import React, { useState } from 'react';
import Button from '../../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ImArrowRight2 } from "react-icons/im";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otp = ({ title, subtitle, number }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    let location = useLocation();
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

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     if (element.value < 6) {
    //         toast.error("Invalid otp, must be 6 digits");
    //     }
    //     else {
    //         navigate("/add-email");
    //     }
    // }

    return (
        // <div className="w-3/5">
        //     <h1 className="font-bold text-4xl mb-7">Join Deshi</h1>
        //     <div className="bg-neutral-100 px-8 py-4 text-secondary rounded-lg">
        //         <p>Please enter the 6 digit code we've sent to: <span className="font-bold">+880 1676533442</span></p>
        //         <form action="" className="flex items-center space-x-2 container">
        //             <input type="text" id="field-1" className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center" maxLength="1" onInput={digitValidate(this)} onKeyUp={tabChange(1)} />
        //             <input type="text" id="field-2" className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center" maxLength="1" onInput={digitValidate(this)} onKeyUp={tabChange(2)} />
        //             <span>&ndash;</span>
        //             <input type="text" id="field-3" className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center" maxLength="1" onInput={digitValidate(this)} onKeyUp={tabChange(3)} />
        //             <input type="text" id="field-4" className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center" maxLength="1" onInput={digitValidate(this)} onKeyUp={tabChange(4)} />
        //             <span>&ndash;</span>
        //             <input type="text" id="field-5" className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center" maxLength="1" onInput={digitValidate(this)} onKeyUp={tabChange(5)} />

        //             <input type="text" id="field-6" className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center" maxLength="1" />
        //         </form>
        //     </div>
        // </div>
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-7">{title}</h1>
            <div className="bg-neutral-100 px-8 py-10 text-secondary rounded-lg">
                <p className="mb-6">{subtitle} <span className="font-bold">{number}</span></p>
                <form>
                    <div className="flex items-center space-x-2 container mb-4">
                        {otp.map((data, index) => {
                            return (
                                <input
                                    type="text"

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
                    {location.pathname === "/otp"
                        ? <p> Didn’t get the code yet? <Link to="#" className="font-bold text-primary ">Send Again <ImArrowRight2 className='inline ml-1' /></Link></p>
                        : <>
                            <p className="text-primary font-bold cursor-pointer mb-2.5">Didn’t get the code yet?</p>
                            <p>Don’t have any account? <Link to="#" className="font-bold text-primary ">Signup Instead <ImArrowRight2 className='inline ml-1' /></Link></p>
                        </>
                    }
                </form>
            </div>
        </div>
    );
};

export default Otp;