import React, { useState, useEffect } from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import reviewsData from "../API/data.json";

const Card = ({ title, desc }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDescVisibility = () => {
    setShowFullDesc(!showFullDesc);
  };

  const truncateString = (str, numWords) => {
    const words = str.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + " ...";
    } else {
      return str;
    }
  };

  const truncatedDesc = showFullDesc ? desc : truncateString(desc, 40);
  const isLongDesc = desc.split(" ").length > 40;

  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600"></div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm">{truncatedDesc}</p>
      {isLongDesc && !showFullDesc && (
        <button
          onClick={toggleDescVisibility}
          className="text-rose-600 font-[500] hover:text-red-700"
        >
          Read More
        </button>
      )}
      <div className="flex items-center gap-4 mt-5">
        <div>
          <h3 className="font-semibold"></h3>
          <Link href="#" target="_blank" className="text-rose-600 font-[500]">
            @Google Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    infinite: true,
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

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center" style={{ fontSize: "26px" }}>
          TESTIMONIAL
        </span>
        <h2 className="title text-center" style={{ fontSize: "18px" }}>
          Students Reviews
        </h2>
      </div>
      {reviews && reviews.length > 0 && (
        <Carousel {...carouselParams}>
          {reviews.map((review, index) => (
            <div key={index}>
              <Card key={index} title={review.username} desc={review.snippet} />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default Testimonials;
