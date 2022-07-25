import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home2 from "./dashboard/home/home-2";
import Reports from "./dashboard/reports/reports";
import Invoice from "./dashboard/invoice/Invoice";


const Dashboard = () => {

    return (
        <Routes>
            <Route path="/dashboard/home" element={<Home2 />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<Invoice />} />
        </Routes>
    );
}

export default Dashboard;


