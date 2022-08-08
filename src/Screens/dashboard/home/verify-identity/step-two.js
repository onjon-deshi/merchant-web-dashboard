
import React, {useEffect, useState} from "react";
import { ReactComponent as CloseBtn } from './../../../../assets/icons/close.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import "./../../../../components/FileUpload/style.css";

import PDFViewer from 'pdf-viewer-reactjs';

const StepTwo = () => {

    let [pdf,setPdf] = useState([]);

    let navigate = useNavigate();
    const { state } = useLocation();

    
    useEffect(()=>{
        if (state === null || state.pdf === undefined || state.pdf === "" || state.pdf === null) {
            navigate("/dashboard/verify-identity-step-one");
            return;
        }

        setPdf(state.pdf);
    },[]);


    return (
        <div className="font-medium h-[100vh] w-[100vw]">
            <header className="flex justify-between items-center p-4 border-b-2 border-dark-white mb-[60px]">
                <Link to="/dashboard/home"><CloseBtn /></Link>
                <p className="text-xl -mr-3">Upload Owner’s NID</p>
                <div className="mr-3">
                    Step <strong>2</strong> out of <strong>2</strong>
                </div>
            </header>
            <main className="m-auto">
                <div className="flex justify-center">
                <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        />
                    {/* <iframe title="NID Preview" id="form-file-upload" style={{maxWidth: "750px"}} src={pdf}></iframe> */}
                </div>
            </main>
        </div>
    );

};

export default StepTwo;