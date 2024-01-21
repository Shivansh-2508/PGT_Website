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
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 3000,
  };

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
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="#">Explore</Link>
        </button>
      </div>

      <Slider {...sliderSettings} className="w-full relative">
        <div className="relative">
          <Image
            src={"/hero.jpeg"}
            width={500} // Adjust the width to your desired size
            height={200} // Adjust the height to maintain the same aspect ratio
            alt="carousel Image 3"
            className="object- w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src={"/smp1.jpg"}
            width={600}
            height={300}
            alt="carousel Image 1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src={"/smp.jpeg"}
            width={600}
            height={300}
            alt="carousel Image 2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <Image
            src={"/smp3.jpg"}
            width={600}
            height={300}
            alt="carousel Image 3"
            className="object-cover w-full h-full"
          />
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
