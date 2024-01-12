import React from 'react'
import Navbar from './Navbar'
import Ask from './Ask'
import Footer from './Footer'
import Homepage from './Homepage'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Homepage></Homepage>
    <Ask></Ask>
    <Footer></Footer>
    </>
  )
}

export default Home