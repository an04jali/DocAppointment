import React from "react";
import anu_dii from "../assets/anu_dii.jpg";
import verify_icon from "../assets/verify_icon.png";

const DoctorDetails = () => {
  const consultationFee = "₹500";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-6 py-12">
      
      {/* Doctor Profile Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-start gap-8">
        
        {/* Doctor Image */}
        <div className="flex-shrink-0 relative">
          <img
            src={anu_dii}
            alt="Dr. Anu Barwal"
            className="w-64 h-72 object-cover rounded-xl shadow-md border-4 border-blue-100"
          />

          <img
            src={verify_icon}
            alt="Verified"
            className="w-10 h-10 absolute -bottom-3 -right-3"
          />
        </div>

        {/* Doctor Information */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Dr. Anu Barwal
          </h1>

          <p className="text-blue-600 font-medium mb-4">
            BAMS, MD – Ayurveda (KAYACHIKITSA)
            <br />
            Experience in Ayurvedic Practice: 2+ years
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            About Me:
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ayurvedic physician dedicated to restoring health and balance 
            through authentic Ayurveda. Specialized in managing lifestyle 
            and metabolic disorders with a holistic, patient-centered approach.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Specializations:
          </h2>
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
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-lg font-semibold text-gray-800">
              Consultation Fee:{" "}
              <span className="text-green-600">{consultationFee}</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DoctorDetails;