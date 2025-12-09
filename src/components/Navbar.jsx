import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(false); // false = not logged in
  const [showMenu, setShowMenu] = useState(false);

  // Simulate login success — in your actual login page, set token true after authentication
  const handleLoginSuccess = () => {
    setToken(true);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 border-b bg-white shadow-md">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-blue-600 cursor-pointer"
      >
        Dr. Anu Barwal
      </div>

      {/* When user is not logged in */}
      {!token && (
        <ul className="hidden md:flex gap-6 items-center font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/doctor-details"
              className="hover:text-blue-600 transition duration-200"
            >
              Doctor's Details
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            {/* Create Account → navigates to login page */}
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>
          </li>
        </ul>
      )}

      {/* When user is logged in */}
      {token && (
        <div className="relative flex items-center">
          {/* User avatar */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition"
          >
            AS
          </button>

          {/* Dropdown menu */}
          {showMenu && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
              <ul className="flex flex-col text-gray-700">
                <li>
                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Appointments
                  </button>
                </li>
                <hr className="my-1" />
                <li>
                  <button
                    onClick={() => {
                      setToken(false);
                      setShowMenu(false);
                      navigate("/");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div> 
      )}
    </nav>
  );
};

export default Navbar;
