import { Link } from "react-router-dom";
import { useState } from "react";
const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    console.log(userData);
    setFirstName('');
    setLastName('');
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

export default CaptainSignup
