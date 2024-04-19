import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes,Route,Navigate} from 'react-router-dom';
const App=()=>{
  return(
   <>
<BrowserRouter>
 <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/service" element={<Service />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="/"/>} />
  </Routes>
</BrowserRouter>  
   </>
  );
}

export default App;
