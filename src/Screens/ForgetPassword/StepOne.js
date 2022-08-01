import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from "react-input-mask";
import Button from '../../components/Button';

import { ImArrowRight2 } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function StepOne(props) {
    
    const [mobileNumber, setMobileNumber] = useState('')
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiData, setApiData] = useState([]);

    let navigate = useNavigate();
    
    async function fetchData(param) {
        await fetch(process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_PREFIX + "forgot-password/send-otp", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),

            body: JSON.stringify({
                mobile_number: param,
            })

        }).then(res => res.json()).then(
            (result)=>{
                setIsLoaded(true);
                setApiData(result);
                setMobileNumber(param);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        );
    }


    useEffect(()=>{
        
        if( isLoaded === true ) {
            if( error ) {
                toast.error(error.messages.toString());
                return;
            }

            let response = JSON.stringify(apiData);
            response = JSON.parse(response);

            if (response["code"] === 200) {

                sessionStorage.setItem("otp-mobile-number", mobileNumber);
                navigate("/otp", {
                    state: {
                        mobileNumber: mobileNumber
                    }
                });

                return;
            }

            toast.error(response["messages"].toString());
        }

    },[apiData]);


    const handleSubmit = e => {
        e.preventDefault();

        var mobileNumberFinal = mobileNumber.split(" ").join("");
        mobileNumberFinal = mobileNumberFinal.replace(/_+/g, '');

        if (mobileNumberFinal.length !== 14) {
            toast.error("Please enter valid phone number.");
            return;
        }

        fetchData(mobileNumberFinal);
    }



    return (
        <div className="w-3/5">
            <ToastContainer />
            <h1 className="font-bold text-4xl mb-8">{props.title}</h1>
            <div className="bg-neutral-100 p-9 text-secondary ">
                <p className="mb-5">{props.subtitle}</p>
                <form onSubmit={handleSubmit} method="POST" className="form-body">
                    <div className="mb-4">
                        <InputMask mask="+880 999 999 9999" value={mobileNumber} type={props.type} name={props.name} onChange={(e)=>setMobileNumber(e.target.value)} className="w-full p-3 rounded-lg" minLength={16} autoComplete='off' placeholder={props.placeholder} required />
                    </div>
                    <Button name={props.btnName} />
                    <p>Don’t have any account? <Link to="/signup" className="font-bold text-primary">Signup Instead <ImArrowRight2 className='inline' /></Link> </p>
                </form>
            </div>
        </div>
    );

}