import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";


import AddForm from '../components/AddForm';
import apple from '../assets/images/apple-store.svg'
import google from '../assets/images/google-play.svg'
import img from '../assets/images/image.jpg'
import ErrorShow from './ErrorShow';
import TermsAndPolicy from './signup/termsAndPolicy/TermsAndPolicy';
import Nid from './signup/nid/Nid';
import Login from './login/Login';
import BusinessTypes from './signup/businessTypes/BusinessTypes';
import BusinessProfile from './signup/businessProfile/BusinessProfile';
import BusinessDetails from './signup/businessDetails/BusinessDetails';
import TransactionProfile from './signup/transactionProfile/TransactionProfile';
import BankAccount from './signup/bankAccount/BankAccount';
import UploadDocuments from './signup/uploadDocuments/UploadDocuments';
import Otp from './signup/otp/Otp';


import ForgetPasswordStepOne from "./ForgetPassword/StepOne";
import ForgetPasswordStepTwo from "./ForgetPassword/StepTwo";
import ForgetPasswordStepThree from "./ForgetPassword/StepThree";
import StepOne from './signup/steps/StepOne';
import StepTwo from './signup/steps/StepTwo';
import StepThree from './signup/steps/StepThree';
import StepFour from './signup/steps/StepFour';
import StepFive from './signup/steps/StepFive';
import StepSix from './signup/steps/StepSix';
import StepSeven from './signup/steps/StepSeven';
import StepEight from './signup/steps/StepEight';


const LoginScreen = () => {
    return (
        <div className="App flex font-montserrat w-full">
            <div className="relative w-1/2">
                <img src={img} alt="" className="h-full w-full p-8 relative" />
                <h1 className="absolute text-4xl top-20 left-96 font-semibold text-white">WELCOME</h1>
                <h1 className="absolute text-4xl top-32 left-72 text-white">TO OUR COMMUNITY</h1>
                <div className='flex absolute bottom-24 left-56'>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.deshi.personal" rel="noopener noreferrer" className="mr-5">
                        <img src={apple} alt="apple store link" />
                    </a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.deshi.personal" rel="noopener noreferrer">
                        <img src={google} alt="google play link" />
                    </a>
                </div>
                <p className="absolute bottom-14 left-80 text-white">Experience our beautiful and unique App</p>
            </div>

            <div className="flex flex-col justify-center w-1/2">
                <Routes>

                    {/* Signup Module */}
                    <Route path="/signup/step-one" element={<StepOne />} />
                    <Route path="/signup/step-two" element={<StepTwo />} />
                    <Route path="/signup/step-three" element={<StepThree />} />
                    <Route path="/signup/step-four" element={<StepFour />} />
                    <Route path="/signup/step-five" element={<StepFive />} />
                    <Route path="/signup/step-six" element={<StepSix />} />
                    <Route path="/signup/step-seven" element={<StepSeven />} />
                    <Route path="/signup/step-eight" element={<StepEight />} />
                    {/* <Route path="/add-pass" element={<AddForm title="Set a Password" type="password" subtitle="Please set a Password (8-16 digit) to proceed" placeholder="Password" />} />
                    <Route path="/add-confirm-pass" element={<AddForm title="Confirm Password" type="password" subtitle="Please re-type your Password" placeholder="Password" />} />
                    <Route path="/nid-front" element={<Nid />} />
                    <Route path="/nid-back" element={<Nid />} />
                    <Route path="/selfie" element={<Nid />} />
                    <Route path="/business-types" element={<BusinessTypes />} />
                    <Route path="/private" element={<TermsAndPolicy title="Private Limited" subheading_one="1. What is Private Limited?" details_one="By accessing and placing an order with you confirm that you are in greement with and bound by the terms of service contained in the Terms & Conditions outlined below." subheading_two="2. Documents Needed" details_two="Grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the app stricktly in accordance with the terms of this Agreement." subheading_three="3. Anything Else" details_three="Grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the app strictly in accordance with the terms of this Agreement." btnOneName="Yes, this is my Type of Organization" btnTwoName="No, select another Type" />} />
                    <Route path="/business-profile" element={<BusinessProfile />} />
                    <Route path="/business-details" element={<BusinessDetails />} />
                    <Route path="/transaction-profile" element={<TransactionProfile />} />
                    <Route path="/bank-account" element={<BankAccount />} />
                    <Route path="/upload-documents" element={<UploadDocuments />} /> */}



                    {/* Login Module */}
                    <Route path="/" element={<Navigate replace to="/login" />} />

                    <Route path="/login" element={<Login title="Welcome Back to Deshi" subtitle="Enter your ID and Password to Login your account" type1="tel" type2="password" name1="mobileNumber" name2="password" placeholder1="Mobile Number" placeholder2="Password" maxLength="13" btnName="Login" />} />


                    <Route path="/forget-password-step-one" element={<ForgetPasswordStepOne title="Welcome Back to Deshi" subtitle="Provide the 11 digit Bangladeshi phone number you want to associate with your merchant account." type="tel" name="mobileNumber" placeholder="Mobile Number" btnName="Continue" />}></Route>

                    <Route path="/forget-password-step-two" element={<ForgetPasswordStepTwo title="Join Deshi" subtitle="Please enter the 6 digit code we've sent to:" bottomText="Didn’t get the code yet?" bottomLink="Send Again" />}></Route>

                    <Route path="/forget-password-step-three" element={<ForgetPasswordStepThree title="Reset Password" subtitle="Enter the code we sent to the phone number" type1="password" type2="password" name1="password" name2="confirmPassword" placeholder1="New Password" placeholder2="Confirm Password" btnName="Reset Password" />} />


                </Routes>
            </div>

        </div>
    );
};

export default LoginScreen; 