import React from 'react'
const EditableRow = ({ editRowData, handleEditRowChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="serviceName"
          required="required"
          placeholder='enter service name'
          onChange={handleEditRowChange}
          value={editRowData.serviceName}
          
        />
      </td>
      <td>
        <input
          type="number"
          name="taxFreeAmt"
          required="required"
          placeholder='enter taxfree amount'
          onChange={handleEditRowChange}
          value={editRowData.taxFreeAmt}
        />
      </td>
      <td>
        <input
          type="number"
          name="taxPercentage"
          required="required"
          placeholder='enter tax percentage'
          onChange={handleEditRowChange}
          value={editRowData.taxPercentage}
        />
      </td>
      <td>
        <input
          type="number"
          name="tax"
          required="required"
          placeholder='tax'
          onChange={handleEditRowChange}
          //value={editRowData.tax}
          value="0"
        />
      </td>
      <td>
        <input
          type="number"
          name="totalAmt"
          required="required"
          placeholder='total amt'
          onChange={handleEditRowChange}
          //value={editRowData.totalAmt}
          value="0"
        />
      </td>
      <td>
        <button type="submit" >save</button>
      </td>
    </tr>
  )
}

export default EditableRow