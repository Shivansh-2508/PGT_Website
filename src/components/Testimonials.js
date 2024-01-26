import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import { useEffect } from "react";
import { useState } from "react";
import reviewsData from "../API/data.json";
import hello from "../../public/team/1.png";
// TODO : Add Props to Card Component

const Card = ({ star, title, desc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
       
      </div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="leading-loose">{desc}</p>
      <div className="flex items-center gap-4 mt-5">
        {/* <Image src={imgSrc} width={50} height={50} alt='testimonials' /> */}
        <div>
          <h3 className='font-semibold'></h3>
          <Link href='#' target='_blank' className='text-rose-600 font-[500]'>
            @Google Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    // Set the data from the imported JSON file
    setReviews(reviewsData);
  }, []);
  return (
    <section
      className='relative container mx-auto px-5 md:px-16 flex flex-col gap-5'
      id='testimonial'>
      <div>
        <span className='service-name text-center '>TESTIMONIAL</span>
        <h2 className='title text-center '>Meet Client Satisfaction</h2>
      </div>
      {reviews &&
        reviews.length > 0 && ( // Check if reviews array exists and has elements
          <Carousel {...carouselParams}>
            {reviews.map((review, index) => (
              <div key={index}>
                <Card
                  key={index}
                  star={<StarHalfRoundedIcon />}
                  title={review.username}
                  desc={review.snippet}
                />
              </div>
            ))}
          </Carousel>
        )}
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
