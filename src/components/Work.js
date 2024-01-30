// Import necessary modules and components
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-red-500`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-blue-500`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

// Roadmap component with arrows for big screens
const Roadmap = ({ title, description, data }) => {
  // Check if the code is running on the client side
  const isClient = typeof window !== "undefined";

  const showArrows = isClient && window.innerWidth >= 768;

  return (
    <div>
      <div className="text-center">
        {/* Title */}
        <h1
          className="uppercase block font-semibold text-3xl tracking-widest text-white"
          data-aos="fade-up"
        >
          {title}
        </h1>
        {/* Description */}
        <p
          className="text-xl font-semibold leading-relaxed text-white mt-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {description}
        </p>
      </div>
      {/* Grid for roadmap items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <div
                className="w-full flex flex-col gap-5 text-center md:text-left"
                data-aos="fade-up"
              >
                {/* Number */}
                <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
                  {item.num}
                </span>
                {/* Title */}
                <h2
                  className="text-xl font-semibold leading-relaxed text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {item.title}
                </h2>
              </div>
              {/* Arrow image (conditionally rendered for big screens) */}
              {showArrows && index < data.length - 1 && (
                <Image
                  src="/work/arrow.svg"
                  width={210}
                  height={300}
                  alt="arrow"
                  className="hidden absolute top-2 left-[4.5rem] xl:block "
                  data-aos="fade-right"
                  data-aos-delay="300"
                />
              )}
              {/* Description */}
              <p
                className="text-white mt-4 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Work component
const Work = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS library on component mount
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });

    // Check if the screen width is less than a certain threshold (e.g., 768 pixels)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check on mount
    handleResize();

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Data for XI and XII roadmaps
  const xiData = [
    {
      num: "01",
      title: "1st April to 15th May",
      description: " 45 Days : Beginning of the academic year",
    },
    {
      num: "02",
      title: "15th May to 30th May",
      description: " 15 Days : Summer Break",
    },
    {
      num: "03",
      title: "1st June to 31st October",
      description: "145 Days : Lectures, Revision, and Exams",
    },
    {
      num: "04",
      title: "21st October to 24th October",
      description: " 04 Days : Diwali Break",
    },
    {
      num: "05",
      title: " 5th November to 24th December ",
      description: "50 Days : Lectures, Revision session, and Tests",
    },
    {
      num: "06",
      title: "3rd January to 18th February",
      description: "45 Days : Lectures and term II",
    },
    {
      num: "07",
      title: "19th February to 15th March",
      description: "25 Days : Mid-year prep break",
    },
  ];

  const xiiData = [
    {
      num: "01",
      title: "16th March to 15th May",
      description: "60 Days : Beginning of the academic year",
    },
    {
      num: "02",
      title: "15th May to 30th May",
      description: "15 Days : Summer Break",
    },
    {
      num: "03",
      title: "1st June to 20th October",
      description: "140 Days : Lectures, Revision, and Exams",
    },
    {
      num: "04",
      title: "21st October to 24th October",
      description: "04 Days : Diwali Break",
    },
    {
      num: "05",
      title: " 25th November to 24th December",
      description: "30 Days : Exams and MHT-CET / JEE / NEET prep",
    },
    {
      num: "06",
      title: " 2nd January to 31st January",
      description: "30 Days : Exams and MHT-CET / JEE / NEET prep",
    },
    {
      num: "07",
      title: "01st February to 15th March",
      description: "45 Days : Board Exams",
    },
    {
      num: "08",
      title: "16th March to 30th April",
      description: "45 Days  : Crash Course (11th + 12th)",
    },
  ];

  // Settings for Slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: !isMobile && <CustomNextArrow />,
    prevArrow: !isMobile && <CustomPrevArrow />,
  };

  return (
    // Main section
    <section
      className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center m"
      id="roadmap"
    >
      {/* Container for content */}
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        {/* Slider component */}
        <Slider {...settings} className="mx-4">
          {/* Display XI Roadmap */}
          <Roadmap
            title="ROADMAP FOR XI"
            description="Explore the key milestones in our two-year educational journey."
            data={xiData}
          />

          {/* Display XII Roadmap */}
          <Roadmap
            title="ROADMAP FOR XII"
            description="Explore the key milestones in our second year of education."
            data={xiiData}
          />
        </Slider>
      </div>
    </section>
  );
};

// Export the component
export default Work;
