import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
  <Link to="/" className="btn btn-ghost normal-case font-semibold text-4xl text-orange-600">Kidz </Link>
  
    <p>Kidz Industries Ltd.<br/>Providing reliable Products since 2002</p>
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
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    
    </div>
  )
}

export default Footer