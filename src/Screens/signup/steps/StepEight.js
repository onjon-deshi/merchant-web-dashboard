import React from 'react';
import Button from '../../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const StepEight = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
        navigate("/dashboard/home")

    }
    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Confirm Password</h1>
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">Please re-type your Password</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <input type="password" {...register("confirmPassword", { required: true })} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder="Password" />
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    );
};

export default StepEight;