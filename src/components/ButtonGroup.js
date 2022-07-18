import React from 'react';

const ButtonGroup = ({ btnOneName = "Continue", btnTwoName }) => {
    return (
        <div className="mt-5">
            <button type="submit" className="w-full text-white bg-primary p-3 mb-3 rounded cursor-pointer" >{btnOneName}</button>
            <button type="submit" className="w-full text-primary bg-white p-3 mb-4 rounded cursor-pointer" >{btnTwoName}</button>
        </div>
    );
};

export default ButtonGroup;