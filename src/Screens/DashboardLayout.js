import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home";
import Home2 from "./dashboard/home-2";
import BarChart from "./dashboard/BarChart";
import DonutChart from "./dashboard/DonutChart";

const DashboardLayout = () => {

    return (
        <div className="font-montserrat">
            <Routes>
                <Route path="/home/index" element={<Home />} />
                <Route path="/home/index2" element={<Home2 />} />
                <Route path="/home/chart2" element={<BarChart />} />
                <Route path="/home/dc" element={<DonutChart />} />
            </Routes>
        </div>
    );
}

export default DashboardLayout;


