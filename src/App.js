
import { Routes, Route } from "react-router-dom";

import './App.css';


import Home from './components/Home';


import InvoiceUdaya2 from './components/InvoiceUdaya2';


function App() {
  return (
    <>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/invoice' element={<InvoiceUdaya2 />} />
       </Routes>
    </>
  );
}

export default App;
