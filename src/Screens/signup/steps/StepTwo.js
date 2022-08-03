// import React from 'react';

// const StepTwo = () => {
//     return (
//         <div className="w-3/5">
//             <ToastContainer />
//             <h1 className="font-bold text-4xl mb-7">{title}</h1>
//             <div className="bg-neutral-100 px-8 py-10 text-secondary rounded-lg">
//                 <p className="mb-6">{subtitle} <span className="font-bold">{otpMobileNumber}</span></p>
//                 <form onSubmit={onSubmit}>
//                     <div className="flex items-center space-x-2 container mb-4">
//                         {otp.map((data, index) => {
//                             return (
//                                 <input
//                                     type="text"
//                                     name="otp[]"
//                                     maxLength="1"
//                                     key={index}
//                                     value={data}
//                                     className="w-[45.17px] h-[60px] border border-solid border-[#EEEEEE] rounded-lg text-center"
//                                     onChange={(e) => {
//                                         handleChange(e.target, index);
//                                     }}
//                                     onFocus={(e) => e.target.select()}
//                                 />
//                             );
//                         })}
//                     </div>
//                     <Button name="Verify OTP" />
//                     {location.pathname === "/otp"
//                         ? <p> Didn’t get the code yet? <button type="button" onClick={otpResend} className="font-bold text-primary">Send Again <ImArrowRight2 className='inline ml-1' /></button></p>
//                         : <>
//                             <p className="text-primary font-bold cursor-pointer mb-2.5">Didn’t get the code yet?</p>
//                             <p>Don’t have any account? <Link to="#" className="font-bold text-primary ">Signup Instead <ImArrowRight2 className='inline ml-1' /></Link></p>
//                         </>
//                     }
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default StepTwo;