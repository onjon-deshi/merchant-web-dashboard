import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";


import HomeDraft from "./dashboard/home/home-draft";
import StoreDetails from "./dashboard/store/details";



const DashboardNavigation = () => {
    return (
        
        <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/store-details" element={<StoreDetails />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<CreateInvoice />} />
            <Route path="/dashboard/home-draft" element={<HomeDraft />} />
        </Routes>

    );
}


export default DashboardNavigation;
