import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";
import AddNewConnect from "./dashboard/connects/AddNewConnect";
import StoreTest from "./dashboard/store/StoreTest";
import HomeDraft from "./dashboard/home/home-draft";
import StoreDetails from "./dashboard/store/details";


import ProductTable from "../components/Table/ProductTable";
import StatusTable from "../components/Table/StatusTable";

const DashboardNavigation = () => {
    return (
        
        <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/store-details" element={<StoreDetails />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<CreateInvoice />} />
            <Route path="/dashboard/home-draft" element={<HomeDraft />} />
            <Route path="/dashboard/connects" element={<AddNewConnect />} />
            <Route path="/dashboard/store-test" element={<StoreTest />} />
            <Route path="/dashboard/home-draft" element={<HomeDraft />} />
            <Route path="/dashboard/product-table" element={<ProductTable />} />
            <Route path="/dashboard/status-table" element={<StatusTable />} />
        </Routes>

    );
}


export default DashboardNavigation;
