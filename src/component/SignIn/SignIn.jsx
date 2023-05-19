import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import useTitle from '../../hook/UseTitle';

function SignIn() {
  useTitle("Sign In")
  const {user,createUser} = useContext(AuthContext)
  const handleSubmit = (e) => {
 
    e.preventDefault()
     
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value; 
    const password = form.password.value;
    form.reset()
    
     createUser(email, password)
      .then(result => {
        const createUser = result.user
        const photoURL = user.photoURL;
        console.log(createUser,photoURL)
         
      })
      .catch(error => {
          console.log(error.message)
      
      })
      console.log(name,photo,email,password) 
  };
  return (
    <div className='grid lg:grid-cols-2'>
     <div>
     <div >
      <img src="https://static-01.daraz.com.bd/p/98322e69263ae0b66e90fc5d2da0bcd5.jpg" alt="" />
    </div>
     </div>

     <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-16 pt-16 pb-16 mb-8 max-w-xl w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            required
            name='name'
          />
        </div>
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
            name='email'
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
            name='password'
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          >
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="url"
            placeholder="Photo URL"
            required
            name='photo'
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>

        <p><span>If you have already Account?</span><Link to='/login'><span className='underline font-semibold'>Login</span></Link></p>
      </form>
    </div>
    
    </div>
  )
}

export default SignIn