import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";
import AddNewConnect from "./dashboard/connects/AddNewConnect";
import Store from "./dashboard/store/Store";


const DashboardNavigation = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<CreateInvoice />} />
            <Route path="/dashboard/connects" element={<AddNewConnect />} />
            <Route path="/dashboard/store" element={<Store />} />
        </Routes>
    );
}


export default DashboardNavigation;
