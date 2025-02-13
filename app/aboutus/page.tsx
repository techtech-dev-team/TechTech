'use client';

import Image from 'next/image';
import { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex flex-col justify-center lg:items-start items-center gap-10">
            <div className="w-full flex flex-col justify-center items-start gap-8">
              <div className="flex flex-col justify-start lg:items-start items-center gap-4">
                <h1 className="text-white text-7xl font-normal leading-relaxed">About Us</h1>
                <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3">
                  <h2 className="text-white text-4xl font-bold leading-normal lg:text-start text-center">
                    Innovating the Future of Technology
                  </h2>
                  <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                    We are a dynamic IT startup dedicated to revolutionizing the digital world. With cutting-edge 
                    technology, innovative solutions, and a passionate team, we empower businesses to thrive in the 
                    ever-evolving digital landscape.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-6">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2.5">
                    <h4 className="text-white text-2xl font-bold">Advanced Tech Solutions</h4>
                    <p className="text-white text-base font-normal leading-relaxed">Developing innovative software tailored for business success</p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2.5">
                    <h4 className="text-white text-2xl font-bold">Successful Deployments</h4>
                    <p className="text-white text-base font-normal leading-relaxed">Delivering robust and scalable digital products</p>
                  </div>
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2.5">
                    <h4 className="text-white text-2xl font-bold">Industry Recognition</h4>
                    <p className="text-white text-base font-normal leading-relaxed">Acknowledged for our commitment to tech innovation</p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2.5">
                    <h4 className="text-white text-2xl font-bold">Client-First Approach</h4>
                    <p className="text-white text-base font-normal leading-relaxed">Building strong and lasting partnerships through trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <Image className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717742431.png" alt="IT Startup" width={564} height={646} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;