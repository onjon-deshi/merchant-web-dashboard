import React, { useState, useRef } from "react";
import { ReactComponent as CloseBtn } from './../../../../assets/icons/close.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import BlackButton from "../../../../components/BlackButton";


const BusinessDetails = () => {

	const [inputs, setInputs] = useState({});
	const [isBusinessNameChecked, setIsBusinessNameChecked] = useState(false);
	const [isAddressChecked, setIsAddressChecked] = useState(false);

	const [division, setDivision] = useState();
	const [district, setDistrict] = useState();
	const [thanaOrUpazilla, setThanaOrUpazilla] = useState();
	const [businessBank, setBusinessBank] = useState();
	const [businessBranch, setBusinessBranch] = useState();
	const [natureOfBusiness, setNatureOfBusiness] = useState();
	const [netAssetRange, setNetAssetRange] = useState();
	const [estMonthlyTransaction, setEstMonthlyTransaction] = useState();
	const [noOfMonthlyTransaction, setNoOfMonthlyTransaction] = useState();
	const [estMaxAmountInSingleTransaction, setEstMaxAmountInSingleTransaction] = useState();

	let navigate = useNavigate();
	const { state } = useLocation();


	const handleInputs = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}

	const handleBusinessNameCheckbox = () => {
		setIsBusinessNameChecked(!isBusinessNameChecked);
	}

	const handleAddressCheckbox = () => {
		setIsAddressChecked(!isAddressChecked);
	}



	const onSubmit = (e) => {
		e.preventDefault();
		navigate("/dashboard/business-details-step-one", {
			state: {
				message: "Verified Business Details successfully."
			}
		});
	}
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
								<input type="text" name="businessName" value={inputs.businessName || ""} onChange={handleInputs} placeholder="Enter Doing Business Name" disabled={isBusinessNameChecked}className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required />
							</div>

							<div className="flex mb-[30px]">
								<div className="mr-[30px]">
									<input type="checkbox" name="businessCheck" value="businessCheck" checked={isBusinessNameChecked} onChange={handleBusinessNameCheckbox} id="" className="mr-2.5 text-primary focus:ring-primary border-dark-white" required />
									<span className="text-secondary">Doing business name same as Trade License business name</span>
								</div>
							</div>


							<h3 className="text-xl mb-[15px]">Present Address</h3>
							<div>
								<input type="text" name="presentAddress" value={inputs.presentAddress || ""} onChange={handleInputs} placeholder="Present Address" disabled={isAddressChecked} className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required />
							</div>

							<div className="flex justify-between mb-[15px]" >
								<select id="divsions" defaultValue="Divisions" disabled={isAddressChecked} onChange={(e) => setDivision(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className="p-5 ">Division</option>
									<option value="dhaka" className="text-black">Dhaka</option>
									<option value="Khulna" className="text-black">Khulna</option>
									<option value="barisal" className="text-black">Barisal</option>
									<option value="shylet" className="text-black">Shylet</option>
									<option value="rangpur" className="text-black">Rangpur</option>
								</select>

								<select name="" id="districts" defaultValue="Districts/Cities" disabled={isAddressChecked} onChange={(e) => setDistrict(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className="p-5 ">District/City</option>
									<option value="faridpur" className="text-black">Faridpur</option>
									<option value="comilla" className="text-black">Comilla</option>
									<option value="Noakhali" className="text-black">Noakhali</option>
									<option value="Chandpur" className="text-black">Chandpur</option>
								</select>
							</div>


							<div className="flex justify-between mb-[15px]" >
								<select name="" id="thanas" defaultValue="Thanas/Upazillas" disabled={isAddressChecked} onChange={(e) => setThanaOrUpazilla(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className="p-5">Thana/Upazilla</option>
									<option value="savar" className="text-black">Savar</option>
									<option value="boalmari" className="text-black">Boalmari</option>
									<option value="vanga" className="text-black">Vanga</option>
									<option value="kashiani" className="text-black">Kashiani</option>
									<option value="khoksa" className="text-black">Khoksa</option>
								</select>
								<input type="text" name="postcode" value={inputs.postcode || ""} disabled={isAddressChecked} onChange={handleInputs} placeholder="Post Code" className="w-[49%] rounded border-solid border border-dark-white placeholder:text-ash" required />
							</div>


							<div className="flex mb-[30px]">
								<div className="mr-[30px]">
									<input type="checkbox" name="addressCheck" value="addressCheck" checked={isAddressChecked} onChange={handleAddressCheckbox} id="" className="mr-2.5 text-primary focus:ring-primary border-dark-white" required />
									<span className="text-secondary">Present address same as provided in trade license</span>
								</div>
							</div>


							<h3 className="text-xl mb-[15px]">Bank Details</h3>
							<div>
								<input type="text" name="businessAccountName" value={inputs.businessAccountName || ""} onChange={handleInputs} placeholder="Your Business Account Name" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required />
							</div>

							<div className="flex justify-between mb-[15px]" >
								<select name="" id="businessbanks" defaultValue="Bank Name" onChange={(e) => setBusinessBank(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className="p-5">Bank Name</option>
									<option value="National Bank Ltd." className="text-black">National Bank Ltd.</option>
									<option value="Islami Bank Ltd." className="text-black">Islami Bank Ltd.</option>
									<option value="Eastern Bank Ltd." className="text-black">Eastern Bank Ltd.</option>
									<option value="Sonali Bank Ltd." className="text-black">Sonali Bank Ltd.</option>
									<option value="Brac Bank Ltd." className="text-black">Brac Bank Ltd.</option>
								</select>

								<select name="" id="businessBranches" defaultValue="Branch Name" onChange={(e) => setBusinessBranch(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className="p-5"> Branch Name </option>
									<option value="Bonani" className="text-black">Bonani</option>
									<option value="Gulshan" className="text-black">Gulshan</option>
									<option value="Mohakhali" className="text-black">Mohakhali</option>
									<option value="Mirpur" className="text-black">Mirpur</option>
									<option value="Savar" className="text-black">Savar</option>

								</select>
							</div>
							<div>
								<input type="text" name="businessBankAccountNumber" value={inputs.businessBankAccountNumber || ""} onChange={handleInputs} placeholder="Account Number" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" required />
							</div>


							<h3 className="text-xl mt-[15px] mb-[15px]">Transaction Profile</h3>
				

							<select name="" id="natureOfBusiness" defaultValue="Nature of Business" onChange={(e) => setNatureOfBusiness(e.target.value)} className="w-full rounded border-solid border border-dark-white mb-[15px]" required>
								<option value="" className="p-5 ">Nature of Business</option>
								<option value="Retails Trade" className="text-black">Retails Trade</option>
								<option value="Lifestyle" className="text-black">Lifestyle</option>
								<option value="Electronics & Household" className="text-black">Electronics & Household</option>
								<option value="Wholesale" className="text-black">Wholesale</option>
								<option value="Tour & Travels" className="text-black">Tour & Travels</option>
							</select>

							<div className="flex justify-between mb-[15px]" >
								<select name="" id="netAssetRange" defaultValue="Net Asset Range" onChange={(e) => setNetAssetRange(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className=" p-5">Net Asset Range</option>
									<option value="1-50Lakh" className="text-black">1-50Lakh</option>
									<option value="50lakh-2crore" className="text-black">50lakh-2crore</option>
									<option value="2crore+" className="text-black">2crore+</option>
								</select>

								<select name="" id="estMonthlyTransaction" defaultValue="Est. Monthly Transaction" onChange={(e) => setEstMonthlyTransaction(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className="p-5 ">Est. Monthly Transaction</option>
									<option value="0-10Lakh" className="text-black">0-10Lakh</option>
									<option value="10-50Lakh" className="text-black">10-50Lakh</option>
									<option value="50Lakh+" className="text-black">50Lakh+</option>
								</select>
							</div>


							<div className="flex justify-between mb-[15px]" >
								<select name="" id="estNoOfMonthlyTransaction" defaultValue="Net Asset Range" onChange={(e) => setNoOfMonthlyTransaction(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white" required>
									<option value="" className=" p-5">Est. No. of Transaction Per Month</option>
									<option value="0-100" className="text-black">0-100</option>
									<option value="101-250" className="text-black">101-250</option>
									<option value="250+" className="text-black">250+</option>
								</select>

								<select name="" id="estMaxAmountInSingleTransaction" defaultValue="Est. Highest Amount in a Single Transaction" onChange={(e) => setEstMaxAmountInSingleTransaction(e.target.value)} className="w-[49%] rounded border-solid border border-dark-white " required>
									<option value="" data-limit="10" className="">Est. Highest Amount in a Single Transaction</option>
									<option value="0-10Lakh" className="text-black">0-10Lakh</option>
									<option value="10-50Lakh" className="text-black">10-50Lakh</option>
									<option value="50Lakh+" className="text-black">50Lakh+</option>
								</select>
							</div>
					
							<BlackButton  onClick={onSubmit} name="Next"  />

						</form>
					</div>
				</main>
			</div>


		</div>

	);
};

export default BusinessDetails;