import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/blog-pic.webp"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="max-w-4xl w-full px-6 py-12 sm:px-10 md:px-16 lg:px-20 bg-white/80 rounded-3xl shadow-2xl backdrop-blur-lg transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-600 text-center mb-6">
          About Us
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
          At our core, we aim to inspire and empower individuals through
          uplifting quotes, captivating stories, and profound insights.  
          Our belief is simple yet powerful: positivity has the potential to
          transform lives, spark growth, and shape a brighter future for everyone.  
          Join us on this journey of hope, inspiration, and meaningful change.
        </p>
      </div>
    </div>
  );
}
