
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddInvoiceButton() {

    const direct = useNavigate();

    const clickHandler = () => {
        direct("/invoice")
    }
    return (
        <div>
            <button className='button_container' onClick={clickHandler}>Add Invoice</button>
        </div>
    )
}

export default AddInvoiceButton