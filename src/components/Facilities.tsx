import React from 'react';
import { Shield, Star, Sun, Trophy } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: "Professional Training Grounds",
      image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&q=80",
      description: "FIFA-standard natural grass pitches with state-of-the-art drainage systems",
      features: ["3 Full-size pitches", "Floodlight system", "Professional maintenance"]
    },
    {
      title: "Indoor Training Center",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80",
      description: "Climate-controlled indoor facility for year-round training",
      features: ["Futsal court", "Gym equipment", "Analysis room"]
    },
    {
      title: "Performance Center",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      description: "Modern fitness and rehabilitation facilities",
      features: ["Recovery pools", "Physio room", "Performance lab"]
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "FIFA Approved",
      description: "Training facilities meeting international standards"
    },
    {
      icon: Star,
      title: "Modern Equipment",
      description: "Latest training and analysis technology"
    },
    {
      icon: Sun,
      title: "All-Weather",
      description: "Indoor and outdoor facilities for year-round training"
    },
    {
      icon: Trophy,
      title: "Professional Setup",
      description: "Designed for elite player development"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">World-Class Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Train in professional facilities designed to nurture talent and maximize player development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition ease-in-out duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <highlight.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}