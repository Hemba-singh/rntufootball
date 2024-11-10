import React from 'react';
import { Trophy, Users, Target, Zap } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "Youth Development",
      icon: Users,
      description: "Comprehensive training program for ages 6-12 focusing on fundamental skills and love for the game.",
      age: "6-12 years",
      schedule: "2-3 sessions weekly"
    },
    {
      title: "Elite Performance",
      icon: Trophy,
      description: "Advanced training for talented players aiming for professional careers in football.",
      age: "13-18 years",
      schedule: "4-5 sessions weekly"
    },
    {
      title: "Goalkeeper Training",
      icon: Target,
      description: "Specialized training for aspiring goalkeepers with dedicated goalkeeper coaches.",
      age: "8-18 years",
      schedule: "2-3 sessions weekly"
    },
    {
      title: "Summer Camps",
      icon: Zap,
      description: "Intensive training camps during summer breaks to accelerate player development.",
      age: "6-18 years",
      schedule: "1-2 weeks duration"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Training Programs</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Choose from our range of professional training programs designed to develop players at every level
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition ease-in-out duration-200">
              <program.icon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">{program.title}</h3>
              <p className="text-gray-800 mb-4">{program.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-800"><strong>Age:</strong> {program.age}</p>
                <p className="text-sm text-gray-800"><strong>Schedule:</strong> {program.schedule}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}