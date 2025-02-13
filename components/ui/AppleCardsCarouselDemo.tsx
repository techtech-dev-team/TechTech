"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  dark:text-neutral-200 font-sans">
        Get to know about our services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{text}</span>
      </p>
    </div>
  );
};

const data = [
  {
    category: "Web Development",
    title: "Build modern, responsive websites.",
    src: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    content: <DummyContent text="Create sleek, dynamic, and scalable websites using modern web technologies. From front-end to back-end, we ensure high performance and user satisfaction." />,
  },
  {
    category: "Mobile App Development",
    title: "Create engaging Android and mobile experiences.",
    src: "https://images.unsplash.com/photo-1603969280040-3bbb77278211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    content: <DummyContent text="We develop high-quality mobile applications that offer seamless user experiences, ensuring cross-platform compatibility and robust functionality." />,
  },
  {
    category: "iOS App Development",
    title: "Deliver seamless iOS applications tailored to Apple’s ecosystem.",
    src: "https://images.unsplash.com/photo-1569144157591-f9a369ed0e6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW9zfGVufDB8fDB8fHww",
    content: <DummyContent text="Specializing in native iOS app development, we create intuitive, high-performance applications that integrate seamlessly with the Apple ecosystem." />,
  },
  {
    category: "UI/UX Design",
    title: "Design user-friendly and visually appealing interfaces.",
    src: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent text="We craft engaging and intuitive UI/UX designs that enhance user satisfaction, boost engagement, and improve overall usability." />,
  },
  {
    category: "AWS Cloud Services",
    title: "Leverage the power of AWS for scalable cloud infrastructure, hosting, and solutions.",
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent text="We provide end-to-end AWS cloud solutions, helping businesses scale effortlessly with secure, reliable, and cost-effective cloud infrastructure." />,
  },
  {
    category: "AI/ML Services",
    title: "Harness the power of AI and Machine Learning to automate tasks, gain insights, and innovate solutions.",
    src: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent text="We implement cutting-edge AI and ML solutions that optimize processes, enhance customer experiences, and provide valuable business insights." />,
  },
];