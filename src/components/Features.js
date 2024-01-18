import Image from "next/image";
import React from "react";

// TODO :- Make add the content

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">Why Choose Us ?</span>
      <h4 className="title text-center">
        {" "}
        Empower your education with our focused execllence{" "}
      </h4>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Small Batch"
          desc="10 students in a batch.
          With small batches students are bound to pay attention & cannot escape the watchful EYES of the teacher."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Integrated Pattern"
          desc="IIT-JEE/NEET/MHT-CET are highly competetive exams and demand lots of practice and dedicated time with least distraction."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Mentorship"
          desc="At every stage in our journey of 2 years you will not find yourself alone. Special assistance at each and every stage of the course."
        />
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Experienced Teachers"
          desc="Our classes features a team of highly experienced and passionate eduactors who find immense joy in imparting knoweledge and are dedicated to guiding students towrds academic success."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Assess & Regroup"
          desc="No one is perfect. But periodic progress checks and evasive actions will make sure you are always ON track."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="CBSE | HSC "
          desc="We create seperate batches for CBSE & HSC. As a result we make sure that every student gets tailored cirriculum to learn and absorb at their speed."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Flexible Payments "
          desc="Pay for 11th in 1st year & 12th in 2nd year. This will help you plan your finances while you make sure you give your CHILD the best quality education."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Mission Admission"
          desc="We guide you through the admission process even after the EXAMS are over. An absolute ESSENTIAL."
        />
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Guranteed Results"
          desc="We understand its our DUTY to treat ALL students equal. WEAK students will need more assistance than RANKERS & we are ready with our team. "
        />
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Monitored Liabrary"
          desc="FUNCTIONS & GUESTs are inveitable, Hence we have set up a CCTV monitored liabrary for the students to come and study at our center and get instant assistance."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Regular Assessments"
          desc="Our regular test series, deigned in line with the Board exam pattern, along with detailed feedback through understanding and effective exam pattern ."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Doubt Clearing Sessions "
          desc="A team of highly trained tutors take on the responsibilty of conducting doubt clearing sessions, ensuring quick resolution of students queries,and providing prsonalized attention."
        />
      </div>
    </section>
  );
};

export default Features;
