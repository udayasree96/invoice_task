
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';



import './InvoiceUdaya.css'

import ProductsTable2 from './ProductsTable2';
import Details from './Details'


function Invoice() {
    const direct = useNavigate();
    let reg_name = new RegExp('^[A-Za-z]+\\s?[a-zA-Z]*$');
    let reg_number = new RegExp(/^[0-9\b]+$/)


    const [invoice, setInvoice] = useState({
        memberId: '',
        invoiceNumber: '',
        senderCompany: '',
        senderName: '',
        senderAddress: '',
        senderCity: '',
        senderPincode: '',
        senderPhno: '',
        senderCompanyId: '',
        receiverCompany: '',
        receiverName: '',
        receiverAddress: '',
        receiverCity: '',
        receiverPincode: '',
        receiverPhno: '',
        receiverCompanyId: '',
    })

    const changeHandlerText = e => {
        if(e.target.type === "text"){
            
            setInvoice({...invoice, [e.target.name]: e.target.value });

        }
        else{
        if (reg_name.test(e.target.value)) {
            console.log(e.target.value)
            setInvoice({...invoice, [e.target.name]: e.target.value });
            console.log(invoice);
        }
        else {
            alert("only characters")
        }
    }
    }

    const changeHandler = e => {
        if (reg_number.test(e.target.value)) {
            console.log(e.target.value)
            setInvoice({...invoice, [e.target.name]: e.target.value });
            console.log(invoice);
        }
        else {
            alert("only numbers")
        }
    }
    const printHandler=()=>{
        window.print(); 
        
        direct("/")

    }
   
   return (
        
        <div id='container'>
            
            
            <div className='left-comp'>
                <h3>Member</h3>

                <label>Id</label><br />
                <input type="number" name="memberId" value={invoice.memberId} onChange={changeHandler}  /><br />


                <label>Invoice Number</label><br />
                <input type="number" name="invoiceNumber" value={invoice.invoiceNumber} onChange={changeHandler} /><br />

                <h3>Sender</h3>
                <label>Company</label><br />
                <input type="text" name="senderCompany" value={invoice.senderCompany} onChange={changeHandlerText}  /> <br />

                <label>Name</label><br />
                <input type="text" name="senderName" value={invoice.senderName} onChange={changeHandlerText}  /><br />


                <label>Address</label><br />
                <input type="text" name="senderAddress" value={invoice.senderAddress} onChange={changeHandlerText}  /><br />

                <label>City</label><br />
                <input type="text" name="senderCity" value={invoice.senderCity} onChange={changeHandlerText} /><br />

                <label>Postal code</label><br />
                <input type="number" name="senderPincode" value={invoice.senderPincode} onChange={changeHandler}  /><br />

                <label>Phone</label><br />
                <input type="number" name="senderPhno" value={invoice.senderPhno} onChange={changeHandler}  /><br />

                <label>Company Id</label><br />
                <input type="number" name="senderCompanyId" value={invoice.senderCompanyId} onChange={changeHandler}  /><br />



                <h3>Recipient</h3>

                <label>Company</label><br />
                <input type="text" name="receiverCompany" value={invoice.receiverCompany} onChange={changeHandlerText} id="receiverCompany" /> <br />


                <label>Name</label><br />
                <input type="text" name="receiverName" value={invoice.receiverName} onChange={changeHandlerText} id="receiverName" /><br />


                <label>Address</label><br />
                <input type="text" name="receiverAddress" value={invoice.receiverAddress} onChange={changeHandlerText} id="receiverAddress" /><br />

                <label>City</label><br />
                <input type="text" name="receiverCity" value={invoice.receiverCity} onChange={changeHandlerText} id="receiverCity" /><br />


                <label>Postal code</label><br />
                <input type="number" name="receiverPincode" value={invoice.receiverPincode} onChange={changeHandler} id="receiverPincode" /><br />

                <label>Phone</label><br />
                <input type="number" name="receiverPhno" value={invoice.receiverPhno} onChange={changeHandler} id="receiverPhno" /><br />


                <label>Company Id</label><br />
                <input type="number" name="receiverCompanyId" value={invoice.receiverCompanyId} onChange={changeHandler} id="receiverCompanyId" /><br />


            </div>
            
            
            <div className='right-comp'>
                <div className="details">

                    <Details invoice={invoice} />
                    </div>
                
                <br/>
                <h4>products/services/details</h4>
                
                <div className='products'>
                    <ProductsTable2 />
                </div>
                <button onClick={printHandler}>print</button>
            </div>
            
            
            
        </div>



    )
}

export default Invoice


