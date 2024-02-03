import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonGroup from "./ButtonGroup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-rose-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, btnText, trail }) => {
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title="10 Students in a BATCH " />
        <Plan title="Classroom Coaching" />
        <Plan title="Personal Mentor" />
        <Plan title="6 Days a week & 3 Hrs a day" />
        <Plan title="2 Hrs daily DPP sessions" />
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4"></h2>
        <button className="w-fit capitalize text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full">
          {btnText}
        </button>
        <span className="block text-rose-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: false,
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

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
      data-aos="fade-up"
    >
      <div>
        <span
          className="service-name text-center pb-1"
          style={{ fontSize: "26px" }}
        >
          test seriese
        </span>
      </div>

      <Slider {...sliderSettings} className="mt-5 md:mt-20">
        <PricingCard
          name="NEET"
          title="FEES - 4.999/-"
          price="0"
          btnText="View Details"
        />
        <PricingCard
          name="MHT-CET"
          title="FEES - 2.999/- "
          price="15"
          btnText="View Details"
          trail=""
        />
      </Slider>
    </section>
  );
};

export default Pricing;
