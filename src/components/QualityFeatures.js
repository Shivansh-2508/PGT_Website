import Image from "next/image";

const QualityFeature = ({ imgSrc, title, subHeading, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
        {subHeading && (
          <h4 className="text-sm font-medium mb-4">{subHeading}</h4>
        )}
        <p className="text-sm">{desc}</p> {/* Adjusted font size here */}
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  const featuresData = [
    {
      imgSrc: "/features/1.svg",
      title: "SMALL BATCH",
      subHeading: "10 Students a Batch",
      desc: "With small batches students are bound to pay attention & cannot escape the watchful EYES of the teacher",
    },
    {
      imgSrc: "/features/2.svg",
      title: "DOT PCT",
      subHeading: "INTEGRATED PATTERN",
      desc: "IIT-JEE/NEET/MHT-CET are highly competative exams and demand lots of practice and dedicated time with least distraction.",
    },
    {
      imgSrc: "/features/3.svg",
      title: "MENTORSHIP",
      subHeading: "Guidance at Every Step",
      desc: "At every stage in our journey of 2 Years you will not find yourself alone. Special assistance at each and every stage of course",
    },
    {
      imgSrc: "/features/4.svg",
      title: "ASSESS & REGROUP",
      subHeading: "Monitor and Adjust",
      desc: "No one is perfect. But periodic progress checks and evasive actions will make sure you are always ON track.",
    },
    {
      imgSrc: "/features/4.svg",
      title: "PCT",
      subHeading: "CBSE | HSC",
      desc: "We create Seperate batches for CBSE & HSC. As a result we make sure that every student gets a tailored cirriculum to learn and absorb at their speed.",
    },
    {
      imgSrc: "/features/4.svg",
      title: "FLEXIBLE PAYMENTS",
      subHeading: "Customized Payment Plans",
      desc: "Pay for lith in 1st year & 12th in 2nd year. This will help you plan your finances while you make sure you give your CHILD the best quality education.",
    },
    {
      imgSrc: "/features/4.svg",
      title: "MISSION ADMISSION",
      subHeading: "Expert Guidance",
      desc: "We guide you through the admission process even after the exams are over. An absolute essential.",
    },
    {
      imgSrc: "/features/4.svg",
      title: "GUARANTEED RESULTS",
      subHeading: "Equal Treatment for All",
      desc: "We understand it's our duty to treat all students equally. Weak students will need more assistance than rankers, and we're ready with our team.",
    },
    {
      imgSrc: "/features/4.svg",
      title: "MONITORED LIBRARY",
      subHeading: "CCTV Monitored",
      desc: "Functions and guests are inevitable. Hence, we have set up a CCTV-monitored library for students to come and study at our center and get instant assistance.",
    },
  ];

  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">QUALITY FEATURES</span>
      <h2 className="title text-center ">Amazing useful features</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-3 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        {featuresData.map((feature, index) => (
          <QualityFeature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default QualityFeatures;
