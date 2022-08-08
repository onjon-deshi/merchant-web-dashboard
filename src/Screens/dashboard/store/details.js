import { Link } from 'react-router-dom';
import DetailsTable from './details-table';


var pageName = "store";
const details = () => {
    return (
        <div className="custom-container w-full float-left px-8 py-10 flex font-montserrat ">
            <div className="block w-full pb-20 custom-scroll-auto">
                <DetailsTable></DetailsTable>
                <br />

                <Link to="/dashboard/store-table"><p className='custom-btn inline-block mx-2 ml-0'>Store Table</p></Link>
                <Link to="/dashboard/status-table"><p className='custom-btn inline-block mx-2'>Status Table</p></Link>
                <Link to="/dashboard/product-table"><p className='custom-btn inline-block mx-2'>Product Table</p></Link>


            </div>


        </div>
    );
}



export default details;