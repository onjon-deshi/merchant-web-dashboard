import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import Button from '../../../components/Button';
import { useNavigate } from "react-router-dom";

const StepThree = () => {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        sessionStorage.setItem("name", data.merchantAccountName);
        navigate('/signup/step-four')
    };

    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Join Deshi</h1>
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">Provide the business name as per trade license which you want to associate with your merchant account.</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <input type="text" name="merchantAccountName" {...register("merchantAccountName")} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder="Merchant Account Name" />
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    );
};

export default StepThree;