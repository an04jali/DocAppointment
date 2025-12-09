import React, { useState } from "react";
import anu_dii from "../assets/anu_dii.jpg";  // doctor photo
import verify_icon from "../assets/verify_icon.png"; // verification icon

const DoctorDetails = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Get current date and generate next 7 days (excluding Sundays)
  const generateAvailableDays = () => {
    const days = [];
    const today = new Date();
    let daysAdded = 0;
    let currentDate = new Date(today);

    while (daysAdded < 7) {
      // Skip Sundays (0 = Sunday)
      if (currentDate.getDay() !== 0) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        days.push({
          day: dayNames[currentDate.getDay()],
          date: `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`,
          fullDate: new Date(currentDate)
        });
        daysAdded++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  const availableDays = generateAvailableDays();

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
  ];

  const consultationFee = "₹500";

  const handleBookAppointment = () => {
    if (selectedDay && selectedTime) {
      alert(`Appointment booked for ${selectedDay.day}, ${selectedDay.date} at ${selectedTime}\nConsultation Fee: ${consultationFee}`);
    } else {
      alert("Please select both day and time slot");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-6 py-12">
      
      {/* Card Section */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
        
        {/* Doctor Image */}
        <div className="flex-shrink-0 relative">
          <img
            src={anu_dii}
            alt="Dr. Anu Barwal"
            className="w-64 h-72 object-cover rounded-xl shadow-md border-4 border-blue-100"
          />

          {/* Verify Icon */}
          <img
            src={verify_icon}
            alt="Verified"
            className="w-10 h-10 absolute -bottom-3 -right-3"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dr. Anu Barwal</h1>

          <p className="text-blue-600 font-medium mb-4">
            BAMS, MD – Ayurveda (KAYACHIKITSA)
            <br />Experience in Ayurvedic Practice: 2+ years
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-3">About Me:</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ayurvedic physician dedicated to restoring health and balance through authentic Ayurveda.
            Specialized in managing lifestyle and metabolic disorders with a holistic, patient-centered approach.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-3">Specializations:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Musculoskeletal and joint disorders</li>
            <li>Neurological and psychiatric disorders</li>
            <li>Diabetes & Prediabetes</li>
            <li>Obesity & Metabolic Disorders</li>
            <li>Thyroid Imbalance</li>
            <li>Women's Health</li>
            <li>Preventive & Wellness Care</li>
          </ul>

          {/* Consultation Fee */}
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-lg font-semibold text-gray-800">
              Consultation Fee: <span className="text-green-600">{consultationFee}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h2>

        {/* Select Day */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Day:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {availableDays.map((dayObj, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(dayObj)}
                className={`p-3 rounded-lg border transition-all ${
                  selectedDay?.date === dayObj.date
                    ? "bg-blue-400 text-white border-blue-400"
                    : "bg-white border-gray-300 hover:bg-blue-50"
                }`}
              >
                <div className="font-semibold">{dayObj.day}</div>
                <div className="text-sm opacity-75">{dayObj.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Time Slot:</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border transition-all ${
                  selectedTime === time
                    ? "bg-blue-400 text-white border-blue-400"
                    : "bg-white border-gray-300 hover:bg-blue-50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Book Appointment Button */}
        <button
          onClick={handleBookAppointment}
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Book Appointment
        </button>

        {selectedDay && selectedTime && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-gray-700">
              Selected: <span className="font-semibold">{selectedDay.day}, {selectedDay.date}</span> at <span className="font-semibold">{selectedTime}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );    
};

export default DoctorDetails;