import { Route, Routes } from "react-router-dom";
import "../styles/Dashboard.css";
import Home from "./dashboard/home/home";
import Reports from "./dashboard/reports/reports";
import CreateInvoice from "./dashboard/invoice/CreateInvoice";
<<<<<<< HEAD
import AddNewConnect from "./dashboard/connects/AddNewConnect";
import Store from "./dashboard/store/Store";

=======
import HomeDraft from "./dashboard/home/home-draft";
import ProductTable from "../components/Table/ProductTable";
import StatusTable from "../components/Table/StatusTable";
>>>>>>> 2dea68f6ad584ae827cc6c50a85efc5c68f9a2ff

const DashboardNavigation = () => {
    return (
        <Routes>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/invoice" element={<CreateInvoice />} />
<<<<<<< HEAD
            <Route path="/dashboard/connects" element={<AddNewConnect />} />
            <Route path="/dashboard/store" element={<Store />} />
=======
            <Route path="/dashboard/home-draft" element={<HomeDraft />} />
            <Route path="/dashboard/product-table" element={<ProductTable />} /> 
            <Route path="/dashboard/status-table" element={<StatusTable />} /> 
>>>>>>> 2dea68f6ad584ae827cc6c50a85efc5c68f9a2ff
        </Routes>
    );
}


export default DashboardNavigation;
