
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../core/Header';
import Hero from '../shared/components/home/Hero';
import Footer from '../core/Footer';
import ContactUs from '../components/ContactUs';
import Registration from '../components/Registration';
import ScrollToTop from './ScrollToTop';
import AboutUs from '../components/AboutUs';




export default function Approuter() {
    return (
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/about' element={<AboutUs/>} />
          
          
          
        </Routes>
      </BrowserRouter>
    );
  }
  