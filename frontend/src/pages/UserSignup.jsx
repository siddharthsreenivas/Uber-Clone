import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";


const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext);
  // console.log(user,setUser);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    }
  
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (res.status === 201) {
      const data = res.data;

      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg mb-2 font-medium">What's your name</h3>
            <div className="flex gap-4 mb-6">
              <input
                className="bg-[#eeeeee]  w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <input
                className="bg-[#eeeeee]  w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <h3 className="text-lg mb-2 font-medium">What's your email</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="bg-[#111] hover:bg-black/80 text-white font-semibold mb-4 rounded-md px-4 py-2 w-full text-base">
              Create Account
            </button>
          </form>
          <p className="text-center">
            Already have a account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>

        <div>
          <p className="text-xs leading-tight">
            This site is protected by reCAPTCHA and the <span className="underline"> Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
