import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div className='flex flex-col items-center'>
      <Image src={imgSrc} width={350} height={350} alt='features' />
      <h3 className='text-xl font-semibold my-2'>{title}</h3>
      <p className='text-sm'>{desc}</p>
    </div>
  );
};

const Features = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2, 
    slidesToScroll: 1,
  };

  return (
    <section className='container mx-auto px-5 md:px-16' id='features'>
      <span className='service-name text-center' style={{ fontSize: "28px" }}>
        Congratulations{" "}
      </span>
      <h2 className='title text-center' style={{ fontSize: "18px" }}>
        Meet The Toppers
      </h2>

      <Slider {...sliderSettings} className='mt-10 md:mt-20'>
        <FeatureProduct imgSrc='/features/1file.jpeg' title='' desc='' />
        <FeatureProduct imgSrc='/features/2file.jpeg' title='' desc='' />
        <FeatureProduct imgSrc='/features/3file.jpeg' title='' desc='' />
        <FeatureProduct imgSrc='/features/4file.jpeg' title='' desc='' />
   
      </Slider>
    </section>
  );
};

export default Features;
