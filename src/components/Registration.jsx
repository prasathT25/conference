import  { useState } from 'react';


import Header from '../core/Header';

import 'react-phone-input-2/lib/style.css';
import Footer from '../core/Footer';
import ConferenceRegisteration from '../shared/components/Registration/ConferenceRegisteration';

import {  apisavesheetform } from '../shared/services/apisheet'
import toast from 'react-hot-toast'
import Registerfee from '../shared/components/Registration/Registerfee';
import Proceedings from '../shared/components/Registration/Proceedings';
import Conferencetitle from '../shared/components/Registration/Conferencetitle';
import OnlineRegistrationform from '../shared/components/Registration/OnlineRegistrationform';
import Bankdetail from '../shared/components/Registration/Bankdetail';
import Conferencelocation from '../shared/components/Registration/Conferencelocation';


export default function Registration() {
    const [formdata,setformdata]=useState({});
  const [loading,setloading]=useState(false);
  const handlechange=(e)=>setformdata({...formdata,[e.target.name]:e.target.value})
  const handlesave=async(e)=>{
    e.preventDefault();
    setloading(true);
    const res=await apisavesheetform(formdata);
    if(res.result=="Insertion successful"){
      toast.success("Form submitted successfully")
      setformdata({})
    }
    else{
    toast.error("Form submission failed")
    }
    setloading(false);
  }
   

    return (
        <div>
            <Header />

           < ConferenceRegisteration/>
           <Registerfee/>
           <Proceedings/>
           <Conferencetitle/>
           <OnlineRegistrationform loading={loading} formdata={formdata}  setformdata={setformdata}  handlechange={handlechange} handlesave={handlesave}/>
           <Bankdetail/>
           <Conferencelocation/>
           <Footer/>
               






        </div>



    )
}


