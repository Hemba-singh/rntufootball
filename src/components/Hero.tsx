import React from 'react';
import { Trophy, Users, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-transparent text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80"
          alt="Football field"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Develop Your Football Skills at RNTU Football Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Professional coaching for all ages and skill levels
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:scale-105 transition duration ease-in-out duration-200"
          >
            Start Your Journey
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-transparent backdrop-blur-xl p-6 rounded-lg text-center hover:scale-105 transition duration ease-in-out duration-200">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-blue-800 text-x1 font-bold mb-2">Expert Coaching</h3>
            <p className="text-blue-800">Learn from professional coaches with years of experience</p>
          </div>
          <div className="bg-transparent backdrop-blur-xl p-6 rounded-lg text-center hover:scale-105 transition duration ease-in-out duration-200">
            <Users className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-blue-800 text-x1 font-bold mb-2">All Skill Levels</h3>
            <p className="text-blue-800">Programs designed for beginners to advanced players</p>
          </div>
          <div className="bg-transparent backdrop-blur-xl p-6 rounded-lg text-center hover:scale-105 transition duration ease-in-out duration-200">
            <Target className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-blue-800 text-x1 font-bold mb-2 ">Goal-Oriented</h3>
            <p className="text-blue-800">Structured training to help you achieve your goals</p>
          </div>
        </div>
      </div>
    </section>
  );
}