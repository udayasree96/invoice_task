import React from 'react'
import moment from 'moment'

const Details = ({invoice}) => {
  return (
    <div>
        <p> {invoice.senderCompany}</p>

<div align="right">
<h5>INVOICE</h5>
<h5>{moment().utcOffset('+05:30').format('DD-MM-YYYY ')}</h5>
<h5>{invoice.invoiceNumber}</h5>
</div>

<div>
    <h5>{invoice.senderName}</h5>
    <h5>{invoice.senderAddress}</h5>
    <h5>{invoice.senderPincode}-{invoice.senderCity}</h5>
    <h5>{invoice.senderPhno}</h5>
    <h5>{invoice.senderCompanyId}</h5>
</div>
<br/>
<div>
    <h5>{invoice.receiverName}</h5>
    <h5>{invoice.receiverAddress}</h5>
    <h5>{invoice.receiverPincode}-{invoice.receiverCity}</h5>
    <h5>{invoice.receiverPhno}</h5>
    <h5>{invoice.receiverCompanyId}</h5>
</div>
</div>
   
  )
}

export default Details