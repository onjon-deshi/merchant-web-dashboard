
const home=()=>{
    return (

        <aside className="w-60 h-full border-r-2 border-gray-10" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-0 bg-gray rounded dark:bg-gray-800">
                
                <a href="#" className="flex items-center pl-2.5 mb-5">
                    <svg className="w-6 h-6 float-right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>

                    &nbsp;&nbsp;
                    <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">Home</span>
                </a>


                <ul className="border-t top-5 w-100 flow-root pt-10">
                    
                    <li className="w-6/12 float-left p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg  className="current justify-center w-full h-6 block m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>

                            <div className="block text-center">Home</div>
                        </a>
                    </li>
        
                    <li className="w-6/12 float-right p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div className="block text-center">Invoices</div>
                        </a>
                    </li>


                    <li className="w-6/12 float-left p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                                
                            <div className="block text-center">Transactions</div>
                        </a>
                    </li>
        
                    <li className="w-6/12 float-right p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                            
                            <div className="block text-center">Store</div>
                        </a>
                    </li>


                    <li className="w-6/12 float-left p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                            </svg>
                            
                            <div className="block text-center">Connects</div>
                        </a>
                    </li>
        
                    <li className="w-6/12 float-right p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            
                            <div className="block text-center">Reports</div>
                        </a>
                    </li>


                    <li className="w-6/12 float-left p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            
                            <div className="block text-center">Balances</div>
                        </a>
                    </li>
        
                    <li className="w-6/12 float-right p-[15px]">
                        <a href="#" className="justify-center block items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                            
                            <div className="block text-center">Account Settings</div>
                        </a>
                    </li>
                </ul>


            </div>


            <style jsx="true"> {`
                aside ul a.text-base, aside ul a {
                    font-size: 14px;
                    line-height: 20px;
                }
                
                aside ul a svg {
                    margin: auto;
                    height: 45px !important;
                    width: 50px !important;
                    padding: 5px 10px;
                    border-radius: 8px;
                    background: #F5F5F5;
                    stroke: #444444 !important;
                }

                aside ul a svg path {
                    stroke-width: 1.4px !important;
                }

                aside ul a svg:hover, aside ul a svg.current {
                    background: #1A202C !important;
                    stroke: #FFFFFF !important;
                }
                
                aside ul a:hover {
                    text-decoration: none;
                    background: none !important;
                }
            `}</style>



        </aside>

    );
}



export default home;