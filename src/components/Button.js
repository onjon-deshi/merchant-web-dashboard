import React from 'react';

const Button = ({ name = "Continue", onClick }) => {
    return (
        <button type="submit" className="w-full text-white bg-primary p-3 mb-4 rounded cursor-pointer hover:bg-brand-dark" onClick={onClick}>{name}</button>
    );
};

export default Button;