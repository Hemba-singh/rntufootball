import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="RNTU Academy" 
                className="h-12 w-auto"/>
              <span className="ml-0.5 text-2xl font-bold text-white">RNTU Football Academy</span>
            </div>
            <p className="text-blue-100 mb-4">
              Developing the next generation of football talent through professional coaching and world-class facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-100 hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#programs" className="text-blue-100 hover:text-yellow-400 transition">Programs</a></li>
              <li><a href="#coaches" className="text-blue-100 hover:text-yellow-400 transition">Coaches</a></li>
              <li><a href="#facilities" className="text-blue-100 hover:text-yellow-400 transition">Facilities</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Youth Development</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Elite Performance</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Goalkeeper Training</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Summer Camps</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Private Sessions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-blue-100">
              <li>123 Stadium Road</li>
              <li>Sportsville, SP 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@rntuacademy.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © {currentYear} RNTU Football Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-blue-100">
              <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}