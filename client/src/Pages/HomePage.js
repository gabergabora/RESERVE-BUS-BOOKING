import React from 'react'
import NavBar from '../Components/NavBar'
import Main from '../Components/homePageComponents/Main'
import Features from '../Components/homePageComponents/Features'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <div>
        <NavBar/>
        <Main/>
        <Features/>
        <Footer/>
    </div>
  )
}
