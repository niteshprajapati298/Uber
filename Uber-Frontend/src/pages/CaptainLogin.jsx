import { Link ,useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});
  const {captain,setCaptain} = React.useContext(CaptainDataContext)
  const navigate = useNavigate();
  const submitHandler =async (e) => {
    e.preventDefault();

    const captain = {
      email: email,
      password: password,
    };

   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
    if (response.status===200) {
      const data = response.data;
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between bg-gray-100">
      <div>
        <img
          className="w-20 mb-6"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Captain Logo"
        />
        <form onSubmit={(e) => submitHandler(e)} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg mb-4 font-semibold text-gray-800">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm mb-4"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-4 font-semibold text-gray-800">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm mb-6"
            type="password"
            placeholder="Password"
          />
          <button
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-gray-600">
          Join a fleet?{' '}
          <Link to="/captain-signup" className="text-gray-800 font-semibold hover:underline">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 mt-6"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
