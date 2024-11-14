import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import validateForm from '../../utils/validateForm'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [error, setError] = useState(null)

  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleOnClick = () => {
    const validateMsg = validateForm({email: email.current.value, password: password.current.value})
    setError(validateMsg)
  }

  return (
    <div>
      <Header />
      <div className="w-full min-h-screen inset-0 bg-cover bg-center flex justify-center items-center md:px-0 px-4"
        style={{
          backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg')",
        }}>
        <div className='bg-customBlack md:p-14 p-10 text-white text-left flex flex-col justify-center items-center rounded-lg opacity-80'>
          <h1 className='text-left font-bold text-2xl md:text-4xl mb-4 md:mb-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input  type='text' placeholder='Email Full Name' className='p-2 m-2 w-full bg-gray-800 outline-none mb-2' />}  
          <input ref={email} type='email' placeholder='Email or mobile number' className='p-2 m-2 w-full bg-gray-800 outline-none mb-2' />
          <input ref={password} type='password' placeholder='Password' className='p-2 mt-2 w-full bg-gray-800 outline-none' /> <br />
          {error && <div className='w-full'><p className='text-red-600 font-medium mb-2'>{error}</p></div>}
          <button onClick={handleOnClick} className='w-full bg-buttonRed hover:bg-red-800 md:p-2 p-1 rounded-md font-semibold'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p onClick={toggleSignInForm} className='md:mt-4 mt-2'>{isSignInForm ? "New to Netflix?" : "Already registered?"} <span className='font-bold cursor-pointer hover:text-blue-400'>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</span></p>
        </div>
      </div>

    </div>
  )
}

export default Login