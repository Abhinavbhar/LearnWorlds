import React from 'react'
import { Link } from 'react-router-dom'


function Ask() {
  return (
    <>
    <div className='h-full w-full mt-40 bg-[#F6F6F6]'>
        <h3 className='ml-80 text-5xl text-center mr-80'>You are a ...</h3>
        <div className='text-2xl text-center mt-40'>
        
        <Link to={'user/login'}>
        <button className="px-8 py-4 text-black bg-white rounded-lg text-lg border border-black hover:bg-gray-200 mr-40 h-[200%] w-[10%]">
                Learner
              </button>
        </Link>
              
        
        <Link to={'/admin/login'}>
        <button className="px-8 py-4 text-black bg-white rounded-lg text-lg border border-black hover:bg-gray-200 h-[20%] w-[10%]">
                Creator
              </button>
        </Link>  </div>
                    
    </div>
    </>
  )
}

export default Ask