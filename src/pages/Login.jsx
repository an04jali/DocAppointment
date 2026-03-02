import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Simple login simulation
    localStorage.setItem("token", "true");

    const appointmentData = localStorage.getItem("appointmentData");

    // If user came from booking page → go to payment
    if (appointmentData) {
      navigate("/payment");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-sm"
      >
        <div className="mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
            {state === "Sign Up" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            {state === "Sign Up"
              ? "Please sign up to book appointments"
              : "Please login to continue"}
          </p>
        </div>

        {state === "Sign Up" && (
          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="mt-5 text-center">
          <p className="text-gray-600 text-sm">
            {state === "Sign Up"
              ? "Already have an account? "
              : "Don't have an account? "}
            <button
              type="button"
              onClick={() =>
                setState(state === "Sign Up" ? "Login" : "Sign Up")
              }
              className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
            >
              {state === "Sign Up" ? "Login here" : "Sign up here"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;