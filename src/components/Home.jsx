import React from 'react'
import Header from '../core/Header'
import Hero from '../shared/components/home/Hero'
import Heading from '../shared/components/home/Heading'
import Firstmiddle from '../shared/components/home/Firstmiddle'
import Secondmiddle from '../shared/components/home/Secondmiddle'
import Lastpart from '../shared/components/home/Lastpart'
import Footer from '../core/Footer'


export default function Home() {
  return (
    <div>
      <Header />
      <Heading/>
      <Firstmiddle/>
      <Secondmiddle/>
      <Lastpart/>
      <Footer/>
      
    </div>
  )
}
