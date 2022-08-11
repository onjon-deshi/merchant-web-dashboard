import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as CloseBtn } from './../../../../assets/icons/close.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';


import "./../../../../components/FileUpload/style.css";
import FileUploadIcon from "./../../../../assets/icons/UploadFileIcon.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from './components/Button';
import BlackButton from "../../../../components/BlackButton";
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus.svg'


const BusinessDetails = () => {

    // const [pdf, setPdf] = useState([]);
    // const [dragActive, setDragActive] = useState(false);
    // const inputRef = useRef(null);

    // let navigate = useNavigate();

    // useEffect(()=>{
    //     window.history.replaceState({}, "");
    //     if(pdf.length === 0) {
    //         return;
    //     }

    //     navigate("/dashboard/verify-identity-step-two", {
    //         state: {
    //             pdf: pdf[0].src
    //         }
    //     });

    // },[pdf]);


    // function handleFile(files) {
    //     var index = files.length-1;

    //     if(files[index]["type"] !== "application/pdf") {
    //         toast.error("Invalid File Type. Please upload valid PDF File.");
    //         return;
    //     }

    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //         setPdf(() => [
    //             { id: 0, src: e.target.result }
    //         ]);
    //     };

    //     reader.readAsDataURL(files[index]); 
    //     return files[index]; 
    // }

    // // handle drag events
    // const handleDrag = function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if (e.type === "dragenter" || e.type === "dragover") {
    //         setDragActive(true);
    //     } else if (e.type === "dragleave") {
    //         setDragActive(false);
    //     }
    // };

    // // triggers when file is dropped
    // const handleDrop = function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setDragActive(false);
    //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    //         handleFile(e.dataTransfer.files);
    //     }
    // };


    // // triggers when file is with click
    // const handleChange = function(e) {
    //     e.preventDefault();
    //     if (e.target.files && e.target.files[0]) {
    //         handleFile(e.target.files);
    //     }
    // };


    // // triggers the input when the button is clicked
    // const onButtonClick = () => {
    //     inputRef.current.click();
    // };


    const [inputs, setInputs] = useState({});
    const [isBusinessNameChecked, setIsBusinessNameChecked] = useState(false);
    const [isAddressChecked, setIsAddressChecked] = useState(false);
    const [division, setDivision] = useState();
    const [district, setDistrict] = useState();
    const [thanaOrUpazilla, setThanaOrUpazilla] = useState();
    const [businessBank, setBusinessBank] = useState();
    const [businessBranch, setBusinessBranch] = useState();
    const [transactionBank, setTransactionBank] = useState();
    const [transactionBranch, setTransactionBranch] = useState();


    let navigate = useNavigate();
    const { state } = useLocation();


    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleBusinessNameCheckbox = () => {
        setIsBusinessNameChecked(!isBusinessNameChecked);
    }

    const handleAddressCheckbox = () => {
        setIsAddressChecked(!isAddressChecked);
    }


    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        console.log(`isBusinessNameChecked ${isBusinessNameChecked}`);
        console.log(`isAddressChecked: ${isAddressChecked}`);
        console.log(`Division: ${division}`);
        console.log(`District: ${district}`);
        console.log(`ThanaOrUpazilla: ${thanaOrUpazilla}`);
        console.log(`Business Bank: ${businessBank}`);
        console.log(`Business Branch: ${businessBranch}`);
        console.log(`Transaction Bank: ${transactionBank}`);
        console.log(`Transaction Branch: ${transactionBranch}`);

        navigate("/dashboard/home", {
            state: {
                message: "Verified Business Details successfully."
            }
        });
    }

    // alvi code start
    const fileInput = useRef();
    const [file, setFile] = useState();

    const selectFile = () => {
        fileInput.current.click();
    }

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(file);
    }
    //alvi code ends
    return (
        <div className="font-medium h-[100vh] w-[100vw]">
            <div className="font-medium pb-[60px]">
                <header className="flex justify-between items-center p-4 border-b-2 border-dark-white mb-[60px]">
                    <Link to="/dashboard/home"><CloseBtn /></Link>
                    <p className="text-xl text-black ">Provide Business Details</p>
                    <div>
                    </div>
                </header>
                <main className="max-w-2xl m-auto">
                    <div className="flex justify-center ">
                        <form className="max-w-2xl w-full" onSubmit={onSubmit}>
                            <h3 className="text-xl mb-[15px]">Doing Business Name as</h3>
                            <div>
                                <input type="text" name="businessName" value = {inputs.businessName || ""} onChange={handleInputs} placeholder="Enter Doing Business Name" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required/>
                            </div>

                            <div className="flex mb-[30px]">
                                <div className="mr-[30px]">
                                    <input type="checkbox" name="businessCheck" value="businessCheck" checked={isBusinessNameChecked} onChange={handleBusinessNameCheckbox} id="" className="mr-2.5 text-primary focus:ring-primary border-dark-white" required/>
                                    <span className="text-secondary">Doing business name same as Trade License business name</span>
                                </div>
                            </div>


                            <h3 className="text-xl mb-[15px]">Present Address</h3>
                            <div>
                                <input type="text" name="presentAddress" value={inputs.presentAddress || ""} onChange={handleInputs}  placeholder="Present Address" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required/>
                            </div>

                            <div className="flex justify-between mb-[15px]" >
                                <select  id="divsions" defaultValue="Divisions" onChange={(e) => setDivision(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
                                    <option value=""  className="p-5 ">Division</option>
                                    <option value="dhaka" className="text-black">Dhaka</option>
                                    <option value="Khulna" className="text-black">Khulna</option>
                                    <option value="barisal" className="text-black">Barisal</option>
                                    <option value="shylet" className="text-black">Shylet</option>
                                    <option value="rangpur" className="text-black">Rangpur</option>
                                </select>

                                <select name="" id="districts" defaultValue="Districts/Cities" onChange={(e) => setDistrict(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
                                    <option value=""  className="p-5 ">District/City</option>
                                    <option value="faridpur" className="text-black">Faridpur</option>
                                    <option value="comilla" className="text-black">Comilla</option>
                                    <option value="Noakhali" className="text-black">Noakhali</option>
                                    <option value="Chandpur" className="text-black">Chandpur</option>
                                </select>
                            </div>
                           

                            <div className="flex justify-between mb-[15px]" >
                                <select name="" id="thanas" defaultValue="Thanas/Upazillas" onChange={(e) => setThanaOrUpazilla(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
                                    <option value=""  className="p-5">Thana/Upazilla</option>
                                    <option value="savar" className="text-black">Savar</option>
                                    <option value="boalmari" className="text-black">Boalmari</option>
                                    <option value="vanga" className="text-black">Vanga</option>
                                    <option value="kashiani" className="text-black">Kashiani</option>
                                    <option value="khoksa" className="text-black">Khoksa</option>
                                </select>
                                <input type="text" name="postcode" value={inputs.postcode || ""} onChange={handleInputs} placeholder="Post Code" className="w-[49%] rounded border-solid border border-dark-white placeholder:text-ash" required/>
                            </div>
                           

                            <div className="flex mb-[30px]">
                                <div className="mr-[30px]">
                                    <input type="checkbox" name="addressCheck" value="addressCheck" checked={isAddressChecked} onChange={handleAddressCheckbox} id="" className="mr-2.5 text-primary focus:ring-primary border-dark-white" required/>
                                    <span className="text-secondary">Present address same as provided in trade license</span>
                                </div>
                            </div>
                            

                            <h3 className="text-xl mb-[15px]">Bank Details</h3>
                            <div>
                                <input type="text" name="businessAccountName" value={inputs.businessAccountName || ""} onChange={handleInputs} placeholder="Your Business Account Name" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required/>
                            </div>

                            <div className="flex justify-between mb-[15px]" >
                                <select name="" id="businessbanks" defaultValue="Bank Name" onChange={(e) => setBusinessBank(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
                                    <option value=""  className="p-5">Bank Name</option>
                                    <option value="National Bank Ltd." className="text-black">National Bank Ltd.</option>
                                    <option value="Islami Bank Ltd." className="text-black">Islami Bank Ltd.</option>
                                    <option value="Eastern Bank Ltd." className="text-black">Eastern Bank Ltd.</option>
                                    <option value="Sonali Bank Ltd." className="text-black">Sonali Bank Ltd.</option>
                                    <option value="Brac Bank Ltd." className="text-black">Brac Bank Ltd.</option>                                 
                                </select>

                                <select name="" id="businessBranches" defaultValue="Branch Name" onChange={(e) => setBusinessBranch(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
                                    <option value=""  className="p-5"> Branch Name </option>
                                    <option value="Bonani" className="text-black">Bonani</option>
                                    <option value="Gulshan" className="text-black">Gulshan</option>
                                    <option value="Mohakhali" className="text-black">Mohakhali</option>
                                    <option value="Mirpur" className="text-black">Mirpur</option>
                                    <option value="Savar" className="text-black">Savar</option>

                                </select>
                            </div>
                            <div>
                                <input type="text" name="businessBankAccountNumber" value={inputs.businessBankAccountNumber || ""} onChange={handleInputs} placeholder="Account Number" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required/>
                            </div>


                            <h3 className="text-xl mt-[15px] mb-[15px]">Transaction Profile</h3>
                            <div>
                                <input type="text" name="businessNature" value={inputs.businessNature || ""} onChange={handleInputs} placeholder="Nature of Business" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required/>
                            </div>

                            <div className="flex justify-between mb-[15px]" >
                                <select name="" id="transactionBanks" defaultValue="Bank Name" onChange={(e) => setTransactionBank(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
                                    <option value=""  className=" p-5">Bank Name</option>
                                    <option value="National Bank Ltd." className="text-black">National Bank Ltd.</option>
                                    <option value="Islami Bank Ltd." className="text-black">Islami Bank Ltd.</option>
                                    <option value="Eastern Bank Ltd." className="text-black">Eastern Bank Ltd.</option>
                                    <option value="Sonali Bank Ltd." className="text-black">Sonali Bank Ltd.</option>
                                    <option value="Brac Bank Ltd." className="text-black">Brac Bank Ltd.</option>                                 
                                </select>

                                <select name="" id="transactionBranches" defaultValue="Branch Name" onChange={(e) => setTransactionBranch(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
                                    <option value=""  className="p-5 ">Branch Name</option>
                                    <option value="Bonani" className="text-black">Bonani</option>
                                    <option value="Gulshan" className="text-black">Gulshan</option>
                                    <option value="Mohakhali" className="text-black">Mohakhali</option>
                                    <option value="Mirpur" className="text-black">Mirpur</option>
                                    <option value="Savar" className="text-black">Savar</option>
                                </select>
                            </div>
                            <div className="mb-[15px]">
                                <input type="text" name="businessNatureAccountNumber" value={inputs.businessNatureAccountNumber || ""} onChange={handleInputs} placeholder="Account Number" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required/>
                            </div>


                           
                            {/* Not Clear to me /> */}
                            <input type="file" className="hidden" ref={fileInput} onChange={handleChange} />
                            <BlackButton name="Add Category" icon={<PlusIcon />} onClick={selectFile} />

                            <Button type="submit" name="Submit" onClick={onSubmit} bg_clr="primary" margin="300px" font_color="white"/>
                            
                        </form>
                    </div>
                </main>
            </div>


        </div>

    );
};

export default BusinessDetails;