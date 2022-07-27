import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home2 from "./dashboard/home/home-2";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";


const Dashboard = () => {

    return (
        <Routes>
            <Route path="/dashboard/home" element={<Home2 />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<CreateInvoice />} />
        </Routes>
    );
}

export default Dashboard;


