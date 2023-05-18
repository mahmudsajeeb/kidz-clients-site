import React from 'react'
import useTitle from '../../../hook/UseTitle'
import Banner from './Banner' 
import ImagesGallery from './ImagesGallery'
import Product from './Product'
 
import BlogPost from './BlogPost'


function Home() {
  useTitle('home')
  return (
    <div>
    <Banner />
    <Product />
     <div className='max-w-7xl mx-auto'>
     <ImagesGallery />
     <BlogPost />
     </div>
     
     
    </div>
  )
}

export default Home