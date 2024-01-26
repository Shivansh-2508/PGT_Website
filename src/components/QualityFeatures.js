import Image from "next/image";
import small_batch from "../../public/features/new_icons/Small_batch.svg";
import dotpct from "../../public/features/new_icons/Dot_PCT.svg";
import flexi from "../../public/features/new_icons/Flexi_Pay.svg";
import Guranteed from "../../public/features/new_icons/Guranteed_Results.svg";
import Mentorship from "../../public/features/new_icons/Mentorship.svg";
import Mission from "../../public/features/new_icons/Mission_Admission.svg";
import Monitored from "../../public/features/new_icons/Monitored_Library.svg";
import PCT from "../../public/features/new_icons/PCT.svg";
import small from "../../public/features/new_icons/Small_batch.svg";
import asess from "../../public/features/new_icons/Asses_Regroup.svg";
const QualityFeature = ({ imgSrc, title, subHeading, desc }) => {
  return (
    <div className='flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8'>
      <Image src={imgSrc} width={80} height={80} alt='features' />
      <div className='leading-loose'>
        <h3 className='text-lg md:text-xl font-semibold mb-1'>{title}</h3>
        {subHeading && (
          <h4 className='text-sm font-medium mb-4'>{subHeading}</h4>
        )}
        <p className='text-sm'>{desc}</p> {/* Adjusted font size here */}
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  const featuresData = [
    {
      imgSrc: small,
      title: "SMALL BATCH ",
      subHeading: "10 Students a Batch",
      desc: "With small batches students are bound to pay attention & cannot escape the watchful EYES of the teacher",
    },
    {
      imgSrc: dotpct,
      title: "DOT PCT",
      subHeading: "INTEGRATED PATTERN",
      desc: "IIT-JEE/NEET/MHT-CET are highly competative exams and demand lots of practice and dedicated time with least distraction.",
    },
    {
      imgSrc: Mentorship,
      title: "MENTORSHIP",
      subHeading: "Guidance at Every Step",
      desc: "At every stage in our journey of 2 Years you will not find yourself alone. Special assistance at each and every stage of course",
    },
    {
      imgSrc: asess,
      title: "ASSESS & REGROUP",
      subHeading: "Monitor and Adjust",
      desc: "No one is perfect. But periodic progress checks and evasive actions will make sure you are always ON track.",
    },
    {
      imgSrc: PCT,
      title: "PCT",
      subHeading: "CBSE | HSC",
      desc: "We create Seperate batches for CBSE & HSC. As a result we make sure that every student gets a tailored cirriculum to learn and absorb at their speed.",
    },
    {
      imgSrc: flexi,
      title: "FLEXIBLE PAYMENTS",
      subHeading: "Customized Payment Plans",
      desc: "Pay for lith in 1st year & 12th in 2nd year. This will help you plan your finances while you make sure you give your CHILD the best quality education.",
    },
    {
      imgSrc: Mission,
      title: "MISSION ADMISSION",
      subHeading: "Expert Guidance",
      desc: "We guide you through the admission process even after the exams are over. An absolute essential.",
    },
    {
      imgSrc: Guranteed,
      title: "GUARANTEED RESULTS",
      subHeading: "Equal Treatment for All",
      desc: "We understand it's our duty to treat all students equally. Weak students will need more assistance than rankers, and we're ready with our team.",
    },
    {
      imgSrc: Monitored,
      title: "MONITORED LIBRARY",
      subHeading: "CCTV Monitored",
      desc: "Functions and guests are inevitable. Hence, we have set up a CCTV-monitored library for students to come and study at our center and get instant assistance.",
    },
  ];

  return (
    <section className='container mx-auto px-5 md:px-16'>
      <span className='service-name text-center ' data-aos='fade-up'>
        QUALITY FEATURES
      </span>
      <h2 className='title text-center ' data-aos='fade-up'>
        Amazing useful features
      </h2>

      <div
        className='grid gap-x-4 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 lg:w-[88%] mx-auto'
        data-aos='fade-up'>
        {featuresData.map((feature, index) => (
          <QualityFeature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default QualityFeatures;
