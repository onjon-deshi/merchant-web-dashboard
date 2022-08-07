import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';

const StepSix = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Organization Type & Category</h1>
            <div className="bg-neutral-100 p-9 text-secondary ">
                <form onSubmit={handleSubmit(onSubmit)} method="POST" className="form-body" autoComplete='off'>
                    <div className="mb-2">
                        <label htmlFor="typeOfOrg" className="block mb-3">Select Type of Organization</label>
                        <select {...register("typeOfOrg")} className="w-full mb-2.5 rounded border-solid border border-dark-white">
                            <option value="" disabled selected className="hidden">Choose from all type of organization</option>
                            <option value="Sole Proprietorship" className="text-secondary">Sole Proprietorship</option>
                            <option value="Partnership" className="text-secondary">Partnership</option>
                            <option value="Limited Company" className="text-secondary">Limited Company</option>
                            <option value="Others" className="text-secondary">Others</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="businessCategory" className="block mb-3">Business Category</label>
                        <select {...register("businessCategory")} className="w-full mb-2.5 rounded border-solid border border-dark-white">
                            <option value="" disabled selected className="hidden">Choose from all categories</option>
                            <option value="Retail Trade" className="text-secondary">Retail Trade</option>
                            <option value="Wholesale" className="text-secondary">Wholesale</option>
                            <option value="Lifestyle" className="text-secondary">Lifestyle</option>
                            <option value="Tours & Travels" className="text-secondary">Tours & Travels</option>
                            <option value="Digital Service" className="text-secondary">Digital Service</option>
                            <option value="Electronics & Household Products" className="text-secondary">Electronics & Household Products</option>
                            <option value="Hotel & Restaurant" className="text-secondary">Hotel & Restaurant</option>
                            <option value="Transport & Vehicle" className="text-secondary">Transport & Vehicle</option>
                            <option value="Others" className="text-secondary">Others</option>
                        </select>
                    </div>
                    <Button />
                </form>
            </div>
        </div>
    );
};

export default StepSix;