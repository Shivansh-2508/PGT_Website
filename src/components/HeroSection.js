import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Array of image information
  const images = [
    { src: "/smp3.jpg", width: 500, height: 300, alt: "carousel Image 3" },
    { src: "/smp1.png", width: 600, height: 300, alt: "carousel Image 1" },
    { src: "/smp.jpg", width: 600, height: 300, alt: "carousel Image 2" },
    { src: "/smp2.jpg", width: 600, height: 300, alt: "carousel Image 3" },
  ];

  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <>Pinnacle Group Tutions </>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
          "Empowering Minds, Shaping Futures: Pinnacle Group Tuitions, Where
          Excellence Meets Education."
        </p>
      </div>

      <Slider {...sliderSettings} className="w-full relative">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image {...image} className="object- w-full h-full" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
