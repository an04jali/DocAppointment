import React from "react";
import { useNavigate } from "react-router-dom";
import doc from "../assets/doc.png";
import appointmentIcon from "../assets/appointment_icon.png";
import emergencyIcon from "../assets/emergency_icon1.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 min-h-screen">
        
        <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
          <p className="text-blue-400 font-semibold uppercase text-sm tracking-wide">
            Total Health Care Solution
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Your Most Trusted <br />
            <span className="text-blue-500">Health Partner</span>
          </h1>

          <p className="text-gray-600 text-base max-w-md">
            A step towards better health starts with a simple appointment
          </p>

          <div>
            <button
              onClick={() => navigate("/doctor-details")}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Make an Appointment
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={doc}
            alt="Doctor"
            className="w-96 h-auto object-cover rounded-lg shadow-xl border-4 border-blue-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;