import React from 'react';

export default function Coaches() {
  const coaches = [
    {
      name: "Alex Thompson",
      role: "Head Coach",
      image: "https://images.unsplash.com/photo-1553787434-dd9eb4ea4d0b?auto=format&fit=crop&q=80",
      experience: "15+ years experience",
      certification: "UEFA Pro License"
    },
    {
      name: "Sarah Martinez",
      role: "Youth Development Coach",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80",
      experience: "10+ years experience",
      certification: "UEFA A License"
    },
    {
      name: "James Wilson",
      role: "Goalkeeper Coach",
      image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?auto=format&fit=crop&q=80",
      experience: "12+ years experience",
      certification: "UEFA B License"
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Expert Coaching Staff</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from our team of professional coaches with extensive experience in player development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition ease-in-out duration-100">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{coach.name}</h3>
                <p className="text-yellow-500 font-semibold mb-3">{coach.role}</p>
                <div className="text-gray-600">
                  <p>{coach.experience}</p>
                  <p>{coach.certification}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}