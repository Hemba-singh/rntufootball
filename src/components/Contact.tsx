import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join RNTU Academy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your football career. Contact us to schedule a trial or learn more about our programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20">
          <div className="bg-transparent backdrop-blur-xl shadow-lg text-gray-800 rounded-lg p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  rows={4}
                  placeholder="Tell us about your football experience and goals"
                ></textarea>
              </div>
              <div className="flex items-center">
                 <button
                      type="submit"
                      className="w-half bg-blue-500 text-blue-900 py-3 px-6 rounded-md font-bold hover:bg-blue-300 transition"
                      >
                       Submit Application
                   </button>
              </div>
            </form>
          </div>
          
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-black flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-600">123 Stadium Road, Sportsville</p>
                <p className="text-gray-600">Training Ground Complex</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-black flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-black flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-600">admissions@rntuacademy.com</p>
                <p className="text-gray-600">info@rntuacademy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}