import React, { useRef, useState } from 'react';
import { ReactComponent as CloseBtn } from '../../../assets/icons/close.svg'
import Button from './components/Button';
import { Link } from "react-router-dom";

const UploadNidStepOne = () => {
    const fileInput = useRef();
    const [file, setFile] = useState();

    const selectFile = () => {
        fileInput.current.click();
    }

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(file);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="font-medium pb-[60px]">
            <header className="flex justify-between items-center p-4 border-b-2 border-dark-white mb-[60px]">
                <Link to="/dashboard/home"><CloseBtn /></Link>
                <p className="text-xl ml-80">Upload Owner’s NID</p>
                <div>
                    
                </div>
            </header>
            <main className="max-w-2xl m-auto">
                <div className="flex justify-center ">
                    NID UPLOAD DIV
                </div>
            </main>
        </div>
    );
};

export default UploadNidStepOne;