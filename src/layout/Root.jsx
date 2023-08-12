import React from 'react'
import { Footer, Navbar } from '../components'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <>
        <Navbar />
        <Outlet />        
        <Footer />
    </>
  )
}

export default Root