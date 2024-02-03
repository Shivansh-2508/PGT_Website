import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update current slide index
    },
    customPaging: (i) => (
      <button
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "rgb(225 29 72)",
          borderRadius: "50%",
          opacity: i === currentSlide ? 1 : 0.5, // Change opacity based on whether it's the current slide
          marginTop: "30px", // Add margin between dots
        }}
      ></button>
    ),
  };

  const images = [
    { src: "/smp3.png", width: 200, height: 200, alt: "carousel Image 3" },
    { src: "/smp6.png", width: 600, height: 600, alt: "carousel Image 6" },
    { src: "/smp2.png", width: 600, height: 600, alt: "carousel Image 2" },
    { src: "/smp.png", width: 200, height: 200, alt: "carousel Image 0" },
    { src: "/smppp.png", width: 300, height: 300, alt: "carousel Image 5" },
    { src: "/smp7.png", width: 600, height: 600, alt: "carousel Image 7" },
    { src: "/smp8.png", width: 800, height: 800, alt: "carousel Image 8" },
  ];

  return (
    <section
      className="text-center flex flex-col gap-5 sm:gap-5 items-center justify-center sm:mt-16 md:mt-8 lg:mt-12 relative z-10 pt-16 sm:pt-14 md:pt-10 xl:pt-6"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-2xl sm:text-3xl md:text-[2rem] xl:text-4xl font-bold sm:mt-4 md:mt-0 xl:mt-0 pt-3">
          <>
            <span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
              {" "}
              {"PINNACLE"}
            </span>{" "}
            GROUP TUITIONS
          </>
          <p className="text-sm mt-3">
            Elevate your educational journey where personalized attention meets
            academic excellence.
          </p>
        </h1>

        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6"></p>
      </div>

      <Slider {...sliderSettings} className="w-full relative">
        {images.map((image, index) => (
          <div key={index} className="relative h-48 md:h-60 lg:h-80 mx-2">
            <Image {...image} className="object-cover w-full h-full" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
