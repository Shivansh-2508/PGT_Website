"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
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

const PricingCard = ({ name, title, price, btnText, trail }) => {
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title="10 Students a Batch " />
        <Plan title="6 Days a Week" />
        <Plan title="Personal Mentor" />
        <Plan title="3 Hrs each Day" />
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

const Commerce = () => {
  const [plan, setPlan] = useState("Monthly Plan");
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
      data-aos="fade-up"
    >
      <div>
        <span
          className="service-name text-center pb-10"
          style={{ fontSize: "26px" }}
        >
          Commerce XI & XII
        </span>
      </div>

      {plan === "Monthly Plan" ? (
        <>
          <Carousel {...carouselParams}>
            <PricingCard
              name="XI & XII"
              title=""
              price="0"
              btnText={
                <a
                  href={`https://wa.me/${encodeURIComponent("+917272883030")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Details
                </a>
              }
            />

            <PricingCard
              name="CA(f)/ CS"
              title=" "
              price="15"
              btnText={
                <a
                  href={`https://wa.me/${encodeURIComponent("+917272883030")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Details
                </a>
              }
              trail=""
            />
          </Carousel>
        </>
      ) : (
        <Carousel {...carouselParams}></Carousel>
      )}
    </section>
  );
};

export default Commerce;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: false,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
