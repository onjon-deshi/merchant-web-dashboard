import React from 'react';
import ButtonGroup from '../../../components/ButtonGroup';
import { Link, useNavigate } from "react-router-dom";

const StepFive = () => {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <div>
            <h1 className="font-bold text-4xl mb-8 ">Terms of Use & Privacy Policy</h1>
            <div className="bg-neutral-100 p-9 w-[35rem] ">
                <h5 className="font-bold mb-2">1. General Terms</h5>
                <p className="text-justify">By accessing and placing an order with you confirm that you are in greement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Under no circumstances shall team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.</p>
                <h5 className="font-bold mb-2 mt-4">2. License</h5>
                <p className="text-justify">By accessing and placing an order with you confirm that you are in greement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Under no circumstances shall team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.</p>
                <h5 className="font-bold mb-2 mt-4">3. General Terms</h5>
                <p className="text-justify">By accessing and placing an order with you confirm that you are in greement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Under no circumstances shall team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.</p>
                <ButtonGroup btnOneName="I’ve Read it & Agree with it" btnTwoName="Not Agreed, Take me Back" handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default StepFive;