import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';
import Button from '../../../components/Button';
import { Link, useNavigate } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import SignUpOrLogin from '../../../components/SignUpOrLogin';

const StepTwo = () => {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate("/signup/step-two")
    };
    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Join Deshi</h1>
            <SignUpOrLogin />
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">Provide the 11 digit Bangladeshi phone number you want to associate with your merchant account.</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <input type="tel" name="businessNumber" {...register("businessNumber")} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder="Business Number" />
                    </div>
                    <Button />
                    <p>Already have an account? <Link to="/login" className="font-bold text-primary">Login Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default StepTwo;