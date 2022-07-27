import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";


const DashboardNavigation = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<CreateInvoice />} />
        </Routes>
    );
}


export default DashboardNavigation;
