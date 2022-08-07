import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import Button from '../../../components/Button';
import { Link, useNavigate } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import SignUpOrLogin from '../../../components/SignUpOrLogin';
import InputMask from "react-input-mask";
import PreLoginApi from '../../../components/api/PreLoginApi';

const StepOne = () => {
    const { register, handleSubmit, watch } = useForm();
    let navigate = useNavigate();
    // const [inputValue, setInputValue] = useState("");
    const [apiData, setApiData] = useState('');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const businessNumber = watch("businessNumber");

    // async function fetchData(param) {
    //     await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX + "signup/existence", {
    //         method: 'POST',
    //         headers: new Headers({ 'Content-Type': 'application/json' }),

    //         body: JSON.stringify({
    //             mobile_number: param,
    //         })
    //     }).then(res => res.json()).then(
    //         (result) => {
    //             setIsLoaded(true);
    //             setData(result);
    //             // setInputValue(param);
    //             console.log(result)
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     )
    // }

    useEffect(() => {
        window.history.replaceState({}, "");
        if (isLoaded === true) {
            if (error) {
                toast.error(error.messages.toString());
                return;
            }
            console.log(apiData)
            let response = JSON.stringify(apiData);
            response = JSON.parse(response);

            if (response["code"] === 200) {
                const numberWithoutSpace = businessNumber.split(" ").join("");
                sessionStorage.setItem("businessNumber", numberWithoutSpace);
                // navigate("/signup/step-two", {
                //     state: {
                //         mobile_number: businessNumber
                //     }
                // });
                navigate("/signup/step-two")
                return;
            }
            toast.error(response["messages"].toString());
        }
    }, [apiData, isLoaded])

    const onSubmit = async () => {
        // event.preventDefault();
        // data = JSON.stringify(data);

        var mobileNumber = businessNumber.split(" ").join("");
        console.log(mobileNumber);

        if (mobileNumber.length !== 14) {
            toast.error("Please enter valid phone number.");
            return;
        }

        // fetchData(mobileNumber);


        try {

            var req_body = JSON.stringify({ mobile_number: mobileNumber });
            PreLoginApi("signup/existence", req_body).then((responseJSON) => {
                setIsLoaded(true);

                var response = JSON.stringify(responseJSON);
                response = JSON.parse(response);
                if (response["status"] === 1) {
                    setApiData(response["data"]);
                    return;
                }

                setError(response["data"]);
            })
                .catch((error) => {
                    toast.error(error);
                    console.log(error.message);
                });
        }
        catch (err) {
            toast.error(err.toString());
            console.log(err);
        }


    };
    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">Join Deshi</h1>
            <SignUpOrLogin />
            <div className="bg-neutral-100 p-9 text-secondary">
                <p className="mb-5">Provide the 11 digit Bangladeshi phone number you want to associate with your merchant account.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <InputMask mask="+880 999 999 9999" type="tel" name="businessNumber" {...register("businessNumber", { required: true })} className="w-full p-3 rounded-lg border border-[#EEEEEE]" minLength={16} autoComplete='off' placeholder="Business Number" required />

                        {/* <input type="tel" name="businessNumber" {...register("businessNumber")} className="w-full p-3 rounded-lg border border-[#EEEEEE]" autoComplete='off' placeholder="Business Number" /> */}
                    </div>
                    <Button />
                    <p>Already have an account? <Link to="/login" className="font-bold text-primary">Login Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default StepOne;