import React from 'react'
import Header from '../shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'

function Main() {
  return (
    <div>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Main