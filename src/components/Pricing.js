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

const PricingCard = ({
  name,
  title,
  price,
  btnText,
  trail,
  onViewDetailsClick,
  neetContent,
  mhtCetContent,
}) => {
  const handleViewDetailsClick = () => {
    if (onViewDetailsClick) {
      onViewDetailsClick();
    }
  };

  let cardContent;
  if (name === "IIT-JEE/NEET + BOARDS") {
    cardContent = (
      <>
        <Plan title="10 Students in a batch" />
        <Plan title="Classroom Coaching" />
        <Plan title="Personal Mentor" />
        <Plan title="5 days a week and 4 hours a day" />
        <Plan title="3 hours daily DPP sessions" />
      </>
    );
  } else if (name === "MHT-CET + BOARDS") {
    cardContent = (
      <>
        <Plan title="10 Students in a batch" />
        <Plan title="Classroom Coaching" />
        <Plan title="Personal Mentor" />
        <Plan title="6 days a week and 3 hours a day" />
        <Plan title="2 hours daily DPP sessions" />
      </>
    );
  } else if (name === "CBSE/HSC + BOARDS") {
    cardContent = (
      <>
        <Plan title="10 Students in a batch" />
        <Plan title="Classroom Coaching" />
        <Plan title="Personal Mentor" />
        <Plan title="6 days a week and 3 hours a day" />
        <Plan title="2 hours daily DPP sessions" />
      </>
    );
  } else {
    cardContent = (
      <>
        <Plan title="10 Students in a batch" />
        <Plan title="INTEGRATED coaching" />
        <Plan title="Personal Mentor" />
        <Plan title="5 days a week and 4 hours a day" />
        <Plan title="3 hours daily DPP sessions" />
      </>
    );
  }

  return (
    <div className="mx-2 md:mx-3 p-5 md:p-8 transition-all hover:shadow-lg flex flex-col gap-6 rounded-lg rounded-b-4xl border-neutral-200 border text-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500 text-sm md:text-base">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title="10 Students in a BATCH " />
        <Plan title="Classroom Coaching" />
        <Plan title="Personal Mentor" />
        <Plan title="6 Days a week & 3 Hrs a day" />
        <Plan title="2 Hrs daily DPP sessions" />
      </div>
      <div className="mx-auto">
        <button
          onClick={handleViewDetailsClick}
          className="w-fit capitalize text-sm md:text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-2 md:py-3 px-4 md:px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full"
        >
          {btnText}
        </button>
        <span className="block text-rose-600 mt-3 font-semibold animate-bounce cursor-pointer text-xs md:text-sm">
          {trail}
        </span>
      </div>
    </div>
  );
};

const neetContent = (
  <>
    <Plan title="Paper Pen Monitored Test" />
    <Plan title="60 Chapterwise Tests" />
    <Plan title="6 Mock Tests" />
    <Plan title="5 Full Syllabus Tests" />
    <Plan title="Doubts Solving Session" />
  </>
);

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
          Our Courses
        </span>
      </div>

      <Slider {...sliderSettings} className="mt-1 md:mt-20">
        <PricingCard
          name="IIT-JEE/NEET + Boards"
          title=""
          price="0"
          btnText="Get Details"
        />
        <PricingCard
          name="MHT-CET + BOARDS"
          title=""
          price="15"
          btnText="Get Details"
          trail=""
        />
        <PricingCard
          name="CBSE /HSC Boards "
          title=""
          price="24"
          btnText="Get Details"
          trail=""
        />
      </Slider>
    </section>
  );
};

export default Pricing;
