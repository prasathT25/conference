import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../core/Header';
import Hero from '../shared/components/home/Hero';
import Footer from '../core/Footer';
import ContactUs from '../components/ContactUs';
import Registration from '../components/Registration';




export default function Approuter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/registration' element={<Registration/>} />
          
          
          
        </Routes>
      </BrowserRouter>
    );
  }
  