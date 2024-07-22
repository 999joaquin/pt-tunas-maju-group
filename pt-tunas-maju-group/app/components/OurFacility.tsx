// app/components/OurFacility.tsx
'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import './OurFacility.css';

const OurFacility = () => {
  const facilities = [
    { id: 1, image: '/images/facilities/facility1.png', description: 'Facility 1' },
    { id: 2, image: '/images/facilities/facility2.png', description: 'Facility 2' },
    { id: 3, image: '/images/facilities/facility3.png', description: 'Facility 3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
  };

  return (
    <div className="relative w-full h-screen bg-black text-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Facilities</h2>
      <Slider {...settings} className="w-full h-full">
        {facilities.map((facility) => (
          <div key={facility.id} className="relative w-full h-full">
            <div className="relative w-full h-full" style={{ height: '60vh' }}>
              <Image
                src={facility.image}
                alt={facility.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
                <p className="text-white text-lg">{facility.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurFacility;
