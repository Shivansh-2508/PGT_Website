import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const OurMission = () => {
  return (
    <>
      {" "}
      <section className='container mx-auto px-5 md:px-16' id='OurMission'>
        <span className='service-name text-center' style={{ fontSize: "28px" }}>
          Mission{" "}
        </span>
        <h2
          className='title w-50 text-center py-5'
          style={{ fontSize: "18px" }}>
          Impacting the lives of all students who choose to embark on their
          educational journey with us by prioritize personal attention and care,
          ensuring that each student receives a tailored learning experience.
        </h2>
      </section>
      <section className='container mx-auto px-5 md:px-16' id='OurMission'>
        <span className='service-name text-center' style={{ fontSize: "28px" }}>
          Vision{" "}
        </span>
        <h2
          className='title w-50 text-center py-5'
          style={{ fontSize: "18px" }}>
          We envision to revolutionize coaching industry by focusing on
          imparting education with high value addition and yet be profitable and
          sustainable.
        </h2>
      </section>
      <section className='container mx-auto px-5 md:px-16' id='OurMission'>
        <span className='service-name text-center' style={{ fontSize: "28px" }}>
          About Us{" "}
        </span>
        <h2
          className='title w-50 text-center py-5'
          style={{ fontSize: "18px" }}>
          Welcome to Pinnacle, where we blend traditional and modern teaching
          for academic success and values-driven citizenship. Our passionate
          educators foster holistic development, guiding students at all levels
          towards greatness. Join us for a supportive community, achieving
          excellence beyond the classroom.
        </h2>
      </section>
    </>
  );
};

export default OurMission;
