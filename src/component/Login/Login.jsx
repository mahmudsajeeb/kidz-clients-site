import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

function Login() {

  const {user,signIn,signInGoogle} =useContext(AuthContext)

 
  const handleLogin =(e)=>{
    e.preventDefault()
    const form = e.target; 
    const email = form.email.value; 
    const password = form.password.value;
    console.log( email,password)
     
    signIn(email,password)
    .then(result =>{
      const loginuser = result.user;
      console.log(loginuser)
      
    }).catch(error =>{
      console.log(error.message)
    })
  }
  const signInWithGoogle = () => {
    signInGoogle()
        .then(res => {
            const loggedUser = res.user;
             
            
        })
        .catch(error => {
            console.log(error.message)
        })
}
 
  
  return (
    <div className='grid lg:grid-cols-2 '>
    
    <div>
      <img src="https://static-01.daraz.com.bd/p/98322e69263ae0b66e90fc5d2da0bcd5.jpg" alt="" />
    </div>

    <div className="flex justify-center items-center h-screen">
    <div>
  
      <form
        className="bg-white shadow-md rounded px-16 pt-16 pb-16 mb-8 max-w-xl w-full"
        onSubmit={handleLogin}
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
            required name='email'
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
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
         
        
          
        </div>
        <p><span>If you don't have Account?</span><Link to='/signin'> <span className='underline font-semibold'>SignIn</span></Link></p>

        <button onClick={signInWithGoogle}
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Log in With Google
          </button>
      </form>
     

              
    </div>
    </div>
    
    </div>
  )
}

export default Login