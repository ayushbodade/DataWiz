import React from 'react'
import Companies from '../../components/Companies/Companies'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Value from '../../components/Value/Value'
import '../../index.css'

const HomePage = () => {
  return (
    <div className='App'>
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Companies />
      {/* <Residencies/> */}
      <Value />
      <Contact/>
      {/* <GetStarted/> */}
      <Footer/>
    </div>
  )
}

export default HomePage
