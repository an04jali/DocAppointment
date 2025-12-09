import React from 'react';

export default function DoctorFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-50 border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">About Us</h3>
            <p className="text-sky-700 text-sm leading-relaxed">
              Providing exceptional healthcare services with compassion and expertise. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sky-700 hover:text-sky-900 text-sm transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-sky-700 hover:text-sky-900 text-sm transition-colors">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-sky-700 hover:text-sky-900 text-sm transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#about" className="text-sky-700 hover:text-sky-900 text-sm transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-sky-700">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Medical Street, xxxxxxx</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+91 8683077357</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>barwalanu926@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm text-sky-700">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9AM - 2PM <br/>5AM - 9PM </span>
              </li>
              
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </li>
              <li className="mt-4 pt-4 border-t border-sky-200">
                <span className="text-red-600 font-medium">Emergency: 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sky-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sky-700 text-sm mb-4 md:mb-0">
              © {currentYear} Medical Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-sky-700 hover:text-sky-900 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sky-700 hover:text-sky-900 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#hipaa" className="text-sky-700 hover:text-sky-900 text-sm transition-colors">
                Dr. Anu Barwal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}