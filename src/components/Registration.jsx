import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Header from '../core/Header';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Footer from '../core/Footer';
import ConferenceRegisteration from '../shared/components/Registration/ConferenceRegisteration';
import Bankdetails from '../shared/components/Registration/Bankdetails';


export default function Registration() {

   

    return (
        <div>
            <Header />

           < ConferenceRegisteration/>
           <Bankdetails/>
           <Footer/>
               






        </div>



    )
}


