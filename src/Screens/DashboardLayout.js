import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home";
import Home2 from "./dashboard/home-2";
import Reports from "./dashboard/reports";
import DatePicker from "./../components/DatePicker";


const DashboardLayout = () => {

    return (
        <Routes>
            <Route path="/home/index" element={<Home/>} />
            <Route path="/home/index2" element={<Home2/>} />
            <Route path="/home/reports" element={<Reports/>} />
            <Route path="/home/dp" element={<DatePicker/>} />
        </Routes>
    );
}

export default DashboardLayout;


