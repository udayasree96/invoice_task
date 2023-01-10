import React from 'react'

const ReadOnlyRow = ( {product,handleEditClick,handleDeleteClick}) => {
  return (
    <tr>
    <td>{product.serviceName}</td>
    <td>{product.taxFreeAmt}</td>
    <td>{product.taxPercentage}</td>
    <td>{product.taxFreeAmt*(product.taxPercentage/100)}</td>
    <td>{Number(product.taxFreeAmt)+Number(product.taxFreeAmt*(product.taxPercentage/100))}</td>
    <td>
      <button type="button" onClick={(e)=>handleEditClick(e,product)}>Edit</button> &nbsp;
      <button type="button" onClick={()=>handleDeleteClick(product.id)}>Delete</button>
    </td>
     </tr>
  )
}

export default ReadOnlyRow