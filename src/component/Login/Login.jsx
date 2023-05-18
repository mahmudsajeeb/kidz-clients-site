import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };
  return (
    <div className='grid lg:grid-cols-2 '>
    
    <div>
      <img src="https://static-01.daraz.com.bd/p/98322e69263ae0b66e90fc5d2da0bcd5.jpg" alt="" />
    </div>

    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-16 pt-16 pb-16 mb-8 max-w-xl w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
        
          
        </div>
        <p><span>If you don't have Account?</span><Link to='/signin'> <span className='underline font-semibold'>SignIn</span></Link></p>
      </form>
    </div>
    
    </div>
  )
}

export default Login