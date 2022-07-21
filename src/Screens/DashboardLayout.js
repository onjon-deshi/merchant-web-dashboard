import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";



import Home from "./dashboard/home";
import Home2 from "./dashboard/home-2";
import GoogleChart2 from "./dashboard/chart2";


const DashboardLayout=()=>{

    return (
        <Routes>
            <Route path="/home/index" element={<Home/>} />
            <Route path="/home/index2" element={<Home2/>} />
            <Route path="/home/google-chart2" element={<GoogleChart2/>} />
        </Routes>
    );
}

export default DashboardLayout;


