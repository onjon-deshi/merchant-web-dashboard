import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";
import AddNewConnect from "./dashboard/connects/AddNewConnect";
import Store from "./dashboard/store/Store";

import HomeDraft from "./dashboard/home/home-draft";
import ProductTable from "../components/Table/ProductTable";
import StatusTable from "../components/Table/StatusTable";

const DashboardNavigation = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<CreateInvoice />} />
            <Route path="/dashboard/connects" element={<AddNewConnect />} />
            <Route path="/dashboard/store" element={<Store />} />
            <Route path="/dashboard/home-draft" element={<HomeDraft />} />
            <Route path="/dashboard/product-table" element={<ProductTable />} />
            <Route path="/dashboard/status-table" element={<StatusTable />} />
        </Routes>
    );
}


export default DashboardNavigation;
