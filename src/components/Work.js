import Image from "next/image";

const WorkCard = ({ num, title }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed text-white">
        {title}
      </h2>
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div className="text-center">
          <h1 className="uppercase block font-semibold text-3xl tracking-widest text-white">
            ROADMAP FOR XI
          </h1>
          <p className="text-xl font-semibold leading-relaxed text-white mt-3">
            Explore the key milestones in our two-year educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard num="01" title="45 Days (1st April to 15th May)" />
            <Image
              src="/work/arrow.svg"
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
            <p className="text-white text-left mt-4">
              Beginning of the academic year
            </p>
          </div>

          <div className="relative">
            <WorkCard num="02" title="15 Days (15th May to 30th May)" />
            <Image
              src="/work/arrow.svg"
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
            <p className="text-white text-left mt-4">Summer Break</p>
          </div>

          <div className="relative">
            <WorkCard num="03" title="145 Days (1st June to 20th October)" />
            <Image
              src="/work/arrow.svg"
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
            <p className="text-white text-left mt-4">
              Lectures, Revision, and Exams
            </p>
          </div>

          <div className="relative">
            <WorkCard num="04" title="04 Days (21st October to 24th October)" />
            <Image
              src="/work/arrow.svg"
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
            <p className="text-white text-left mt-4">Diwali Break</p>
          </div>

          <div className="relative">
            <WorkCard
              num="05"
              title="50 Days (5th November to 24th December)"
            />
            <Image
              src="/work/arrow.svg"
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
            <p className="text-white text-left mt-4">
              Lectures, Revision session, and Tests
            </p>
          </div>

          <div className="relative">
            <WorkCard num="06" title="45 Days (3rd January to 18th February)" />
            <Image
              src="/work/arrow.svg"
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
            <p className="text-white text-left mt-4">Lectures and term II</p>
          </div>

          <div className="relative">
            <WorkCard num="07" title="25 Days (19th February to 15th March)" />

            <p className="text-white text-left mt-4">Mid-year prep break</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
