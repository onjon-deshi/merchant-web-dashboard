import React from 'react';
import Button from '../../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        navigate('/signup/step-five');
    };
    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Your Email Here</h1>
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">Provide the email you want to associate with your merchant account. We'll send a link there for verification</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <input type="email" name="email" {...register("email")} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder="Business Email" />
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    );
};

export default StepFour;