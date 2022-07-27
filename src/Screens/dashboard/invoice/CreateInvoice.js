import React, { useRef, useState } from 'react';
import { ReactComponent as CloseBtn } from '../../../assets/icons/close.svg'
import Button from './components/Button';
import { Link } from "react-router-dom";
import BlackButton from '../../../components/BlackButton';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg'

const Invoice = () => {
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
                <p className="text-xl ml-80">New Invoice</p>
                <div>
                    <Button name="Show Preview" />
                    <Button name="Save as Draft" margin="10px" />
                    <Button name="Send" bg_clr="primary" font_color="white" />
                </div>
            </header>
            <main className="max-w-2xl m-auto">
                <div className="flex justify-center ">
                    <form className="max-w-2xl w-full" onSubmit={onSubmit}>
                        <h3 className="text-xl mb-[15px]">Customer Information</h3>
                        <div>
                            <input type="text" name="customerName" placeholder="Find or add customer name" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" />
                        </div>
                        <div>
                            <input type="tel" name="phoneNumber" placeholder="Customer phone number" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Customer email" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" />
                        </div>
                        <p className="font-normal text-ash">Account Type: <span className="font-medium text-black">Consumer</span></p>
                        <hr className="my-[30px]" />


                        <h3 className="text-xl mb-[15px]">Item/Service Details</h3>
                        <table className="w-full">
                            <tbody>
                                <tr className="bg-neutral-100">
                                    <th className="py-2.5 text-start font-medium pl-5">Product Name</th>
                                    <th className="font-medium">Qty</th>
                                    <th className="font-medium">Price</th>
                                    <th className="font-medium">Total</th>
                                </tr>
                                <tr className="border-x border-dark-white border-b border-dark-white">
                                    <td className="py-2.5 px-5">
                                        <p>Miniket Rice Premium </p>
                                        <span className="text-secondary font-normal">5 KG Pack</span>
                                    </td>
                                    <td className="text-center text-secondary">1</td>
                                    <td className="text-center">৳ 305.00</td>
                                    <td className="text-center">৳ 305.00</td>
                                </tr>
                                <tr className="border-x border-dark-white border-b border-dark-white">
                                    <td className="py-2.5 px-5">
                                        <p>Local Onion</p>
                                        <span className="text-secondary font-normal">1 KG Pack</span>
                                    </td>
                                    <td className="text-center text-secondary">5</td>
                                    <td className="text-center">৳ 70.00</td>
                                    <td className="text-center">৳ 350.00</td>
                                </tr>
                                <tr className="border-x border-dark-white border-b border-dark-white">
                                    <td className="py-2.5 px-5">
                                        <p>Vim Dishwashing Bar</p>
                                        <span className="text-secondary font-normal">1 KG Pack</span>
                                    </td>
                                    <td className="text-center text-secondary">2</td>
                                    <td className="text-center">৳ 29.00</td>
                                    <td className="text-center">৳ 58.00</td>
                                </tr>
                                {/* <tr>
                                    <td colSpan="3" style={{ paddingLeft: "20px", paddingRight: "0px", borderSpacing: "0" }}>
                                        <div style={{ borderBottom: "2px solid red", paddingBlock: "5px" }}>
                                            Sub-Total
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <div style={{ borderBottom: "2px solid red", paddingBlock: "5px" }}>
                                            ৳ 713.00
                                        </div>
                                    </td>
                                </tr> */}

                                <tr>
                                    <td colSpan={4} className="border-x border-dark-white">
                                        <div className="flex justify-between border-b border-neutral-100 py-2.5 ml-4 mr-7  ">
                                            <p>Sub-Total</p>
                                            <p>৳ 713.00</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="border-x border-dark-white">
                                        <div className="flex justify-between border-b border-neutral-100 py-2.5 ml-4 mr-7  ">
                                            <p>Discount</p>
                                            <p>৳ 0</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="border-x border-dark-white">
                                        <div className="flex justify-between border-b border-neutral-100 py-2.5 ml-4 mr-7  ">
                                            <p>Delivery Charge</p>
                                            <p>৳ 0</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className="border-x border-dark-white">
                                        <div className="flex justify-between border-neutral-100 py-2.5 ml-4 mr-7  ">
                                            <p>Tax</p>
                                            <p>৳ 0</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-neutral-100">
                                    <td colSpan={4}>
                                        <div className="flex justify-between border-neutral-100 py-2.5 ml-4 mr-7  ">
                                            <p>Total</p>
                                            <p>৳ 713.00</p>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>


                        {/* <div className="border-x border-dark-white w-full py-2.5 px-5">
                            <div className="flex justify-between">
                                <p>Sub-Total</p>
                                <p>৳ 713.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Discount</p>
                                <p>৳ 0</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Delivery Charge</p>
                                <p>৳ 0</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Tax</p>
                                <p>৳ 0</p>
                            </div>
                        </div> */}


                        <hr className="my-[30px]" />
                        <h3 className="text-xl mb-[15px]">Sending Method</h3>


                        <div className="flex">
                            <div className="mr-[30px]">
                                <input type="checkbox" name="" id="" className="mr-2.5 text-primary focus:ring-primary border-dark-white" />
                                <span className="text-secondary">Deshi</span>
                            </div>
                            <div className="mr-[30px]">
                                <input type="checkbox" name="" id="" className="mr-2.5 text-primary  focus:ring-primary border-dark-white" />
                                <span className="text-secondary">SMS</span>
                            </div>
                            <div className="mr-[30px]">
                                <input type="checkbox" name="" id="" className="mr-2.5 text-primary  focus:ring-primary border-dark-white" />
                                <span className="text-secondary">Email</span>
                            </div>
                        </div>
                        <hr className="my-[30px]" />


                        <h3 className="text-xl mb-[15px]">Remarks</h3>
                        <div>
                            <input type="text" name="invoiceTitle" placeholder="Invoice title" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" />
                        </div>
                        <div>
                            <input type="text" name="invoiceId" placeholder="Custom invoice ID" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" />
                        </div>
                        <div>
                            <textarea type="text" name="note" placeholder="Write a note" className="w-full mb-2.5 rounded border-solid border border-dark-white placeholder:text-ash" />
                        </div>
                        {/* <img src={file} className="mb-4" /> */}
                        <input type="file" className="hidden" ref={fileInput} onChange={handleChange} />
                        <BlackButton name="Add Attachment" icon={<PlusIcon />} onClick={selectFile} />
                        <hr className="my-[30px]" />

                        <h3 className="text-xl mb-[15px]">Set a Reminder</h3>
                        <select name="setReminder" id="reminder" className="w-full rounded border-solid border border-dark-white">
                            <option value="twelve" className="p-5 ">12 hours before due</option>
                            <option value="twentyFour">24 hours before due</option>
                            <option value="FortyEight">48 hours before due</option>
                            <option value="seventyTwo">72 hours before due</option>
                            <option value="audi" className="text-primary">Set hours/day before expiring</option>
                        </select>
                        <hr className="my-[30px]" />

                        <h3 className="text-xl mb-[15px]">Set a Schedule</h3>
                        <div className="flex justify-between">
                            {/* <input placeholder="Type Date" type="text" id="date" /> */}
                            <input type="date" name="" id="date" className="rounded border-solid border border-dark-white w-[48%] placeholder:text-ash" placeholder="Pick a date for schedule send" />
                            <input type="time" className="rounded border-solid border border-dark-white w-[48%] placeholder:text-ash" />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Invoice;