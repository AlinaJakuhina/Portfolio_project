import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Work from './Pages/Work/Work';
import WorksDetail from './Pages/WorksDetail/WorksDetail';
import { Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu/NavMenu';
import Footer from './components/Footer/Footer';
import Contacts from './Pages/Contact/Contact';




function App() {


  return (
<div className='main_container'>
    <NavMenu />
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/work" element={<Work />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/work/:id" element={<WorksDetail />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer />

</div>
  );
}

export default App;
