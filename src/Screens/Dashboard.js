import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";
import AddNewConnect from "./dashboard/connects/AddNewConnect";
import StoreTest from "./dashboard/store/StoreTest";
import HomeDraft from "./dashboard/home/home-draft";
import StoreDetails from "./dashboard/store/details";
import StoreTable from "./dashboard/store-table/store";
import { createContext } from "react";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';


export const UserContext = createContext();

const DashboardNavigation = () => {
    let location = useLocation();

    let pathName = location.pathname;
    pathName = pathName.split('/');
    let secondIndex = pathName[2];

    return (
        <div className="body w-full bg-white font-medium">
            {/* TOP HEADER */}
            <div className="w-full border-b-2 flex justify-between">
                <Navbar name={secondIndex} />
            </div>

            {/* MAIN BODY */}
            <div className="flex w-full h-full fixed bg-white">
                {/* LEFT SIDE BAR */}
                <Sidebar name={secondIndex} />
                <Routes>
                    <Route path="/dashboard/home" element={<Home />} />
                    <Route path="/dashboard/store-details" element={<StoreDetails />} />
                    <Route path="/dashboard/reports" element={<Reports />} />
                    <Route path="/dashboard/invoice" element={<CreateInvoice />} />
                    <Route path="/dashboard/home-draft" element={<HomeDraft />} />
                    <Route path="/dashboard/connects" element={<AddNewConnect />} />
                    <Route path="/dashboard/store-test" element={<StoreTest />} />
                    <Route path="/dashboard/store" element={<StoreTable />} />

                </Routes>
            </div>
        </div>
    );
}


export default DashboardNavigation;
