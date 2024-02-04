import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ButtonGroup from "./ButtonGroup";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={imgSrc} width={450} height={350} alt="features" />
      <h3 className="text-xl font-semibold my-2">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update current slide index
    },
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "rgb(225 29 72)",
          borderRadius: "50%",
          opacity: i === currentSlide ? 1 : 0.5, // Change opacity based on whether it's the current slide
        }}
      ></div>
    ),
  };

  return (
    <section className="container mx-auto px-5 md:px-16" id="toppers">
      <span className="service-name text-center" style={{ fontSize: "28px" }}>
        Congratulations{" "}
      </span>
      <h2 className="title text-center" style={{ fontSize: "18px" }}>
        Meet The Toppers
      </h2>

      <Slider {...sliderSettings} className="mt-5 md:mt-10">
        <FeatureProduct imgSrc="/features/1file.jpeg" title="" desc="" />
        <FeatureProduct imgSrc="/features/2file.jpeg" title="" desc="" />
        <FeatureProduct imgSrc="/features/3file.jpeg" title="" desc="" />
        <FeatureProduct imgSrc="/features/4file.jpeg" title="" desc="" />
      </Slider>
    </section>
  );
};

export default Features;
