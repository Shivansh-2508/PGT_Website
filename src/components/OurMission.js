import React from "react";
import Image from "next/image";

const OurMission = () => {
  const isDarkMode = true; // Replace this with your actual dark mode detection logic

  return (
    <>
      <section
        className={`p-6 ${isDarkMode ? "dark:text-white" : "text-black"}`}
      >
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-1 rounded-md sm:px-12 md:px-16 xl:col-span-2">
            <span
              className={`block mb-2 ${
                isDarkMode ? "dark:text-rose-800" : "text-black"
              }`}
            >
              Pinnacle Group Tuitions
            </span>
            <h1
              className={`text-3xl font-extrabold ${
                isDarkMode ? "dark:text-gray-50" : "text-black"
              }`}
            >
              About Us
            </h1>
            <p
              className={`my-4 ${
                isDarkMode ? "text-gray-900 dark:text-gray-50" : "text-black"
              }`}
            >
              <span className={`font-medium ${isDarkMode ? "" : "text-black"}`}>
                Welcome to Pinnacle,
              </span>
              where we blend traditional and modern teaching for academic
              success and values-driven citizenship. Our passionate educators
              foster holistic development, guiding students at all levels
              towards greatness.
            </p>

            <h1
              className={`text-3xl font-extrabold ${
                isDarkMode ? "dark:text-gray-50" : "text-black"
              }`}
            >
              Our Vision
            </h1>
            <p
              className={`my-4 ${
                isDarkMode ? "text-gray-900 dark:text-gray-50" : "text-black"
              }`}
            >
              <span className={`font-medium ${isDarkMode ? "" : "text-black"}`}>
                We envision to revolutionize the coaching industry by focusing
                on imparting education with high value addition and yet be
                profitable and sustainable.
              </span>
            </p>
            <h1
              className={`text-3xl font-extrabold ${
                isDarkMode ? "dark:text-gray-50" : "text-black"
              }`}
            >
              Our Mission
            </h1>
            <p
              className={`my-4 ${
                isDarkMode ? "text-gray-900 dark:text-gray-50" : "text-black"
              }`}
            >
              <span className={`font-medium ${isDarkMode ? "" : "text-black"}`}>
                Impacting the lives of all students who choose to embark on
                their educational journey with us by prioritizing personal
                attention and care, ensuring that each student receives a
                tailored learning experience.
              </span>
            </p>
          </div>

          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </>
  );
};

export default OurMission;
