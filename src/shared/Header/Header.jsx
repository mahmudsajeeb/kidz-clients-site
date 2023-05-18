import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders'

function Header() {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut =() =>{
    logOut()
    .then()
    .catch(error =>console.log(error.message))
  }
  return (
    <div>
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
         
        <li><a>About</a></li>
        <li><a>Login</a></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case font-semibold text-4xl text-orange-600">Kidz </Link>
    
     
  </div>
  {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li> 
      <li><a>About</a></li>
    </ul>
  </div> */}

  <div className="navbar-center   lg:flex">
          <ul className=" m-6 font-semibold flex px-1">
            <li>  
            <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-600"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
            </li>
            <li  className='ml-4'>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'text-orange-600' : 'default')}
            >
              Blog
            </NavLink>
            </li>
          
            

          </ul>
        </div>
  <div className="navbar-end "> 
     
    {
      user?.email ?  <Link onClick={handleLogOut} className='btn'  to="/">LogOut</Link> :  <Link className='btn'  to="/login">Login</Link>
    }
  </div>
  <div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {user &&  <img src={user.photoURL} />}
        </div>
      </label>
        </div>
</div>
    
    </div>
  )
}

export default Header