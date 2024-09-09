import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
const Clients = ({ data }) => {
  const { i18n } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    slidesToShow: 5,
    verical: false,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    speed: 5000,
    autoplaySpeed: 2000,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const slickNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slickPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="w-full bg-[#d7dce4] py-5 flex items-center mb-8 lg:mb-12 bg-opacity-30">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        <button
          onClick={i18n.language === "ar" ? slickNext : slickPrev}
          className=" absolute top-[30%]  right-[8px] cursor-pointer w-10 h-10 rounded-[50%] flex items-center justify-center bg-gray-200 z-50"
        >
          <p>
            {i18n.language === "ar" ? (
              <IoIosArrowForward size={20} onClick={slickNext} />
            ) : (
              <IoIosArrowBack size={20} onClick={slickPrev} />
            )}
          </p>
        </button>
        <button
          onClick={i18n.language === "ar" ? slickPrev : slickNext}
          className=" absolute top-[30%]  left-[8px] cursor-pointer w-10 h-10 rounded-[50%] flex items-center justify-center bg-gray-200 z-50"
        >
          <p>
            {i18n.language === "ar" ? (
              <IoIosArrowBack size={20} />
            ) : (
              <IoIosArrowForward size={20} />
            )}
          </p>
        </button>
        <Slider ref={sliderRef} {...settings} className="">
          {data?.map((item, index) => (
            <div className=" text-center" key={index}>
              <img alt="clients" src={item} loading="lazy" className="w-40" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
