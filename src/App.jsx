import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';

import Home from './page/Home';
import ContactUs from './page/ContactUs';
<<<<<<< HEAD
import Solutions from './page/Solutions';
=======
import ShoppableVideo from './page/ShoppableVideo'
>>>>>>> 49d95ba04798875813081351ac607ccc2d1f398b

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
<<<<<<< HEAD
        <Route path="/solutions" element={<Solutions />} /> 
=======
        <Route path="/shoppable-video" element={<ShoppableVideo />} /> 
>>>>>>> 49d95ba04798875813081351ac607ccc2d1f398b
      </Routes>
      <Footer />
    </>
  )
}


export default App
