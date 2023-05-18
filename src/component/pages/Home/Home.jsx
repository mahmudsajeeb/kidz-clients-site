import React from 'react'
import useTitle from '../../../hook/UseTitle'
import Banner from './Banner' 
import ImagesGallery from './ImagesGallery'
import Product from './Product'


function Home() {
  useTitle('home')
  return (
    <div>
    <Banner />
    <Product />
     <ImagesGallery />
     
    </div>
  )
}

export default Home