import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div className="text-left">
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <div className="text-center">
        <h2 className="service-name text-4xl font-bold text-red-500 mb-4">
          WHY CHOOSE US ?
        </h2>
        <p className="title text-sm sm:text-base mb-8 text-gray-600">
          Empower your education with our focused excellence
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-16">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Small Batch Sizes"
          desc="Experience personalized learning with small batches. Receive focused attention from our dedicated educators."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Integrated Exam Patterns"
          desc="Master competitive exams with our integrated approach. Gain valuable insights into IIT-JEE, NEET, and MHT-CET patterns."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Expert Mentorship"
          desc="Navigate your educational journey with mentorship at every stage. Our experienced mentors ensure your success."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Tailored Curricula"
          desc="Choose the right path for your academic success. Tailored curricula for CBSE and HSC students ensure effective learning."
        />
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Progressive Assessments"
          desc="Stay on track with regular assessments designed in line with board exam patterns. Receive detailed feedback for continuous improvement."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Doubt Clearing Sessions"
          desc="Our expert tutors conduct personalized doubt clearing sessions, ensuring quick resolution of queries and providing individualized attention."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Flexible Payments"
          desc="Manage your finances strategically. Pay for 11th in the 1st year and 12th in the 2nd year, ensuring quality education for your child."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Mission Admission"
          desc="We guide you through the admission process even after exams. Ensuring a seamless transition to the next phase of your educational journey."
        />
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Guaranteed Results"
          desc="Our commitment to equality ensures that every student, regardless of their proficiency, receives dedicated assistance from our team of educators."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Monitored Library"
          desc="Enjoy a quiet and monitored library for focused study sessions. Our CCTV-monitored space ensures a secure and supportive environment."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Regular Assessments"
          desc="Participate in our regular test series designed in line with board exam patterns. Receive detailed feedback for improved understanding and effective exam preparation."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Personalized Learning"
          desc="Experience personalized learning with our dedicated educators. Our team is passionate about imparting knowledge and ensuring your academic success."
        />
      </div>
    </section>
  );
};

export default Features;
