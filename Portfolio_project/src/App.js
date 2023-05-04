import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Work from './Pages/Work/Work';
import WorksDetail from './Pages/WorksDetail/WorksDetail';
import { Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu/NavMenu';
import Footer from './components/Footer/Footer';
import Mobile from './components/Mobile/Mobile';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';




function App() {

  const [active, setActive] = useState(false);


  function showMobile() {
  }

  return (
<div className='main_container'>
    <MobileMenu active={active} setActive={setActive}/>
    <Mobile active={active} setActive={setActive}/>
    <NavMenu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Work" element={<Work />}/>
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/Work/:id" element={<WorksDetail />}/>
      <Route path="/Contact" element={<Contact />} />
    </Routes>

    <Footer />

</div>
  );
}

export default App;
