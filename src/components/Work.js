import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const WorkCard = ({ num, title, description }) => (
  <div className="w-full flex flex-col gap-3 text-center md:text-left">
    <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-white bg-black rounded-full py-2 px-3">
      {num}
    </span>
    <h2 className="text-lg font-semibold leading-relaxed text-black">
      {title}
    </h2>
    <p className="text-black text-left mt-2">{description}</p>
  </div>
);

const Work = () => {
  const xiData = [
    {
      num: "45 Days ",
      title: "1st April to 15th May",
      description: "Beginning of the academic year",
    },
    {
      num: "15 Days",
      title: "15th May to 30th May",
      description: "Summer Break",
    },
    {
      num: "145 Days ",
      title: "1st June to 31th October",
      description: "Lectures, Revision, and Exams",
    },
    {
      num: "04 Days",
      title: "21st October to 24th October",
      description: "Diwali Break",
    },
    {
      num: "50 Days ",
      title: "5th November to 24th December",
      description: "Lectures, Revision session, and Tests",
    },
    {
      num: "45 Days",
      title: "3rd January to 18th February",
      description: "Lectures and term II",
    },
    {
      num: "25 Days ",
      title: "19th February to 15th March",
      description: "Mid-year prep break",
    },
  ];

  const xiiData = [
    {
      num: "60 Days",
      title: "16th March to 15th May",
      description: "Beginning of the academic year",
    },
    {
      num: "15 Days ",
      title: "15th May to 30th May",
      description: "Summer Break",
    },
    {
      num: "140 Days ",
      title: "1st June to 20th October",
      description: "Lectures, Revision, and Exams",
    },
    {
      num: "04 Days ",
      title: "21st October to 24th October",
      description: "Diwali Break",
    },
    {
      num: "30 Days ",
      title: "25th November to 24th December",
      description: "Exams and MHT-CET / JEE / NEET prep",
    },
    {
      num: "30 Days",
      title: "02nd January to 31st January",
      description: "Exams and MHT-CET / JEE / NEET prep",
    },
    {
      num: "45 Days",
      title: "01st February to 15th March",
      description: "Board Exams",
    },
    {
      num: "45 Days ",
      title: "16th March to 30th April",
      description: "Crash Course (11th + 12th)",
    },
  ];

  return (
    <section className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <VerticalTimeline layout="2-columns">
          {/* XI Section */}
          <VerticalTimelineElement
            iconStyle={{ background: "#4B5563", color: "#fff" }}
            icon={
              <div className="flex items-center justify-center">
                <span className="text-xl font-semibold text-black">1</span>
                <Image
                  src="/work/arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </div>
            }
          >
            <div className="text-center">
              <h1 className="uppercase block font-semibold text-3xl tracking-widest text-black">
                ROADMAP FOR XI
              </h1>
              <p className="text-xl font-semibold leading-relaxed text-white mt-3">
                Explore the key milestones in our two-year educational journey.
              </p>
            </div>
          </VerticalTimelineElement>
          {xiData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#D3D3D3",
                color: "#333",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #D3D3D3" }}
              iconStyle={{ background: "#D3D3D3", color: "#333" }}
              icon={
                <div className="flex items-center justify-center">
                  <span className="text-xl font-semibold text-black">
                    {index + 2}
                  </span>
                  <Image
                    src="/work/arrow.svg"
                    width={40}
                    height={40}
                    alt="arrow"
                  />
                </div>
              }
            >
              <WorkCard {...item} />
            </VerticalTimelineElement>
          ))}

          {/* XII Section */}
          <VerticalTimelineElement
            iconStyle={{ background: "#4B5563", color: "#fff" }}
            icon={
              <div className="flex items-center justify-center">
                <span className="text-xl font-semibold text-black">
                  {xiData.length + 1}
                </span>
                <Image
                  src="/work/arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </div>
            }
          >
            <div className="text-center mt-10">
              <h1 className="uppercase block font-semibold text-3xl tracking-widest text-black">
                ROADMAP FOR XII
              </h1>
              <p className="text-xl font-semibold leading-relaxed text-white mt-3">
                Explore the key milestones in our second year of education.
              </p>
            </div>
          </VerticalTimelineElement>
          {xiiData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#D3D3D3",
                color: "#333",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #D3D3D3" }}
              iconStyle={{ background: "#D3D3D3", color: "#333" }}
              icon={
                <div className="flex items-center justify-center">
                  <span className="text-xl font-semibold text-black">
                    {xiData.length + index + 2}
                  </span>
                  <Image
                    src="/work/arrow.svg"
                    width={40}
                    height={40}
                    alt="arrow"
                  />
                </div>
              }
            >
              <WorkCard {...item} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Work;
