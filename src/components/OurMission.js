import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import banner from "../../public/WPIC.jpg";
import banner2 from "../../public/LPIC.jpg";

const OurMission = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`p-6 ${theme === "dark" ? "dark:text-gray-100" : ""}`}
      id="about us"
    >
      <span
        className="service-name text-center mb-12"
        style={{ fontSize: "26px" }}
      >
        About us
      </span>
      <div className="container mx-auto text-center lg:flex lg:justify-end">
        {/* Image */}
        <div className="lg:w-1/2 max-w-[50vmax] aspect-w-1 aspect-h-1">
          {theme === "dark" ? (
            <Image
              src={banner}
              alt=""
              className="object-cover w-full h-full rounded-md"
              layout="responsive"
              // Change 40vmin to 40vh
            />
          ) : (
            <Image
              src={banner2}
              alt=""
              className="object-cover w-full h-full rounded-md"
              layout="responsive"
              // Change 40vmin to 40vh
            />
          )}
        </div>
        {/* Text */}
        <div className="lg:w-1/2 lg:pl-4">
          <h1 className="text-lg md:text-3xl font-semibold pt-6">
            Pinnacle Group Tuitions
          </h1>
          <p className="my-4 md:text-xl ">
            Welcome to Pinnacle, where we blend traditional and modern teaching
            for academic success and values-driven citizenship. Our passionate
            educators foster holistic development, guiding students at all
            levels towards greatness.
          </p>
          <h2 className="text-lg md:text-3xl font-semibold pt-8">Our Vision</h2>
          <p className="my-4 md:text-xl ">
            We envision to revolutionize coaching industry by focusing on
            imparting education with high value addition and yet be profitable
            and sustainable.
          </p>
          <h1 className="text-lg md:text-3xl font-semibold pt-8">
            Our Mission
          </h1>
          <p className="my-4 md:text-xl  ">
            Impacting the lives of all students who choose to embark on their
            educational journey with us by prioritize personal attention and
            care, ensuring that each student receives a tailored learning
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
