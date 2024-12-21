import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault()
    
    const userData = {
      email,
      password
    }

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if (res.status === 200) {
      const data = res.data;

      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate("/home");
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
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
          <p className="text-center">New here? <Link to='/signup' className="text-blue-600 hover:text-blue-800 hover:underline">Create new Account</Link></p>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#10b461] hover:bg-[#43bd80] flex items-center justify-center text-white font-semibold mb-5 rounded-md px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
