import DonutChart from "../../../components/charts/DonutChart";
import $ from "jquery";
import Navbar from '../../../components/Navbar';
import Sidebar from "../../../components/Sidebar";

var pageName = "home";


// Refresh Icon Click Event
const refreshIconClick = (event) => {
    console.log("Clicked Refresh Button....");
}


const home = () => {
    return (
        <div className="body w-full bg-white font-medium">

            {/* TOP HEADER */}
            <div className="w-full border-b-2 flex justify-between">
                <Navbar name={pageName} />
            </div>


            {/* MAIN BODY */}
            <div className="flex w-full h-full fixed bg-white">


                {/* LEFT SIDE BAR */}
                <Sidebar name={pageName} />


                {/* MAIN BODY CONTENT */}
                <div className="custom-container w-full float-left px-8 py-10 flex font-montserrat">

                    <div className="custom-container-left custom-scroll-auto float-left w-4/5 pb-10 pr-3 text-justify">

                        {/** First Div --- SUMMARY */}
                        <div className="box-full w-full h-[159px] bg-[#F5F5F5] text-[#222222] p-6 px-8 text-justify rounded-[5px]">
                            <p className="font-medium text-base px-4 pb-4 pl-0 pr-0">
                                Account No. MRA 000194

                                <span onClick={refreshIconClick} className="refresh-icon-svg float-right cursor-pointer">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12C2 17.52 6.48 22 12 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
                                    </svg>
                                </span>
                            </p>
                            <hr style={{ "border": "1px solid #DDDDDD", "borderRadius": "5px" }} />

                            <div className="w-2/3 float-left">
                                <p className="font-normal text-base px-4 pb-0 pl-0 pt-4 mb-2.5">Account Balance</p>
                                <h2 style={{ "fontSize": "24px", "fontWeight": "600", "marginTop": "-4px" }} className="font-bold px-4 pl-0 pt-0">0.00 BDT</h2>
                            </div>

                            <div className="w-1/3 h-[74px] float-left text-right pt-4">
                                <a href="#" className="upload-kyb-button text-right">Upload KYB</a>
                            </div>


                        </div>


                        <h6 className="mt-7 text-xl font-medium">Here’s your business at a glance</h6>
                        <h5 className="pt-3 pb-2 text-lg ">Today</h5>


                        <div className="w-full flex overflow-hidden text-left ">

                            <div className="box hover-black-green w-[32%] h-[200px] mr-[1%] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] pt-10 pl-5 pr-5">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2513_20291)">
                                        <path d="M27.7657 13C28.2813 13.2012 28.4347 13.5865 28.4335 14.124C28.4228 21.4105 28.4259 28.697 28.4259 35.9835C28.4259 36.5398 28.1857 36.8824 27.728 36.9723C27.6292 36.9918 27.5261 36.9912 27.4249 36.9918C25.8077 36.9931 24.1911 36.9931 22.5738 36.9925C21.8985 36.9918 21.5741 36.6643 21.5741 35.9829C21.5735 28.6964 21.5772 21.4099 21.5665 14.1234C21.5653 13.5853 21.7187 13.2005 22.2343 13C24.0779 13 25.9221 13 27.7657 13Z" fill="#DDDDDD" />
                                        <path d="M13 23.0757C13.2157 22.5577 13.6162 22.4069 14.157 22.4144C15.7182 22.4358 17.2808 22.4213 18.8426 22.422C19.5268 22.422 19.8544 22.7438 19.8544 23.4196C19.855 27.612 19.855 31.805 19.8544 35.9973C19.8544 36.665 19.528 36.9918 18.8647 36.9925C17.287 36.9937 15.7094 36.9805 14.1324 37C13.5992 37.0063 13.2062 36.8529 13.0006 36.3387C13 31.9175 13 27.4963 13 23.0757Z" fill="#DDDDDD" />
                                        <path d="M30.1456 28.411C30.1456 25.9122 30.1588 23.4133 30.1375 20.9145C30.1305 20.1325 30.599 19.8364 31.2095 19.8433C32.7947 19.8622 34.3805 19.8496 35.9663 19.8502C36.6718 19.8502 36.9994 20.1771 36.9994 20.8799C36.9994 25.909 36.9994 30.9381 36.9994 35.9665C36.9994 36.67 36.6743 36.9925 35.9663 36.9931C34.3648 36.9937 32.7639 36.9937 31.1624 36.9931C30.4644 36.9931 30.1456 36.675 30.145 35.9778C30.145 33.4551 30.1456 30.9331 30.1456 28.411Z" fill="#DDDDDD" />
                                    </g>
                                    <rect x="0.5" y="0.5" width="49" height="49" rx="4.5" stroke="#DDDDDD" />
                                    <defs>
                                        <clipPath id="clip0_2513_20291">
                                            <rect width="24" height="24" fill="white" transform="translate(13 13)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <a href="#" className="block pt-2 pb-1 text-base font-medium">
                                    Account Balance
                                    <svg className="ml-1 display-revert" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                <h3 style={{ "fontSize": "22px" }} className="font-semibold  ">৳ 5,000.00</h3>

                            </div>


                            <div className="box hover-black-green w-[32%] h-[200px] ml-[1%] mr-[1%] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] pt-10 pl-5  pr-5">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2513_20303)">
                                        <path d="M33.2929 21.7282C32.9332 21.3758 32.6436 21.0953 32.3586 20.8112C31.8514 20.3067 31.3433 19.8023 30.8415 19.2932C30.3635 18.8088 30.3398 18.1604 30.776 17.7115C31.2213 17.2525 31.8887 17.2653 32.3823 17.7561C33.7983 19.1666 35.2097 20.5817 36.623 21.995C36.9781 22.3501 37.1065 22.7672 36.9062 23.238C36.7077 23.706 36.3261 23.9109 35.8216 23.9109C30.0648 23.91 24.307 23.9109 18.5501 23.9091C17.859 23.9091 17.3663 23.4483 17.3672 22.8182C17.3682 22.1844 17.8562 21.73 18.551 21.73C23.309 21.7282 28.0669 21.7291 32.8248 21.7291C32.945 21.7282 33.0652 21.7282 33.2929 21.7282Z" fill="#DDDDDD" />
                                        <path d="M16.748 28.2718C16.8719 28.4057 16.9438 28.4885 17.0203 28.565C17.7342 29.2798 18.4527 29.991 19.1621 30.7104C19.6374 31.1921 19.6556 31.8478 19.2185 32.293C18.7705 32.7484 18.1067 32.7311 17.6122 32.2384C16.2044 30.8361 14.8021 29.4283 13.3952 28.025C13.0309 27.6617 12.8862 27.2419 13.0956 26.7575C13.3032 26.2758 13.7011 26.0882 14.2165 26.0882C19.9616 26.0918 25.7066 26.09 31.4526 26.0909C32.1419 26.0909 32.6345 26.5535 32.6318 27.1845C32.6291 27.8156 32.1382 28.27 31.4434 28.27C26.6864 28.2718 21.9285 28.2709 17.1715 28.2709C17.0531 28.2718 16.9338 28.2718 16.748 28.2718Z" fill="#DDDDDD" />
                                    </g>
                                    <rect x="0.5" y="0.5" width="49" height="49" rx="4.5" stroke="#DDDDDD" />
                                    <defs>
                                        <clipPath id="clip0_2513_20303">
                                            <rect width="24" height="15.2454" fill="white" transform="translate(13 17.3773)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <a href="#" className="block pt-2 pb-1 text-base font-medium">
                                    Transaction
                                    <svg style={{ "display": "revert" }} className="ml-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                <h3 style={{ "fontSize": "22px" }} className="font-semibold">15</h3>
                            </div>


                            <div className="box hover-black-green w-[32%] h-[200px] ml-[1%] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px]  pt-10 pl-5  pr-5">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2513_20315)">
                                        <path d="M21.9606 34.7966C22.2865 33.3704 21.1962 31.9896 19.6161 32.0525C19.6285 31.3957 19.4101 30.8232 18.9369 30.3599C18.4687 29.9016 17.9036 29.6939 17.2129 29.7527C17.2162 28.8526 16.8555 28.1486 16.0853 27.6886C15.3358 27.2411 14.5432 27.3188 13.8003 27.8979C13.6365 27.706 13.4719 27.5141 13.2916 27.3031C13.7846 26.6603 14.2793 26.0151 14.7749 25.3698C16.0696 23.6846 17.3667 22.0003 18.6565 20.311C18.7698 20.1629 18.8782 20.1356 19.0643 20.1315C19.9296 20.1116 20.795 20.0686 21.6578 20.0082C22.5422 19.9462 23.424 19.8394 24.3084 19.7832C24.9164 19.7443 25.5146 19.8303 26.1119 20.0843C25.5228 20.2969 24.9653 20.4963 24.4093 20.6998C23.7227 20.9513 23.0435 21.2268 22.3486 21.4518C21.9407 21.5833 21.5081 21.6454 21.0837 21.7215C20.2349 21.8729 19.7857 22.3221 19.8006 23.0468C19.8097 23.52 19.9999 23.9295 20.3184 24.2736C21.1011 25.1191 22.0979 25.2937 23.1825 25.1572C23.97 25.0579 24.7543 24.9321 25.5402 24.8246C26.0035 24.7609 26.4304 24.8974 26.7968 25.1605C27.3917 25.5865 27.9683 26.039 28.5407 26.4949C30.163 27.7871 31.7795 29.0867 33.3985 30.3822C33.9081 30.7901 34.0562 31.2327 33.8659 31.7903C33.6699 32.3619 33.1462 32.7822 32.5712 32.7731C32.3826 32.7698 32.165 32.6829 32.0136 32.5654C31.1086 31.8639 30.2193 31.1417 29.3233 30.4286C29.2357 30.3582 29.1331 30.2449 29.0446 30.2507C28.8907 30.2606 28.6897 30.3061 28.602 30.4137C28.4489 30.5998 28.5407 30.8033 28.7236 30.9497C29.32 31.4271 29.9165 31.9028 30.513 32.3793C30.9969 32.7664 31.1326 33.2165 30.9341 33.7757C30.7289 34.354 30.2127 34.7668 29.6609 34.7196C29.4218 34.699 29.1629 34.5831 28.9668 34.4384C28.3712 33.9958 27.802 33.516 27.2204 33.0543C26.94 32.8318 26.7356 32.8268 26.5735 33.0295C26.4113 33.2322 26.4593 33.4398 26.7307 33.6607C27.1228 33.9801 27.5215 34.2911 27.9137 34.6096C28.372 34.9827 28.4787 35.556 28.1991 36.1169C27.9112 36.6944 27.2626 37.041 26.7257 36.8921C26.6215 36.8631 26.5222 36.7961 26.4345 36.7274C26.0209 36.4023 25.613 36.0698 25.2002 35.743C24.8982 35.5031 24.6931 35.4898 24.5276 35.6925C24.3539 35.906 24.4126 36.1111 24.7253 36.3643C25.0141 36.5976 25.292 36.8482 25.5989 37.055C25.848 37.223 25.8844 37.4372 25.8447 37.6962C25.7719 38.1677 25.3797 38.6203 24.9057 38.6914C24.6914 38.7237 24.4523 38.6376 24.2348 38.5706C24.1247 38.5367 24.0379 38.425 23.9411 38.3481C23.7161 38.1677 23.4919 37.9866 23.2702 37.8087C23.8981 36.4023 23.4398 35.3459 21.9606 34.7966Z" fill="#DDDDDD" />
                                        <path d="M36.7441 27.3718C35.935 28.3703 34.8967 29.0065 33.7501 29.4805C33.6633 29.5161 33.497 29.4474 33.4076 29.3771C31.7837 28.0882 30.1672 26.7902 28.5474 25.4972C28.1851 25.2076 27.8211 24.9189 27.4479 24.6443C26.7224 24.1107 25.9241 23.9212 25.024 24.09C24.2753 24.2298 23.5159 24.3225 22.7581 24.3969C22.1095 24.4606 21.5056 24.3043 21.0093 23.8542C20.8893 23.745 20.7826 23.6118 20.7032 23.4704C20.4194 22.9608 20.5857 22.5827 21.1598 22.5248C22.4131 22.3982 23.5432 21.8762 24.6848 21.4195C25.9034 20.9323 27.1567 20.7329 28.4506 20.6593C29.3978 20.6055 30.3434 20.5128 31.2509 20.062C33.0767 22.4942 34.9017 24.9214 36.7441 27.3718Z" fill="#DDDDDD" />
                                        <path d="M18.2114 19.6186C16.35 22.0408 14.53 24.411 12.6744 26.825C12.2384 26.4486 11.7801 26.1135 11.3971 25.7073C10.9636 25.249 10.885 24.6832 11.163 24.1008C11.2962 23.8228 11.4327 23.539 11.6163 23.2958C12.6115 21.9813 13.6183 20.675 14.6326 19.3745C14.8022 19.1578 15.0156 18.97 15.2291 18.793C15.756 18.3561 16.2698 18.2941 16.8555 18.6507C17.3196 18.9319 17.7431 19.2802 18.2114 19.6186Z" fill="#DDDDDD" />
                                        <path d="M37.3281 26.8539C35.4948 24.4143 33.7005 22.0276 31.8846 19.6103C32.4438 19.195 32.9228 18.6895 33.5995 18.4777C34.0413 18.3396 34.4467 18.4488 34.7817 18.7425C35.0894 19.013 35.3897 19.3034 35.6388 19.6277C36.5173 20.771 37.3793 21.9283 38.2323 23.0915C38.4565 23.3967 38.6476 23.7318 38.8147 24.0718C39.1323 24.7162 39.0447 25.3226 38.5235 25.8248C38.1553 26.1789 37.7483 26.4949 37.3281 26.8539Z" fill="#DDDDDD" />
                                        <path d="M14.3811 31.835C13.524 31.8052 12.873 31.1599 12.9168 30.4294C12.9317 30.1829 13.0484 29.9049 13.2055 29.7113C13.5745 29.2572 13.9865 28.8352 14.4018 28.4216C14.5242 28.3 14.7079 28.1982 14.8758 28.1726C15.402 28.0923 16.0274 28.4721 16.2863 28.9908C16.5486 29.5144 16.4741 29.9562 16.0398 30.4261C15.6973 30.7967 15.3424 31.1558 15.0107 31.5355C14.8072 31.7679 14.5598 31.8432 14.3811 31.835Z" fill="#DDDDDD" />
                                        <path d="M16.7074 34.1671C15.9414 34.1621 15.2729 33.492 15.3292 32.7317C15.3466 32.4951 15.4682 32.2354 15.6171 32.0443C15.9008 31.6803 16.2665 31.38 16.5494 31.0151C17.2716 30.0828 18.4563 30.6247 18.7607 31.4701C18.9212 31.9152 18.8625 32.3189 18.5324 32.6722C18.1667 33.0635 17.8036 33.4564 17.4387 33.8477C17.1897 34.1158 17.0656 34.1695 16.7074 34.1671Z" fill="#DDDDDD" />
                                        <path d="M19.8245 32.7913C20.7139 32.8724 21.4154 33.7129 21.2119 34.5004C21.1672 34.6725 21.0721 34.8471 20.9546 34.9811C20.6022 35.384 20.2332 35.7736 19.8609 36.1583C19.4101 36.6232 18.7541 36.6191 18.2246 36.1608C17.6844 35.6934 17.5471 34.9281 17.9533 34.4516C18.3677 33.966 18.8062 33.5003 19.2628 33.0544C19.4018 32.9179 19.6343 32.8757 19.8245 32.7913Z" fill="#DDDDDD" />
                                        <path d="M21.451 38.2919C20.8678 38.2505 20.3011 37.7947 20.2299 37.2437C20.2109 37.0948 20.2697 36.8946 20.3664 36.7788C20.6833 36.4007 21.025 36.0417 21.3774 35.6959C21.4576 35.6173 21.6297 35.5709 21.7414 35.5958C22.1774 35.6909 22.4983 35.9581 22.701 36.3544C22.8756 36.6969 22.8557 37.0369 22.6042 37.3347C22.3858 37.5945 22.1575 37.8493 21.906 38.0759C21.7869 38.1835 21.6049 38.2215 21.451 38.2919Z" fill="#DDDDDD" />
                                    </g>
                                    <rect x="0.5" y="0.5" width="49" height="49" rx="4.5" stroke="#DDDDDD" />
                                    <defs>
                                        <clipPath id="clip0_2513_20315">
                                            <rect width="28" height="27.3928" fill="white" transform="translate(11 11.3036)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                                <a href="#" className="block pt-2 pb-1 text-base font-medium">
                                    Settlement Amount
                                    <svg className="display-revert ml-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                <h3 style={{ "fontSize": "22px" }} className=" font-semibold">৳ 2,500.00</h3>
                            </div>

                        </div>


                        <div className="mt-5 flex box w-full min-h-[200px] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] pt-5 pl-5 pr-5">

                            <div className="w-4/5 color-#222222">
                                <a href="#" className="block pt-2 pb-1 font-medium w-full">
                                    Payment Types
                                    <svg className="display-revert ml-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                <table id="payment-types-table" className="custom-border-top table-auto w-full m-auto h-auto mt-2" border={1}>
                                    <tbody>
                                        <tr className="hover-black-green" id="inv-pay-data">
                                            <td className="mt-2 pt-4 pb-4 rounded-l-md pl-4">
                                                <span className="pointer pointer-success"></span>
                                                Invoice Amount Received
                                            </td>
                                            <td className="mt-2 pt-4 pb-4 rounded-r-md text-center font-semibold text-xl">৳ 1,800.00</td>
                                        </tr>
                                        <tr className="custom-border-top hover-black-green" id="qr-pay-data">
                                            <td className="mt-2 pt-4 pb-4 rounded-l-md pl-4">
                                                <span className="pointer pointer-success-dark"></span>
                                                QR Offline
                                            </td>
                                            <td className="mt-2 pt-4 pb-4 rounded-r-md text-center font-semibold text-xl">৳ 2,000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="fixed w-1/5 text-center chart-div-right relative right-0 -mt-4 -right-4">
                                <DonutChart />
                            </div>

                        </div>


                        <div className="my-5 block box w-full min-h-[200px] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] p-5">

                            <a href="#" className="block pt-2 pb-1 font-medium w-full">
                                Top Items by Sales
                                <svg className="display-revert ml-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                            <table className="custom-border-top table-auto w-full m-auto h-auto mt-2">
                                <tbody>
                                    <tr className="hover-black-green hover:text-white">
                                        <td className="mt-2 pt-4 pb-4 rounded-l-md pl-4">
                                            Miniket Rice Premium <br />
                                            <span className="text-[#999999] text-sm">5 KG Pack</span>
                                        </td>
                                        <td className="mt-2 pt-4 pb-4 text-center text-xl">30</td>
                                        <td className="mt-2 pt-4 pb-4 text-center rounded-r-md text-xl">৳ 1,500.00</td>
                                    </tr>
                                    <tr className="custom-border-top hover-black-green">
                                        <td className="mt-2 pt-4 pb-4 rounded-l-md pl-4">
                                            Local Onion <br />
                                            <span className="text-[#999999] text-sm">1 KG Pack</span>
                                        </td>
                                        <td className="mt-2 pt-4 pb-4 text-center text-xl">7</td>
                                        <td className="mt-2 pt-4 pb-4 text-center rounded-r-md text-xl">৳ 650.00</td>
                                    </tr>
                                    <tr className="custom-border-top hover-black-green">
                                        <td className="mt-2 pt-4 pb-4 rounded-l-md pl-4">
                                            Vim Dishwashing Bar <br />
                                            <span className="text-[#999999] text-sm">300 gm</span>
                                        </td>
                                        <td className="mt-2 pt-4 pb-4 text-center text-xl">3</td>
                                        <td className="mt-2 pt-4 pb-4 text-center rounded-r-md text-xl">৳ 150.00</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <br />

                    </div>




                    <div className="custom-container-right float-right w-1/5 pl-2 custom-scroll-auto pb-10">
                        <div className="box-full w-full min-h-[54px] bg-[#F5F5F5] text-[#222222] text-justify rounded-[5px] px-5 py-3">
                            <svg className="display-revert float-left" width="30" height="30" viewBox="0 0 24 24" fill="none" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.90583 23.9989C8.63136 23.8138 8.33788 23.6519 8.08734 23.4394C7.51588 22.9545 6.96483 22.445 6.40533 21.946C6.35958 21.9052 6.31032 21.8693 6.25191 21.8221C5.75504 22.262 5.2624 22.6948 4.77399 23.1311C4.47066 23.4021 4.13004 23.5379 3.72044 23.4471C3.23062 23.3387 2.88929 22.9425 2.85339 22.4414C2.84706 22.3556 2.84425 22.2697 2.84425 22.1839C2.84354 15.396 2.84425 8.6074 2.84143 1.81952C2.84143 1.47256 2.89069 1.15093 3.13631 0.886316C3.55857 0.429568 4.20815 0.397195 4.71417 0.825792C5.17302 1.21427 5.61781 1.61965 6.06893 2.01798C6.12663 2.06936 6.18646 2.11862 6.26035 2.18196C6.59112 1.88708 6.91697 1.59783 7.24211 1.30788C7.59189 0.995401 7.93955 0.681519 8.29003 0.370452C8.84389 -0.121485 9.41043 -0.1243 9.96359 0.366933C10.5773 0.910948 11.1875 1.45919 11.799 2.00531C11.8617 2.06161 11.9285 2.11369 12.0059 2.17844C12.5781 1.6675 13.1425 1.1636 13.7062 0.660405C13.8167 0.561877 13.9272 0.461942 14.0384 0.364118C14.593 -0.122892 15.1567 -0.120781 15.712 0.37397C16.325 0.919393 16.9352 1.46693 17.5467 2.01305C17.6044 2.06443 17.6636 2.1151 17.7403 2.18126C17.9183 2.02643 18.0936 1.87512 18.2667 1.72169C18.5827 1.4423 18.9008 1.16571 19.2133 0.882094C19.5954 0.535134 20.0282 0.411974 20.5054 0.632255C20.972 0.847609 21.1585 1.24383 21.1578 1.75266C21.1543 5.89295 21.1557 10.0332 21.1557 14.1728C21.1557 16.8521 21.1529 19.5313 21.1585 22.2106C21.1592 22.654 21.0417 23.0277 20.663 23.2853C20.2499 23.5661 19.7397 23.5506 19.3371 23.2156C18.8508 22.8109 18.3849 22.3823 17.9099 21.9643C17.8578 21.9185 17.8036 21.8749 17.7375 21.82C17.2835 22.2247 16.8359 22.6244 16.3883 23.0242C16.1962 23.1959 16.0153 23.3824 15.8091 23.5365C15.5818 23.7068 15.3327 23.8469 15.0934 24.0003C14.9526 24.0003 14.8119 24.0003 14.6718 24.0003C14.4058 23.8307 14.1278 23.6766 13.8766 23.4879C13.6401 23.3106 13.4318 23.0966 13.2108 22.8989C12.8111 22.5421 12.4099 22.1853 11.9996 21.82C11.4148 22.3422 10.8539 22.8602 10.2733 23.3549C9.99386 23.5928 9.67575 23.7863 9.37595 24.0003C9.2183 23.9989 9.06206 23.9989 8.90583 23.9989ZM3.97521 22.3408C4.51359 21.8643 4.99919 21.4238 5.49676 20.9973C5.97884 20.5835 6.54186 20.5877 7.02746 20.998C7.26604 21.1993 7.49406 21.4132 7.72701 21.6215C8.1915 22.0361 8.65528 22.4499 9.12822 22.8714C9.2176 22.7933 9.2936 22.7279 9.36891 22.6603C9.96922 22.1247 10.5681 21.5878 11.1685 21.0522C11.7097 20.5701 12.2853 20.5687 12.8251 21.0494C13.4318 21.5899 14.0363 22.1318 14.6423 22.673C14.7162 22.7391 14.7936 22.8025 14.8717 22.87C15.5614 22.2528 16.2342 21.6462 16.9126 21.0459C17.4496 20.5701 18.0119 20.568 18.5517 21.0374C18.9937 21.4217 19.4293 21.813 19.8692 22.2007C19.9114 22.238 19.9607 22.2669 20.0163 22.307C20.0163 15.4255 20.0163 8.56798 20.0163 1.67384C19.9191 1.75477 19.8537 1.80755 19.7911 1.86315C19.3702 2.23615 18.9592 2.62111 18.5243 2.97722C18.3554 3.11516 18.1421 3.22706 17.9317 3.27984C17.5383 3.37767 17.2019 3.21932 16.9063 2.95259C16.2342 2.34594 15.5579 1.74492 14.871 1.13052C14.7774 1.21216 14.6887 1.28747 14.6021 1.36418C14.0018 1.89975 13.4043 2.43884 12.8019 2.9723C12.2938 3.42271 11.7068 3.4213 11.1973 2.97581C11.0326 2.83154 10.8715 2.68445 10.7082 2.53877C10.1846 2.07147 9.66027 1.60416 9.13174 1.13264C9.06629 1.18823 9.0128 1.23187 8.96142 1.27832C8.32803 1.84345 7.69745 2.41561 7.05772 2.97722C6.55171 3.42201 5.98166 3.4206 5.47142 2.98637C5.23988 2.78861 5.01538 2.58241 4.78736 2.38042C4.52626 2.14959 4.26446 1.92016 3.97591 1.6661C3.97521 8.56728 3.97521 15.4262 3.97521 22.3408Z" fill="#222222" />
                                <path d="M12.0087 14.8104C13.7351 14.8104 15.4614 14.8111 17.1878 14.8097C17.4341 14.8097 17.6537 14.8548 17.7958 15.0814C17.9866 15.3854 17.8367 15.7943 17.4918 15.8928C17.3884 15.9224 17.2765 15.9329 17.1688 15.9329C13.7238 15.935 10.2789 15.935 6.83391 15.9329C6.72623 15.9329 6.61504 15.9217 6.51088 15.8942C6.27511 15.8316 6.11958 15.6169 6.11817 15.3741C6.11677 15.144 6.26315 14.9223 6.48413 14.8562C6.60096 14.821 6.72975 14.8125 6.85291 14.8125C8.57152 14.8097 10.2901 14.8104 12.0087 14.8104Z" fill="#222222" />
                                <path d="M12.0229 11.4372C13.7492 11.4372 15.4756 11.4365 17.2019 11.438C17.6038 11.438 17.836 11.6153 17.8726 11.9419C17.9015 12.2022 17.7523 12.445 17.501 12.5189C17.3983 12.5492 17.2864 12.5605 17.1787 12.5605C13.726 12.5626 10.2733 12.5619 6.82059 12.5626C6.57639 12.5626 6.35399 12.5232 6.20902 12.2973C6.01478 11.9946 6.15483 11.5843 6.49827 11.4802C6.60806 11.4471 6.7284 11.4394 6.84452 11.4394C8.57017 11.4365 10.2965 11.4372 12.0229 11.4372Z" fill="#222222" />
                                <path d="M9.47795 9.1894C8.5729 9.1894 7.66715 9.19222 6.7621 9.188C6.30958 9.18589 6.04848 8.88819 6.13927 8.49056C6.19768 8.23439 6.41726 8.07182 6.73536 8.06549C7.0788 8.05915 7.42224 8.06408 7.76568 8.06408C9.2253 8.06408 10.6842 8.06338 12.1438 8.06478C12.4788 8.06478 12.704 8.19639 12.7892 8.43145C12.9271 8.81289 12.6562 9.17885 12.217 9.18729C11.7568 9.19574 11.2958 9.1894 10.8355 9.1894C10.3837 9.1894 9.93048 9.1894 9.47795 9.1894Z" fill="#222222" />
                            </svg>

                            <a href="#" className="float-left font-medium text-base pl-4 pt-1 hover:underline">
                                Send an Invoice
                            </a>
                        </div>

                        <div className="box-full w-full min-h-[54px] bg-[#F5F5F5] text-[#222222] text-justify rounded-[5px] px-5 py-3 mt-4">
                            <svg className="display-revert float-left" width="30" height="30" viewBox="0 0 24 24" fill="none" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2513_20358)">
                                    <path d="M24 2.25029C24 5.45326 24 8.6567 24 11.8597C23.9081 11.9923 23.8341 12.1428 23.722 12.2553C20.0761 15.9078 16.4259 19.5561 12.7777 23.2058C12.4097 23.5742 11.9775 23.8226 11.4698 23.9394C11.3958 23.9562 11.3236 23.9797 11.2505 24.0003C11.0316 24.0003 10.8131 24.0003 10.5942 24.0003C9.75094 23.8695 9.16734 23.3379 8.59266 22.759C6.14672 20.2944 3.69094 17.839 1.22531 15.394C0.650156 14.824 0.129844 14.2414 0 13.4065C0 13.1876 0 12.9692 0 12.7503C0.139219 11.9192 0.666094 11.3412 1.23844 10.7717C4.70859 7.31888 8.16469 3.85248 11.6292 0.394509C11.7806 0.243571 11.9695 0.131071 12.1406 0.000289917C15.3436 0.000289917 18.547 0.000289917 21.75 0.000289917C21.7852 0.0143524 21.8189 0.0345087 21.855 0.0415399C22.8473 0.237946 23.513 0.816384 23.8603 1.76232C23.9189 1.92076 23.9541 2.08763 24 2.25029ZM17.1328 1.40654C15.6877 1.40654 14.2425 1.40373 12.7978 1.41216C12.6881 1.41263 12.5498 1.46279 12.4739 1.53826C8.91797 5.08482 5.36672 8.63654 1.81641 12.1892C1.26609 12.74 1.26047 13.4286 1.80187 13.97C4.54594 16.7164 7.29 19.4623 10.0411 22.2012C10.1902 22.3494 10.3903 22.475 10.5895 22.5383C11.0887 22.6962 11.4956 22.505 11.8552 22.1454C15.3816 18.6134 18.9127 15.0856 22.4367 11.5512C22.523 11.465 22.5867 11.3126 22.5872 11.1908C22.5956 8.35529 22.5942 5.51982 22.5933 2.68435C22.5928 1.88888 22.1063 1.40701 21.3038 1.40654C19.9134 1.40607 18.5231 1.40654 17.1328 1.40654Z" fill="black" />
                                    <path d="M17.8055 8.4017C16.5816 8.4031 15.6038 7.42998 15.5987 6.2056C15.5935 4.97842 16.5868 3.98326 17.8121 3.98795C19.0238 3.99217 20.0143 4.98826 20.0124 6.20045C20.0105 7.41638 19.0243 8.40029 17.8055 8.4017ZM17.8018 6.99498C18.2476 6.99545 18.6057 6.6406 18.6061 6.1981C18.6066 5.76029 18.2415 5.39467 17.8032 5.39373C17.3607 5.39279 17.0054 5.74998 17.0049 6.19623C17.0044 6.64623 17.3522 6.99498 17.8018 6.99498Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2513_20358">
                                        <rect width="24" height="24" fill="white" transform="translate(0 0.000289917)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <a href="#" className="float-left font-medium text-base pl-4 pt-1 hover:underline">
                                Add an Item
                            </a>
                        </div>


                        <h6 className="mt-7 text-xl font-medium">Last 30 days</h6>
                        <div className="mt-3 box w-full min-h-[69px] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] px-5 py-6 border-b-0 rounded-b-none">
                            <a href="#" className="block text-sm font-normal text-[#444444]">
                                Total Connects
                                <svg className="display-revert ml-1 mt-0.5 float-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="float-right pr-1 text-base ">0</span>
                            </a>
                        </div>
                        <div className="box w-full h-[69px] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] px-5 py-6 rounded-t-none border-b-0 rounded-b-none">
                            <a href="#" className="block text-sm font-normal text-[#444444]">
                                New Connects
                                <svg className="display-revert ml-1 mt-0.5 float-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="float-right pr-1 text-base">0</span>
                            </a>
                        </div>
                        <div className="box w-full min-h-[69px] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] px-5 py-6 rounded-t-none border-b-0 rounded-b-none">
                            <a href="#" className="block text-sm font-normal text-[#444444]">
                                Returning Connects
                                <svg className="display-revert ml-1 mt-0.5 float-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="float-right pr-1 text-base">0</span>
                            </a>
                        </div>

                        <div className="flow-root w-full min-h-[69px] bg-[#FFFFFF] border-2 border-[#F5F5F5] text-[#222222] rounded-[5px] px-5 py-2 rounded-t-none">
                            <a href="#" className="block text-sm font-normal text-[#444444]">
                                <span style={{ "maxWidth": "60%", "whiteSpace": "break-spaces", "display": "block", "float": "left" }}>Average Spending Per Connects</span>
                                <svg className="display-revert ml-1 float-right mt-3.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="float-right pr-1 text-base mt-3">0</span>
                                <span className="float-right pr-2 text-sm mt-3.5">৳</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



export default home;