import React, { useState } from "react";

const Payment = () => {
  const [method, setMethod] = useState("card");

  const handlePayment = () => {
    alert("Payment Successful ✅ Appointment Confirmed");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white w-96 p-8 rounded-2xl shadow-xl text-center">

        <h2 className="text-2xl font-bold mb-4">
          Complete Your Payment
        </h2>

        <p className="mb-6 text-lg font-semibold">
          Amount: ₹500
        </p>

        {/* Payment Method Selector */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setMethod("card")}
            className={`px-4 py-2 rounded-lg ${
              method === "card"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Card
          </button>

          <button
            onClick={() => setMethod("upi")}
            className={`px-4 py-2 rounded-lg ${
              method === "upi"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            UPI / QR
          </button>
        </div>

        {/* Card Form */}
        {method === "card" && (
          <div className="space-y-3 mb-6">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border px-3 py-2 rounded-lg"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border px-3 py-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 border px-3 py-2 rounded-lg"
              />
            </div>
          </div>
        )}

        {/* UPI QR Section */}
        {method === "upi" && (
          <div className="mb-6">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay"
              alt="QR Code"
              className="mx-auto mb-3"
            />
            <p className="text-sm text-gray-600">
              Scan using Google Pay / PhonePe
            </p>
          </div>
        )}

        <button
          onClick={handlePayment}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;