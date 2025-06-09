import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';

import Home from './page/Home';
import ContactUs from './page/ContactUs';
import ShoppableVideo from './page/ShoppableVideo'

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/shoppable-video" element={<ShoppableVideo />} /> 
      </Routes>
      <Footer />
    </>
  )
}


export default App
