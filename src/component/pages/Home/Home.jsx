import React from 'react'
import useTitle from '../../../hook/UseTitle'
import Banner from './Banner'

function Home() {
  useTitle('home')
  return (
    <div>
    <Banner />
    
    </div>
  )
}

export default Home