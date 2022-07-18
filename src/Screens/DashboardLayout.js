import { Route, Routes } from "react-router-dom";
import HomeDraft from "./dashboard/home-draft";
import Home from "./dashboard/home";

const DashboardLayout=()=>{

    return (
        <Routes>
            <Route path="/home/index" element={<Home/>} />
            <Route path="/home/index-draft" element={<HomeDraft/>} />
        </Routes>
    );
}

export default DashboardLayout;


