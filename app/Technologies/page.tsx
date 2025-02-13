'use client';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {
  SiAmazon,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiGraphql,
  SiNodedotjs,
  SiNextdotjs,
} from 'react-icons/si';

const CircularTechStack = () => {
  const [icons] = useState([
    { name: 'AWS', Icon: SiAmazon, colorClass: 'text-[#1E90FF]' },
    { name: 'React', Icon: SiReact, colorClass: 'text-[#61DAFB]' },
    { name: 'Next.js', Icon: SiNextdotjs, colorClass: 'text-white' },
    { name: 'MongoDB', Icon: SiMongodb, colorClass: 'text-[#00ED64]' },
    { name: 'PostgreSQL', Icon: SiPostgresql, colorClass: 'text-[#336791]' },
    { name: 'Flutter', Icon: SiFlutter, colorClass: 'text-[#02569B]' },
    { name: 'GraphQL', Icon: SiGraphql, colorClass: 'text-[#E535AB]' },
    { name: 'Node.js', Icon: SiNodedotjs, colorClass: 'text-[#339933]' }
  ]);

  return (
    <div className="relative w-full max-w-[400px] bg- sm:max-w-[500px] mx-auto h-[400px] sm:h-[500px]">
      {/* Outer circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full">
        {/* Multiple decorative circles for depth */}
        <div className="absolute inset-[25px] rounded-full border border-[#868383] opacity-60"></div>
        <div className="absolute inset-2.5 rounded-full border border-[#928f8f] opacity-40"></div>
      </div>

      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3a3a3a] to-[#1a1a1a] rounded-xl blur-[2px]"></div>
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#111111] rounded-xl flex items-center justify-center border border-[#2a2a2a] shadow-lg">
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 p-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Circular icons */}
      {icons.map((icon, index) => {
        const angle = (index * 360) / icons.length;
        const radius = 120; // Adjusted radius for smaller stack
        const radian = (angle - 90) * (Math.PI / 180);
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <div
            key={icon.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
           
            <div className="relative">
          
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#111111] rounded-xl flex items-center justify-center shadow-lg border border-[#2a2a2a] transition-all duration-300 group-hover:scale-150 group-hover:border-[#3a3a3a]">
                <icon.Icon className={`${icon.colorClass} text-xl sm:text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-150`} />
              </div>
            </div>
            
            
            <div className="absolute inset-0 w-full h-full">
              <div
                className="absolute top-1/2 left-1/2 w-[120px] h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent opacity-20"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: '0 50%',
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Technologies() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="container mx-auto px-4 sm:px-6 md:px-9 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
          <div className="space-y-8 px-4 md:px-0 ml-12">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Strategies we use to craft modern apps
              </h1>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl">
                Take a look at the modern & advanced frameworks we use to craft apps for your business with an affordable budget.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
             
              {[{
                title: 'Hybrid Frameworks',
                description:
                  'We create applications that work on cross-platform compatibility to help achieve cross-platform app support with a low budget.',
              },
              {
                title: 'Responsive UI & Experience',
                description:
                  'Our applications are designed to provide a seamless experience across all devices and screen sizes.',
              },
              {
                title: 'Top-notch Security',
                description:
                  'We implement industry-standard security measures to protect your application and user data.',
              }].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Tech stack visualization */}
          <div className="order-first lg:order-last lg:translate-x-10">
            <CircularTechStack />
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="relative isolate overflow-hidden bg-neutral-900 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-16 lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Stay Ahead in Technology
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                Technology evolves fast! Subscribe to get regular updates on the latest frameworks, tools, and trends shaping the future of software development.
              </p>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-300 mb-6">
                {[ 
                  'Latest insights on React, Node.js, and emerging technologies.',
                  'Tutorials and best practices for building scalable applications.',
                  'Updates on cloud services, databases, and AI-driven solutions.',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
                  Join Us
                </button>
              </div> */}
            </div>

            {/* Video Section */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg bg-neutral-800 p-4 sm:p-6">
                <h1 className='mb-4 text-2xl sm:text-3xl md:text-4xl  text-white'>
                INTRO VIDEO
                  </h1>
                <video
                  className="w-full h-auto rounded-md object-cover"
                  controls
                  poster="video-thumbnail.png"
                >
                  <source src="3129902-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient effect */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 9.2% 27.2%, 22.1% 19.7%, 20.9% 8.2%)',
            }}
          />
        </div>
      </div>
    </main>
  );
}
