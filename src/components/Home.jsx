import  { useState } from 'react'
import Header from '../core/Header'

import Heading from '../shared/components/home/Heading'

import Footer from '../core/Footer'
import {  apisavesheetform } from '../shared/services/apisheet'
import toast from 'react-hot-toast'
import Organized from '../shared/components/home/Organized'
import Logoanddate from '../shared/components/home/Logoanddate'
import Welcomeicaset from '../shared/components/home/Welcomeicaset'
import Purposeicaset from '../shared/components/home/Purposeicaset'
import Officeimage from '../shared/components/home/Officeimage'
import Importantdates from '../shared/components/home/Importantdates'
import Features from '../shared/components/home/Features'
import Keynotespeaker from '../shared/components/home/Keynotespeaker'
import Sessionspeaker from '../shared/components/home/Sessionspeaker'
import Sessionchair from '../shared/components/home/Sessionchair'
import Publications from '../shared/components/home/Publications'
import Attendconference from '../shared/components/home/Attendconference'
import Updateform from '../shared/components/home/Updateform'
import Associates from '../shared/components/home/Associates'
import Objectives from '../shared/components/home/Objectives'


export default function Home() {
  const [formdata,setformdata]=useState({});
  const [loading,setloading]=useState(false);
  const handleChange=(e)=>setformdata({...formdata,[e.target.name]:e.target.value})
  const handlesave=async(e)=>{
    e.preventDefault();
    setloading(true);
    const res=await apisavesheetform({...formdata,Sheetname:"getupdatesform"});
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
      <Heading/>
      <Organized/>
      <Logoanddate/>
      <Welcomeicaset/>
      <Purposeicaset/>
      <Officeimage/>
      <Importantdates/>
      <Objectives/>
      <Features/>
      <Keynotespeaker/>
      <Sessionspeaker/>
      <Sessionchair/>
      <Publications/>
      <Attendconference/>
      <Updateform loading={loading} formdata={formdata} handleChange={handleChange} handlesave={handlesave}/>
      <Associates/>
      <Footer/>
      
    </div>
  )
}
