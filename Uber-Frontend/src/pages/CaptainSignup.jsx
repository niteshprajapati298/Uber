import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate= useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if(response.status===201){
     const data = response.data;
     setCaptain(data.captain)
     localStorage.setItem('token',data.token);
     navigate('/captain-home')
    }
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between bg-gray-100">
      <div>
        <img
          className="w-20 mb-6"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Captain Logo"
        />
        <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg mb-4 font-semibold text-gray-800">What's our Captain's name?</h3>
          <div className="flex gap-4 mb-4">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm"
              type="text"
              placeholder="First name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm"
              type="text"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg mb-4 font-semibold text-gray-800">What's our Captain's email?</h3>
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
          <h3 className="text-lg mb-4 font-semibold text-gray-800">Vehicle Details</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm"
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm"
              type="text"
              placeholder="Vehicle Plate Number"
            />
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm"
              type="number"
              placeholder="Vehicle Capacity"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-gray-50 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm"
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="moto">Moto</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <button
            className="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-gray-800 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
      <div className="text-gray-500 text-xs text-center leading-tight mt-6">
       This site is protected by reCAPTCHA and the <span className="underline">Google privacy Policy</span> and <span className="underline">Terms of Service apply</span>.
      </div>
    </div>
  );
}

export default CaptainSignup;
