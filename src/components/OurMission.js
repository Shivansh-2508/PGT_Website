import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const OurMission = () => {
  return (
    <>
      {" "}
      <section className='p-6 dark:text-gray-100'>
        <div className='container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5'>
          <div className='w-full px-6 py-1 rounded-md sm:px-12 md:px-16 xl:col-span-2'>
            <span className='block mb-2 dark:text-rose-800'>
              Pinnacle Group Tuitions
            </span>
            <h1 className='text-3xl font-extrabold dark:text-gray-50'>
              About Us
            </h1>
            <p className='my-4'>
              <span className='font-medium dark:text-gray-50'>
                Welcome to Pinnacle,
              </span>
              where we blend traditional and modern teaching for academic
              success and values-driven citizenship. Our passionate educators
              foster holistic development, guiding students at all levels
              towards greatness.
            </p>

            <h1 className='text-3xl font-extrabold dark:text-gray-50'>
              Our Vision
            </h1>
            <p className='my-4'>
              <span className='font-medium dark:text-gray-50'>
                We envision to revolutionize coaching industry by focusing on
                imparting education with high value addition and yet be
                profitable and sustainable.
              </span>
            </p>
            <h1 className='text-3xl font-extrabold dark:text-gray-50'>
              Our Mission
            </h1>
            <p className='my-4'>
              <span className='font-medium dark:text-gray-50'>
                Impacting the lives of all students who choose to embark on
                their educational journey with us by prioritize personal
                attention and care, ensuring that each student receives a
                tailored learning experience.
              </span>
            </p>
          </div>

          <img
            src='https://source.unsplash.com/random/480x360'
            alt=''
            className='object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500'
          />
        </div>
      </section>
    </>
  );
};

export default OurMission;
