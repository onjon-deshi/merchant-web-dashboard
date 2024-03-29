
import React, {useEffect, useState} from "react";
import {ReactComponent as CloseBtn} from '../../../../../assets/icons/close.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "../../../../../components/FileUpload/style.css";
import ArrowLeft from "../../../../../assets/icons/arrow-left.png";

const BusinessStep6 = () => {

    let [businessLogoForPreview,setBusinessLogoForPreview] = useState([]);

    let navigate = useNavigate();
    const { state } = useLocation();


    useEffect(()=>{
        if (state === null || state.businessLogo === undefined || state.businessLogo === "" || state.businessLogo === null) {
            navigate("/dashboard/business-details-step-five");
            return;
        }

        setBusinessLogoForPreview(state.businessLogo);
    },[]);

    
    var uploadPdf = () => {
        navigate("/dashboard/home", {
            state: {
                message2: "Business Details verified successfully."
            }
        });
    }


    var backToUpload = () => {
        navigate("/dashboard/business-details-step-five", {
            state: {
                businessLogo: null
            }
        });
    }


    return (
        <div className="font-medium h-[100vh]">
            <header className="flex justify-between items-center p-4 border-b-2 border-dark-white mb-[40px]">
                <Link to="/dashboard/home"><CloseBtn /></Link> {/*will be modified later */}
                <p className="text-xl -mr-3">Upload Business Logo</p>
                <div className="mr-3">
                    Step <strong>6</strong> out of <strong>6</strong>
                </div>
            </header>
            <main className="m-auto">
                <div className="block justify-center content-center text-center">
                    <div style={{height: "600px", display: "grid", alignItems: "center" }}>
                        <img alt="Profile Pic" src={businessLogoForPreview} style={{maxHeight: "600px", display: "block", margin: "0 auto"}} />
                    </div>

                    <p className="mt-3 text-xl text-[#999999] font-medium">
                        Wrong Photo? Drag & Drop Business Logo Here
                        <a onClick={backToUpload} className="text-[#158560] ml-2 cursor-pointer">
                            Again <img className="inline-block ml-1" src={ArrowLeft} alt="Arrow Left"></img>
                        </a>
                    </p>
                    <p className="text-lg font-medium"> or </p>
                    <p onClick={uploadPdf} className="upload-kyb-button mt-1 cursor-pointer" style={{backgroundColor: "#00C52A", width: "160px"}} >Upload Now</p>
                </div>
            </main>
        </div>
    );

};

export default BusinessStep6;