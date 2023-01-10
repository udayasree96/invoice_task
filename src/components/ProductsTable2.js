import { nanoid } from 'nanoid';

import React, { useState, Fragment } from 'react';


import './ProductsTable.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

function ProductsTable() {
   
    const [products, setProducts] = useState([])  //for table data storing
    const [show,setShow]=useState(false)

    //add servic ebutton state,on change,on Submit
    const [addServiceData, setAddServiceData] = useState({     //for add service  [form] data storing
        serviceName: '',
        taxFreeAmt: '',
        taxPercentage: '',
        tax: '',
        totalAmt: ''
    })
    const [vtaxFreeAmt, setVtaxFreeAmt] = useState(0);
    const [vtax,setVtax]=useState(0);
    const [vtotal,setVtotal]=useState(0);
    const [vtaxper,setVtaxper]=useState(0);
    const [vtaxperSum,setVtaxperSum]=useState(0);
    const [counter,setCounter]=useState(1);

        



    const [editProductId, setEditProductId] = useState(null);

    const handleAddServiceChange = e => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;
        const newServiceData = { ...addServiceData };
        
        newServiceData[fieldName] = fieldValue;

        setAddServiceData(newServiceData);
    }
    const handleAddServiceSubmit = e => {
        e.preventDefault();
        const newProduct = {
            id: nanoid(),
            serviceName: addServiceData.serviceName,
            taxFreeAmt: addServiceData.taxFreeAmt,
            taxPercentage: addServiceData.taxPercentage,
            tax: addServiceData.tax,
            totalAmt: addServiceData.totalAmt,
        };
        setCounter(parseInt(counter+1));
        console.log(counter);
        console.log(newProduct.id);
        console.log(addServiceData.taxFreeAmt);
        console.log(addServiceData.taxPercentage);
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
        setShow(!show);
        console.log(addServiceData.tax);
        setVtaxFreeAmt(parseInt(vtaxFreeAmt)+parseInt(addServiceData.taxFreeAmt));
        console.log(( parseFloat(vtaxper)+(parseFloat(addServiceData.taxPercentage))));
        setVtaxperSum( parseFloat(vtaxper)+(parseFloat(addServiceData.taxPercentage)));
        setVtaxper(parseFloat(parseFloat(vtaxperSum)+(parseFloat(addServiceData.taxPercentage)))/counter);
        console.log(addServiceData.totalAmt);
        console.log(newProducts);
        setVtax(vtax+parseFloat(addServiceData.taxFreeAmt*(addServiceData.taxPercentage/100)));
        setVtotal(vtotal+Number(addServiceData.taxFreeAmt)+Number(addServiceData.taxFreeAmt*(addServiceData.taxPercentage/100)));
        
        

    }

    //add service button handles end

    //edit row state,on change,on Submit start
    const [editRowData, setEditRowData] = useState({
        serviceName: '',
        taxFreeAmt: '',
        taxPercentage: '',
        tax: '',
        totalAmt: ''
    })
    const handleEditRowChange = e => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newServiceData = { ...editRowData };
        newServiceData[fieldName] = fieldValue;
        setEditRowData(newServiceData);

    }
    const handleEditRowSubmit = e => {
        e.preventDefault();
        const editedProduct = {
            id:editProductId,
            serviceName: editRowData.serviceName,
            taxFreeAmt: editRowData.taxFreeAmt,
            taxPercentage: editRowData.taxPercentage,
            //tax: editRowData.tax,
            tax:editRowData.taxFreeAmt*(editRowData.taxPercentage/100),
            //totalAmt: editRowData.totalAmt,
            totalAmt:Number(editRowData.taxFreeAmt)+Number(editRowData.taxFreeAmt*(editRowData.taxPercentage/100))

        }
        const newProducts=[...products];
        const index=products.findIndex((product)=>product.id ===editProductId);
        newProducts[index]=editedProduct;
        setProducts(newProducts);
        setEditProductId(null);


    }
    //edit row state,on change,on Submit END END END


    //for edit button
    const handleEditClick = (e, product) => {
        e.preventDefault();
        setEditProductId(product.id);
        const formValues = {
            serviceName: product.serviceName,
            taxFreeAmt: product.taxFreeAmt,
            taxPercentage: product.taxPercentage,
            tax: product.tax,
            totalAmt: product.totalAmt,
        }
        setEditRowData(formValues)
    }
    //for delete button
    const handleDeleteClick=(productId)=>{
        const newProducts=[...products]
        const index=products.findIndex((product)=>product.id ===productId);
        newProducts.splice(index,1)
        setProducts(newProducts);
    }
    
    return (
        <div className='table-container'>
            <form onSubmit={handleEditRowSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Tax Free Amount</th>
                            <th>Tax %</th>
                            <th>Tax</th>
                            <th>Total Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Fragment>
                                {editProductId === product.id ? (
                                    <EditableRow editRowData={editRowData}
                                        handleEditRowChange={handleEditRowChange}
                                    />
                                ) : (
                                    <ReadOnlyRow product={product}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>

                        ))}

                    </tbody>
                    <tr>
                        <th>total  &nbsp; &nbsp; &nbsp; </th>
                        <th>{vtaxFreeAmt}</th>
                        <th>{vtaxper}</th>
                        <th>{vtax}</th>
                        <th>{vtotal}</th>
                        <th>---</th>
                    </tr>
                    </table>
                   
            </form>
            <button  className="addservicebutton" type="button" onClick={()=>setShow(!show)}>add service</button>
            {show && <div className='addServiceForm'>

                <form onSubmit={handleAddServiceSubmit}>
                    <label>serviceName:</label>
                    <input
                        type="text"
                        name="serviceName"
                        required="required"
                        placeholder='enter service name'
                        onChange={handleAddServiceChange}
                    />

                    <label>Tax free amount:</label>
                    <input
                        type="number"
                        name="taxFreeAmt"
                        required="required"
                        placeholder='enter tax free amount'
                        onChange={handleAddServiceChange}
                    />

                    <label>tax percentage:</label>
                    <input
                        type="number"
                        name="taxPercentage"
                        required="required"
                        placeholder='enter tax percentage'
                        onChange={handleAddServiceChange}
                    />

                    <label>tax:    </label>
                    <input
                        type="number"
                        name="tax"
                        required="required"
                        onChange={handleAddServiceChange}
                        value="0"

                    />

                    <label>totalAmt:  &nbsp; </label>
                    <input
                        type="number"
                        name="totalAmt"
                        required="required"
                        onChange={handleAddServiceChange}
                        value="0"

                    />
                    <br/>
                    <button type="submit" onSubmit={handleAddServiceSubmit}>ADD SERVICE</button>

                </form>
            </div>}
            
            </div>
    )
}

export default ProductsTable