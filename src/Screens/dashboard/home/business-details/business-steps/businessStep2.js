
import React, { useEffect, useState } from "react";
import { ReactComponent as CloseBtn } from '../../../../../assets/icons/close.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../../../../components/FileUpload/style.css';
import ArrowLeft from '../../../../../assets/icons/arrow-left.png';

const BusinessStep2 = () => {

    let [tradeLicenseForPreview, setTradeLicenseForPreview] = useState([]);

    let navigate = useNavigate();
    const { state } = useLocation();


    useEffect(() => {
        if (state === null || state.tradeLicense === undefined || state.tradeLicense === "" || state.tradeLicense === null) {
            navigate("/dashboard/business-details-step-one");
            return;
        }

        setTradeLicenseForPreview(state.tradeLicense);
    }, []);


    var uploadPdf = () => {
        navigate("/dashboard/business-details-step-three", {
            state: {
                tradeLicense: "upload-done"
            }
        });
    }


    return (
        <div className="font-medium h-[100vh]">
            <header className="flex justify-between items-center p-4 border-b-2 border-dark-white mb-[60px]">
                <Link to="/dashboard/home"><CloseBtn /></Link>  {/* will be modified later */}
                <p className="text-xl -mr-3">Upload Trade License</p>
                <div className="mr-3">
                    Step <strong>2</strong> out of <strong>6</strong>
                </div>
            </header>
            <main className="m-auto">
                <div className="block justify-center content-center text-center">
                    <embed src={tradeLicenseForPreview} id="form-file-upload" height="650"></embed>
                    <br />
                    <p className="mt-3 text-xl text-[#999999] font-medium">
                        Wrong File? Drag & Drop Trade License Here
                        <Link to={'/dashboard/business-details-step-one'} className="text-[#158560] ml-2 cursor-pointer">
                            Again
                            <img className="inline-block ml-1" src={ArrowLeft} alt="Arrow Left"></img>
                        </Link>
                    </p>
                    <p className="text-lg font-medium"> or </p>
                    <p onClick={uploadPdf} className="upload-kyb-button mt-1 cursor-pointer" style={{ backgroundColor: "#00C52A", width: "160px" }} >Upload Now</p>

                </div>
            </main>
        </div>
    );

};

export default BusinessStep2;