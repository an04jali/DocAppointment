import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // refresh navbar
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

      {/* Menu Items - ALWAYS VISIBLE */}
      <ul className="hidden md:flex gap-6 items-center font-medium text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/doctor-details" className="hover:text-blue-600">
            Slot Booking
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600">
            About Doctor
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </li>

        {/* Conditional Button */}
        {!token ? (
          <li>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;