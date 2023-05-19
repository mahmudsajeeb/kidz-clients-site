import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
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
    <a className="link link-hover">Facebook</a> 
    <a className="link link-hover">Linkedin</a> 
    <a className="link link-hover">Twitter</a> 
    
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