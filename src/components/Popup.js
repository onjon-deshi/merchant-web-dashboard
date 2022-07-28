import React from 'react';

const Popup = (props) => {

    return (
        <div className="fixed bg-[#00000050] w-full h-screen top-0 left-0">
            <div className=" relative w-[27%] min-w-fit m-auto max-h-[70vh] bg-white rounded border-solid border-ash overflow-auto mt-40">
                {/* <span className="close-icon" onClick={props.handleClose}>x</span> */}
                {props.content}
            </div>
        </div>
    );
};

export default Popup;