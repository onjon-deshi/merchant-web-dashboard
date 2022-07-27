import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import Invoice from "./dashboard/invoice/Invoice";


const DashboardNavigation = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<Invoice />} />
        </Routes>
    );
}


export default DashboardNavigation;
