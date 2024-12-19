import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      setCaptainData({ email, password })
  
      setEmail('')
      setPassword('')
  }  
  
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img
        className="w-20 mb-3"
        src="https://pngimg.com/d/uber_PNG24.png"
        alt=""
      />
      <form onSubmit={submitHandler}>
        <h3 className="text-lg mb-2 font-medium">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="john@gmail.com"
          required
        />

        <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="********"
          required
        />

        <button className="bg-[#111] hover:bg-black/80 text-white font-semibold mb-4 rounded-md px-4 py-2 w-full text-lg placeholder:text-base">
          Login
        </button>
      </form>
        <p className="text-center">Join a fleet? <Link to='/captain-signup' className="text-blue-600  hover:text-blue-800 hover:underline">Register as a Captain</Link></p>
    </div>

    <div>
      <Link to='/login' className="bg-[#e97b48] hover:bg-[#d36f41] flex items-center justify-center text-white font-semibold mb-5 rounded-md px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
    </div>
  </div>
  )
}

export default CaptainLogin