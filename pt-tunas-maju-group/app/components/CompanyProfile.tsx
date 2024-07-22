// app/components/CompanyProfile.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CompanyProfile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: '/images/company-profile/profile1.png', description: 'Profile 1' },
    { id: 2, image: '/images/company-profile/profile2.png', description: 'Profile 2' },
    { id: 3, image: '/images/company-profile/profile3.png', description: 'Profile 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative bg-secondary text-white">
      <div className="flex items-center justify-between p-8 h-screen">
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-bold mb-4">Profile</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. PT. Tunas Maju Group is a leading company in [your industry]. We are committed to providing the best services and products to our customers.
          </p>
        </div>
        <div className="w-1/2 relative h-full flex items-center justify-center">
          <div className="relative w-3/4 h-3/4 border-4 border-white rounded-lg overflow-hidden bg-white flex items-center justify-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute transition-opacity duration-1000 w-full h-full ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={slide.image} alt={slide.description} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
