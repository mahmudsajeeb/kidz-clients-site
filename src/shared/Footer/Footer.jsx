import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      easing: 'ease-in-out',  // Animation easing
      once: true,  // Whether to trigger animations only once
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
  <Link to="/" className="btn btn-ghost normal-case font-semibold text-4xl text-orange-600">Kidz </Link>
  
  <p className='text-center  '>Copyright © 20223 All rights reserved. Powered by Kidz.</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Musical Toys</a> 
    <a className="link link-hover">Arts and Crafts Toys, 
</a> 
    <a className="link link-hover">Video game toys</a> 
    <a className="link link-hover">Toy Cars</a>
  </div> 
  <div>
   
    <p className="text-xl">Social Media</p> 
    <Link to="https://www.facebook.com/mahmud.ssajib" className="link link-hover">Facebook</Link> 
    <Link to="https://www.linkedin.com/in/mahmmud-sajib-a262ba166/" className="link link-hover">Linkedin</Link> 
    <Link to="https://twitter.com/Mahmudseejib"  className="link link-hover">Twitter</Link> 
    
  </div> 
  <div>
  <span className="footer-title">Contact Us</span> 
    <p>Email: saifurrahmansajib37@gmail.com</p>
    <p>Phone Number: 01928489393</p>
  </div>
  <div>
  <span className="footer-title">Address</span> 
    <a className="link link-hover">Road-4,House-33,Sector-11.Uttara,Dhaka</a> 
  </div>
</footer>
    
    </div>
  )
}

export default Footer