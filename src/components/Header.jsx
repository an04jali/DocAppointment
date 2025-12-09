import React from "react";
import doc from "../assets/doc.png"; // Doctor image
import appointmentIcon from "../assets/appointment_icon.png"; // Appointment icon
import emergencyIcon from "../assets/emergency_icon1.png"; // Emergency icon

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      {/* -------- Top Banner Section -------- */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 min-h-screen">
        {/* ---------- Left Section ---------- */}
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

          {/* Centered Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition"
            >
              Make an Appointment
            </a>
          </div>
        </div>

        {/* ---------- Right Section (Doctor Image) ---------- */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={doc} // Correct image reference
            alt="Doctor"
            className="w-96 h-auto object-cover rounded-lg shadow-xl border-4 border-blue-100"
          />
        </div>
      </div>

      {/* -------- Info Cards Section -------- */}
      <div className="grid md:grid-cols-3 gap-6 px-8 md:px-16 -mt-12 relative z-10 pb-16">
        {/* Why Choose Us */}
        <div className="bg-blue-400 text-white p-6 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl cursor-pointer">
          <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
          <p className="text-sm leading-relaxed">
            Trusted healthcare with experienced doctors, modern facilities, and
            24/7 support to ensure your well-being.
          </p>
        </div>

        {/* Appointment */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition hover:scale-105 hover:shadow-xl cursor-pointer">
          <img
            src={appointmentIcon}
            alt="Appointment Icon"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-800">Appointment</h3>
          <p className="text-gray-600 mt-2">24 Hours Service</p>
        </div>

        {/* Emergency Cases */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition hover:scale-105 hover:shadow-xl cursor-pointer">
          <img
            src={emergencyIcon}
            alt="Emergency Icon"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-gray-800">Emergency Cases</h3>
          <p className="text-gray-600 mt-2">+91 123456789</p>
        </div>

        {/* Working Hours */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center md:col-span-3 transform transition hover:scale-105 hover:shadow-xl cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
          <p className="text-gray-600 mt-2">
            Mon - Sat: 9:00 AM - 2:00 PM, 5:00 PM - 9:00 PM <br /> Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
