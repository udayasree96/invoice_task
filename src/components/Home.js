import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import './Home.css'
import AddInvoiceButton from './AddInvoiceButton';
import List from './List';

function Home() {
    
  return (
    
    <div className='container'>
        <div className='top-comp '>
                <List />
        </div>

        <div className='bottom-comp'>
                <AddInvoiceButton />
        </div>
    </div>
  )
}

export default Home