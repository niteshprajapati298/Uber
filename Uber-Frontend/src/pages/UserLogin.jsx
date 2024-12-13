import { Link } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });

    console.log(userData);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between bg-gray-100">
      <div>
        <img
          className="w-16 mb-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt="Uber Logo"
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
          New here?{' '}
          <Link to="/signup" className="text-gray-800 font-semibold hover:underline">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 mt-6"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
