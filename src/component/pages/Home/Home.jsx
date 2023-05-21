import React, { useEffect } from 'react'
import useTitle from '../../../hook/UseTitle'
import Banner from './Banner' 
import ImagesGallery from './ImagesGallery'
import Product from './Product'
 
import BlogPost from './BlogPost'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useTitle('home')

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      easing: 'ease-in-out',  // Animation easing
      once: true,  // Whether to trigger animations only once
    });
  }, []);
  
  return (
    <div>
    <div  data-aos="fade-up">
    <Banner />
    </div>
    <div data-aos="fade-right">
    <Product />
    </div>
    
     <div data-aos="fade-left" className='max-w-7xl mx-auto'>
     <ImagesGallery />
     
     </div>
     <div data-aos="fade-right" className='max-w-7xl mx-auto'>
     <BlogPost />
     
     </div>
     
     
     
    </div>
  )
}

export default Home