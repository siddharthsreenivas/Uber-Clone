import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center w-full flex pt-8 flex-col justify-between h-screen'>
        <img className='w-20 ml-8' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="" />
        <div className='bg-white py-4 pb-7 px-4'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center hover:bg-black/90 justify-center w-full bg-black rounded-md text-white py-3 mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home