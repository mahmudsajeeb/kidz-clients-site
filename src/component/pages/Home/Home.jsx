import React from 'react'
import useTitle from '../../../hook/UseTitle'
import Banner from './Banner' 
import ImagesGallery from './ImagesGallery'


function Home() {
  useTitle('home')
  return (
    <div>
    <Banner />
     <ImagesGallery />
     
    </div>
  )
}

export default Home