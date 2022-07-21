import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";



import Home from "./dashboard/home";
import Home2 from "./dashboard/home-2";
import Chart2 from "./dashboard/chart2";
import ReChartDonut from "./dashboard/chart";


const DashboardLayout=()=>{

    return (
        <Routes>
            <Route path="/home/index" element={<Home/>} />
            <Route path="/home/index2" element={<Home2/>} />
            <Route path="/home/rechart-donut" element={<ReChartDonut/>} />
            <Route path="/home/chart2" element={<Chart2/>} />
        </Routes>
    );
}

export default DashboardLayout;


