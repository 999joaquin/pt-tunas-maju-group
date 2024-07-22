// app/components/Banner.tsx
'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.css';

const Banner = () => {
  const slides = [
    { id: 1, image: '/images/banner/banner1.png', text: 'Slide 1' },
    { id: 2, image: '/images/banner/banner2.png', text: 'Slide 2' },
    { id: 3, image: '/images/banner/banner3.png', text: 'Slide 3' },
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
    <div className={`relative w-full h-screen flex items-center justify-center text-white overflow-hidden ${styles.banner}`}>
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full">
            <div className="relative w-full h-full" style={{ height: '100vh' }}>
              <Image src={slide.image} alt={slide.text} layout="fill" objectFit="cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-3xl font-bold">{slide.text}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
