import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM"
];

  const handleBookAppointment = () => {
    if (!selectedDay || !selectedTime) {
      alert("Please select day and time");
      return;
    }

    const token = localStorage.getItem("token");

    // Save selected slot
    localStorage.setItem(
      "appointmentData",
      JSON.stringify({ selectedDay, selectedTime })
    );

    if (!token) {
      navigate("/login");
    } else {
      navigate("/payment");
    }
  };

  return (
    <div className="min-h-screen p-10 bg-blue-50">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>

      <h3 className="font-semibold mb-3">Select Day:</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded border ${
              selectedDay === day ? "bg-blue-500 text-white" : ""
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <h3 className="font-semibold mb-3">Select Time Slot:</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(time)}
            className={`px-4 py-2 rounded border ${
              selectedTime === time ? "bg-blue-500 text-white" : ""
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <button
        onClick={handleBookAppointment}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default DoctorDetails;