import React from 'react';
import { ReactComponent as CloseBtn } from '../../../assets/icons/close.svg'

const Invoice = () => {
    return (
        <div>
            <header className="flex justify-between">
                <CloseBtn />
                <p>New Invoice</p>
                <div>
                    <button>Show Preview</button>
                    <button>Save as Draft</button>
                    <button>Send</button>
                </div>

            </header>
        </div>
    );
};

export default Invoice;