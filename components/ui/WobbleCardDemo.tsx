"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Card 1 - IT Solutions Overview */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className="relative flex flex-col justify-center h-full p-8 bg-slate-600"
      >
        <div className="max-w-lg">
          <h2 className="text-left text-balance text-xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
            Secure Solutions — Karyah
          </h2>

          <p className="mt-4 text-neutral-200 text-lg">
            Karyah, our secure task management app, helps teams stay organized and productive without compromising on data safety.
          </p>
        </div>
        <Image
          src="/image.png"
          width={500}
          height={500}
          alt="IT services demo"
          className="absolute right-0 bottom-0 object-contain max-w-[150px] lg:max-w-[200px] rounded-2xl"
        />
      </WobbleCard>


      {/* Card 2 - Security & Compliance */}
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px] bg-gray-900"
        className="flex flex-col justify-center h-full p-8"
      >
        <h2 className="text-left text-balance text-xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
          Enterprise-Grade Security & Compliance
        </h2>
        <p className="mt-4 text-neutral-200 text-lg">
          Our security solutions ensure your data remains secure with
          end-to-end encryption and compliance with global standards.
          
        </p>
      </WobbleCard>


      {/* Card 3 - AI & Automation */}
      <WobbleCard
  containerClassName="col-span-1 lg:col-span-3 bg-indigo-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
  className="flex flex-col justify-center h-full p-12" // Increased padding
>
  <div className="max-w-2xl w-full flex flex-col justify-center h-full"> 
    <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white whitespace-nowrap w-full">
      AI & Automation to Scale Your Business
    </h2>

    <p className="mt-6 text-neutral-200 text-lg leading-relaxed"> 
      Leverage AI-driven automation and machine learning to streamline operations,  
      reduce costs, and improve customer experiences. Our advanced AI solutions  
      help businesses optimize workflows, enhance decision-making with predictive  
      analytics, and deliver personalized customer interactions—ensuring faster,  
      smarter, and more efficient processes for long-term success.
    </p>
  </div>

  <Image
    src="/adi-goldstein-EUsVwEOsblE-unsplash.jpg"
    width={500}
    height={500}
    alt="AI automation image"
    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
  />
</WobbleCard>

    </div>
  );
}
