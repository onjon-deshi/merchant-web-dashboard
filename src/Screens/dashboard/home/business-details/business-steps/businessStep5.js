
import React, {useEffect, useState, useRef} from "react";
import {ReactComponent as CloseBtn} from '../../../../../assets/icons/close.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "../../../../../components/FileUpload/style.css";
import FileUploadIcon from "../../../../../assets/icons/UploadFileIcon.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BusinessStep5 = () => {

    const [businessLogo, setBusinessLogo] = useState([]);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    
    let navigate = useNavigate();
    let {state} = useLocation();

    

    useEffect(()=>{

        console.log(state);

        // if (state === null || state.businessLogo === undefined || state.businessLogo === "" || state.businessLogo === null) {
        //     navigate("/dashboard/business-details-step-five");
        //     return;
        // }

        if(businessLogo.length === 0) {
            return;
        }

        navigate("/dashboard/business-details-step-six", {
            state: {
                businessLogo: businessLogo[0].src
            }
        });

    },[businessLogo]);


    function handleFile(files) {
        var index = files.length-1;

        if( !files[index]["type"].includes("image/")) {
            toast.error("Invalid File Type. Please upload valid PDF File.");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            setBusinessLogo(() => [
                { id: 0, src: e.target.result }
            ]);
        };

        reader.readAsDataURL(files[index]); 
        return files[index]; 
    }

    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    };


    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    };


    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    
    return (
        <div className="font-medium h-[100vh] w-[100vw]">
            <header className="flex justify-between items-center p-4 border-b-2 border-dark-white mb-[60px]">
                <Link to="/dashboard/home"><CloseBtn /></Link> {/*will be modified Later */}
                <p className="text-xl -mr-3">Upload Business Logo</p>
                <div className="mr-3">
                    Step <strong>5</strong> out of <strong>6</strong>
                </div>
            </header>
            <main className="m-auto">
                <div className="flex justify-center ">
                    <ToastContainer></ToastContainer>
                    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                        <input ref={inputRef} type="file" style={{display: "none"}} multiple={false} onChange={handleChange} />
                        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                            <div>
                                <img src={FileUploadIcon} alt="Upload Business Logo" style={{maxHeight:"230px", display: "block", margin: "0 auto 20px"}} />
                                <p className="text-xl text-[#999999] font-medium">Drag & Drop Business Logo Here</p>
                                <p> or </p>
                                <button className="upload-kyb-button mt-2" onClick={onButtonClick}>Choose file</button>
                                <p className="mt-5 text-base text-[#999999]">File format should be .jpg/.jpeg/.png/.webp. File size should be <br/>minimum 500px X 500px and maximum 4000px X 4000px</p>
                            </div>
                        </label>


                        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
                    </form>

                </div>
            </main>
        </div>
    );
};

export default BusinessStep5;