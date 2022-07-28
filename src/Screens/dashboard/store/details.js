import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Sidebar from "../../../components/Sidebar";
import DetailsTable from './details-table';

import GetInfoApi from "../../../components/api/GetInfo";



var pageName = "store";
const details = () => {
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
                <div className="custom-container w-full float-left px-8 py-10 flex font-montserrat ">
                    

                    <div className="block w-full pb-20 custom-scroll-auto">
                        <DetailsTable></DetailsTable>

                        <br/>
                        {/* API DATA **/}
                        <h5>API Data</h5>
                        <hr></hr>
                        <GetInfoApi></GetInfoApi>

                    </div>
                </div>


            </div>
        </div>
    );
}



export default details;