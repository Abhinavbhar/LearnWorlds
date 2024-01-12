import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col items-center min-h-screen py-2 bg-gray-100">
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-green-500">Learn Worlds</span>
          </div>
          <div className="py-10"> 
            <h2 className="text-3xl font-bold text-green-500 mb-2">
            Sign in to Account
            </h2>

            {/* Social Login Section */}

            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1 '>
                  <FaGoogle className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1 '>
                  <FaLinkedinIn className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1 '>
                  <FaFacebookF className='text-sm'/>
                </a>
            </div>

            {/* Email ID Login Section */}

          <p className='text-gray-400 my-3'>or use your email account</p>
            <div className='flex flex-col items-center'>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className='text-gray-400 mr-2'/>
                  <input type="email" name="email" placehoder="Email" className='bg-gray-100 outline-none text-sm'></input>
              </div>

              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <MdLockOutline className='text-gray-400 mr-2'/>
                  <input type="password" name="password" placehoder="Password" className='bg-gray-100 outline-none text-sm'></input>
              </div>

              <div className='flex w-64 justify-between mb-5 mt-1'>
                <label className='flex-items-center text-xs'><input type="checkbox" name="remember" className="mr-1"/>Remember me</label>
                  <a href="#" className="text-xs">Forgot Password?</a>
                </div>        
                <a href="#" className="border-2 border-green rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Sign In</a>     
            </div>
          </div>
        </div>

        {/*Second Panel */}

        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">Fill up your credentials to resume your journey with us </p>
              <Link to={'/user/signup'}>
              <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign up</a></Link>
          </div>
        </div>            
    </main>
    </div>
        </>
    );
}

export default Login;