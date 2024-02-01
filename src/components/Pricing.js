"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

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
      <div className="flex flex-col gap-3">
        {cardContent}
        {/* Render NEET content if available */}
        {name === "NEET" && neetContent}
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
  const [plan, setPlan] = useState("Monthly Plan");
  const [toggleMenu, setToggleMenu] = useState(false);
  const overlay = useRef(null);

  useEffect(() => {
    const closeMenu = () => {
      setToggleMenu(false);
    };

    if (overlay.current) {
      overlay.current.addEventListener("click", closeMenu);
    }

    return () => {
      if (overlay.current) {
        overlay.current.removeEventListener("click", closeMenu);
      }
    };
  }, [toggleMenu]);

  const handleViewDetailsClick = () => {
    window.location.href = "https://wa.me/+917272883030";
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 1000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container  justify-center",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 3,
  };

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
      data-aos="fade-up"
    >
      <div>
        <span className="service-name text-center" style={{ fontSize: "26px" }}>
          Courses WE Offered
        </span>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-50 p-1 rounded-full">
        <div
          className="capitalize text-sm sm:text-base font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 rounded-full"
          style={{ fontSize: "18px" }}
        >
          Most Popular
        </div>
      </div>

      {plan === "Monthly Plan" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="IIT-JEE/NEET + BOARDS  "
            title=" "
            price="0"
            btnText="View Details"
            onViewDetailsClick={handleViewDetailsClick}
          />

          <PricingCard
            name="MHT-CET + BOARDS"
            title="Core Board Exam Preparation"
            price="15"
            btnText="View Details"
            onViewDetailsClick={handleViewDetailsClick}
          />

          <PricingCard
            name="CBSE/HSC + BOARDS "
            title="Complete Maharashtra State Board Support"
            price="24"
            btnText="View Details"
            onViewDetailsClick={handleViewDetailsClick}
          />
        </Carousel>
      ) : (
        <div>{/* Add content or components for other plans */}</div>
      )}

      <br />

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-50 p-1 rounded-full">
        <div
          className="capitalize text-sm sm:text-base font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 rounded-full"
          style={{ fontSize: "18px" }}
        >
          Crash Course
        </div>
      </div>

      {plan === "Monthly Plan" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="NEET"
            title="10th March - 30th April"
            price="29"
            btnText="View Details"
            onViewDetailsClick={handleViewDetailsClick}
          />
          <PricingCard
            name="MHT-CET"
            title="10th March - 30th April"
            price="29"
            btnText="View Details"
            onViewDetailsClick={handleViewDetailsClick}
          />

          {/* ... (unchanged code for MHT-CET and other cards) */}
        </Carousel>
      ) : (
        <div>{/* Add content or components for other plans */}</div>
      )}

      <br />

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-50 p-1 rounded-full">
        <div
          className="capitalize text-sm sm:text-base font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 rounded-full"
          style={{ fontSize: "18px" }}
        >
          Commerce
        </div>
      </div>

      {plan === "Monthly Plan" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="XI and XII"
            title="10th March - 30th April"
            price="29"
            btnText="View Details"
            onViewDetailsClick={handleViewDetailsClick}
          />

          <PricingCard
            name="MHT-CET"
            title="10th March - 25th April"
            price="19"
            btnText="View Details"
            onViewDetailsClick={handleViewDetailsClick}
          />

          {/* Add more PricingCard components for Crash Course with respective content */}
        </Carousel>
      ) : (
        <div>{/* Add content or components for other plans */}</div>
      )}
    </section>
  );
};

export default Pricing;
