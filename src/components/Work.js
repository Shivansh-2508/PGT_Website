// Import necessary libraries and components
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Roadmap component to display XI and XII roadmaps
const Roadmap = ({ title, description, data }) => (
  <div>
    <div className='text-center'>
      <h1
        className='uppercase block font-semibold text-3xl tracking-widest text-white'
        data-aos='fade-up'>
        {title}
      </h1>
      <p
        className='text-xl font-semibold leading-relaxed text-white mt-3'
        data-aos='fade-up'
        data-aos-delay='100'>
        {description}
      </p>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5'>
      {data.map((item, index) => (
        <div key={index}>
          <div className='relative' data-aos='fade-up' data-aos-delay='200'>
            <div
              className='w-full flex flex-col gap-5 text-center md:text-left'
              data-aos='fade-up'>
              <span className='md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4'>
                {item.num}
              </span>
              <h2
                className='text-xl font-semibold leading-relaxed text-white'
                data-aos='fade-up'
                data-aos-delay='100'>
                {item.title}
              </h2>
            </div>
            {index < data.length - 1 && (
              <Image
                src='/work/arrow.svg'
                width={210}
                height={300}
                alt='arrow'
                className='hidden absolute top-2 left-[4.5rem] xl:block '
                data-aos='fade-right'
                data-aos-delay='300'
              />
            )}
            <p
              className='text-white text-left mt-4'
              data-aos='fade-up'
              data-aos-delay='400'>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Work component
const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  // Data for XI and XII roadmaps
  const xiData = [
    {
      num: "01",
      title: "45 Days (1st April to 15th May)",
      description: "Beginning of the academic year",
    },
    {
      num: "02",
      title: "15 Days (15th May to 30th May)",
      description: "Summer Break",
    },
    {
      num: "03",
      title: "145 Days (1st June to 31st October)",
      description: "Lectures, Revision, and Exams",
    },
    {
      num: "04",
      title: "04 Days (21st October to 24th October)",
      description: "Diwali Break",
    },
    {
      num: "05",
      title: "50 Days (5th November to 24th December)",
      description: "Lectures, Revision session, and Tests",
    },
    {
      num: "06",
      title: "45 Days (3rd January to 18th February)",
      description: "Lectures and term II",
    },
    {
      num: "07",
      title: "25 Days (19th February to 15th March)",
      description: "Mid-year prep break",
    },
  ];

  const xiiData = [
    {
      num: "01",
      title: "60 Days (16th March to 15th May)",
      description: "Beginning of the academic year",
    },
    {
      num: "02",
      title: "15 Days (15th May to 30th May)",
      description: "Summer Break",
    },
    {
      num: "03",
      title: "140 Days (1st June to 20th October)",
      description: "Lectures, Revision, and Exams",
    },
    {
      num: "04",
      title: "04 Days (21st October to 24th October)",
      description: "Diwali Break",
    },
    {
      num: "05",
      title: "30 Days (25th November to 24th December)",
      description: "Exams and MHT-CET / JEE / NEET prep",
    },
    {
      num: "06",
      title: "30 Days (02nd January to 31st January)",
      description: "Exams and MHT-CET / JEE / NEET prep",
    },
    {
      num: "07",
      title: "45 Days (01st February to 15th March)",
      description: "Board Exams",
    },
    {
      num: "08",
      title: "45 Days (16th March to 30th April)",
      description: "Crash Course (11th + 12th)",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <section className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center m">
      <div className='flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36'>
        <Slider {...settings} className='mx-4'>
          {/* Display XI Roadmap */}
          <Roadmap
            title='ROADMAP FOR XI'
            description='Explore the key milestones in our two-year educational journey.'
            data={xiData}
          />

          {/* Display XII Roadmap */}
          <Roadmap
            title='ROADMAP FOR XII'
            description='Explore the key milestones in our second year of education.'
            data={xiiData}
          />
        </Slider>
      </div>
    </section>
  );
};

export default Work;
