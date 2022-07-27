import React from 'react';

const BlackButton = ({ name, onClick, icon }) => {
    return (
        <button type="submit" className="w-full text-white bg-[#1A202C] px-5 py-[15px] mb-4 rounded cursor-pointer flex justify-center" onClick={onClick}><span className="mr-2.5">{icon}</span>{name}</button>
    );
};

export default BlackButton;