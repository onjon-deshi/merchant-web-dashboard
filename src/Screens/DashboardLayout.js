import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";



import Home from "./dashboard/home";
import Home2 from "./dashboard/home-2";
import BarChart from "./dashboard/BarChart";

const DashboardLayout=()=>{

    return (
        <Routes>
            <Route path="/home/index" element={<Home/>} />
            <Route path="/home/index2" element={<Home2/>} />
            <Route path="/home/chart2" element={<BarChart/>} />
        </Routes>
    );
}

export default DashboardLayout;


