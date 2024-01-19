import Image from "next/image";
import Link from "next/link";

// TODO :- Make add the content

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="flex flex-col gap-2 md:gap-5">
          <p className="capitalize text-5xl md:text-6xl 2xl:text-7xl font-bold">
            PINNACLE GROUP TUITIONS
          </p>
        </h1>

        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
          Empowering Minds, Shaping Futures: Pinnacle Group Tuitions, Where
          Excellence Meets Education.
        </p>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="#">Explore</Link>
        </button>
      </div>
      <div className="w-full relative">
        // TODO :- Try Converting This into a carousel
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/hero.jpeg"}
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
