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

const PricingCard = ({ name, title, btnText, trail, details }) => {
  return (
    <div className="mx-2 md:mx-3 p-5 md:p-8 transition-all hover:shadow-lg flex flex-col gap-6 rounded-lg rounded-b-4xl border-neutral-200 border text-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500 text-sm md:text-base">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        {details.map((detail, index) => (
          <Plan key={index} title={detail} />
        ))}
      </div>
      <div className="mx-auto">
        <button
          className="w-fit capitalize text-sm md:text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-2 md:py-3 px-4 md:px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full"
          onClick={() => {
            window.location.href = "https://wa.me/+917272883030";
          }}
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

const coursesData = [
  {
    name: "IIT-JEE/NEET + Boards",
    title: "",
    btnText: "Get Details",
    details: [
      "10 Students in a batch",
      "Integrated Coaching",
      "Personal Mentor",
      "5 days a week and 4 hours a day",
      "3 hours daily DPP sessions",
    ],
  },
  {
    name: "MHT-CET + BOARDS",
    title: "",
    btnText: "Get Details",
    trail: "",
    details: [
      "10 Students in a batch",
      "Classroom Coaching",
      "Personal Mentor",
      "6 days a week and 3 hours a day",
      "2 hours daily DPP sessions",
    ],
  },
  {
    name: "CBSE/HSC Boards",
    title: "",
    btnText: "Get Details",
    trail: "",
    details: [
      "10 Students in a batch",
      "Classroom Coaching",
      "Personal Mentor",
      "6 days a week and 3 hours a day",
      "2 hours daily DPP sessions",
    ],
  },
];

const crashCourseData = [
  {
    name: "NEET",
    title: "FEES - 12,999/- (per subject)",
    btnText: "Get Details",
    trail: "",
    details: [
      "All round revision",
      "Doubts Clearing Session",
      "50 Days intensive practice",
      "10 part tests",
      "5 full tests",
    ],
  },
  {
    name: "MHT-CET",
    title: "FEES - 24,999/- (PCM/PCB)",
    btnText: "Get Details",
    trail: "",
    details: [
      "Complete syllabus Revision",
      "Doubts Solving sessions",
      "45 days intensive course",
      "10 Parts test",
      "5 Full test",
    ],
  },
];

const testSeriesData = [
  {
    name: "MHT-CET",
    title: "FEES - 2,999/-",
    btnText: "Get Details",
    trail: "",
    details: [
      "Online Monitored Classes",
      "60 Chapterwise test",
      "6 Mock Unit Test",
      "5 Full syllabus test",
      "Doubt Solving Sessions",
    ],
  },
  {
    name: "NEET",
    title: "FEES - 4,999/-",
    btnText: "Get Details",
    trail: "",
    details: [
      "Pen-paper Monitored Test",
      "60 Chapterwise test",
      "6 Mock Unit Test",
      "5 Full syllabus test",
      "Doubt Solving Sessions",
    ],
  },
];

const commerceData = [
  {
    name: "XI and XII (CBSE)",
    title: "",
    btnText: "Get Details",
    trail: "",
    details: [
      "10 students in a batch",
      "6 days a week",
      "3 hrs a day",
      "Personal Mentor",
    ],
  },
  {
    name: "CA(f)/ CS",

    btnText: "Get Details",
    trail: "",
    details: [
      "Private Batch",
      "1 on 1 teacher",
      "Test series",
      "Personal Mentor",
    ],
  },
];

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
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "rgb(225 29 72)",
          borderRadius: "50%",
          opacity: i === currentSlide ? 1 : 0.5, // Change opacity based on whether it's the current slide
          marginTop: "30px", // Add margin between dots
        }}
      ></div>
    ),
  };

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="courses"
      data-aos="fade-up"
    >
      <div>
        <span
          className="service-name text-center px-1"
          style={{ fontSize: "26px" }}
        >
          Our Courses
        </span>
      </div>

      <Slider {...sliderSettings} className="mt-1 md:mt-10">
        {coursesData.map((course, index) => (
          <PricingCard key={index} {...course} />
        ))}
      </Slider>

      <div>
        <span
          className="service-name text-center mt-12 mb-1"
          style={{ fontSize: "26px" }}
        >
          Crash Course
        </span>
      </div>

      <Slider {...sliderSettings} className="mt-1 md:mt-10">
        {crashCourseData.map((course, index) => (
          <PricingCard key={index} {...course} />
        ))}
      </Slider>

      <div>
        <span
          className="service-name text-center mt-12 mb-1"
          style={{ fontSize: "26px" }}
        >
          Test Series
        </span>
      </div>

      <Slider {...sliderSettings} className="mt-1 md:mt-10">
        {testSeriesData.map((course, index) => (
          <PricingCard key={index} {...course} />
        ))}
      </Slider>

      <div>
        <span
          className="service-name text-center mt-12 mb-1"
          style={{ fontSize: "26px" }}
        >
          Commerce
        </span>
      </div>

      <Slider {...sliderSettings} className="mt-1 md:mt-10">
        {commerceData.map((course, index) => (
          <PricingCard key={index} {...course} />
        ))}
      </Slider>
    </section>
  );
};

export default Pricing;
