import React from 'react';
import { ToastContainer } from 'react-toastify';
import SignUpOrLogin from '../../../components/SignUpOrLogin';
import { useForm } from "react-hook-form";
import Button from '../../../components/Button';
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

const StepOne = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Join Deshi</h1>
            <SignUpOrLogin />
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">Provide the business name as per trade license which you want to associate with your merchant account.</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <input type="text" name="merchantAccountName" {...register("merchantAccountName")} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder="Merchant Account Name" />
                    </div>
                    <Button />
                    <p>Already have an account? <Link to="/login" className="font-bold text-primary">Login Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default StepOne;