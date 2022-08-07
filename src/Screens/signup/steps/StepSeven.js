import React from 'react';
import Button from '../../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const StepSeven = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
        sessionStorage.setItem("password", data.password);
        navigate("/signup/step-eight")

    }
    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Set a Password</h1>
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">Please set a Password of 8-16 characters. Should include Capital letter, Number and Special Character.</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <input type="password" {...register("password", { required: true })} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder="Password" />
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    );
};

export default StepSeven;