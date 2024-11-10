import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-50 text-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="RNTU Academy" 
              className="h-12 w-auto"
            />
            <span className="ml-0.5 text-2xl font-bold text-gray-800">RNTU Football Academy</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:scale-105 transition duration ease-in-out duration-200 px-3 py-2 rounded-md font-bold underline underline-offset-2">Home</a>
              <a href="#programs" className="hover:scale-105 transition duration ease-in-out duration-200 px-3 py-2 rounded-md font-bold underline underline-offset-2">Programs</a>
              <a href="#coaches" className="hover:scale-105 transition duration ease-in-out duration-200 px-3 py-2 rounded-md font-bold underline underline-offset-2">Coaches</a>
              <a href="#facilities" className="hover:scale-105 transition duration ease-in-out duration-200 px-3 py-2 rounded-md font-bold underline underline-offset-2">Facilities</a>
              <a href="#contact" className="bg-blue-800 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-blue-200">
                Join Now
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-1 pt-2 pb-2 space-y-1 sm:px-2">
            <a href="#home" className="block bg-blue-800 text-black hover:bg-blue-400 px-3 py-2 rounded-md">Home</a>
            <a href="#programs" className="block bg-blue-800 text-black hover:bg-blue-400 px-3 py-2 rounded-md">Programs</a>
            <a href="#coaches" className="block bg-blue-800 text-black hover:bg-blue-400 px-3 py-2 rounded-md">Coaches</a>
            <a href="#facilities" className="block bg-blue-800 text-black hover:bg-blue-400 px-3 py-2 rounded-md">Facilities</a>
            <a href="#contact" className="block bg-blue-800 text-black px-4 py-2 rounded-md font-semibold hover:bg-blue-400">
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}