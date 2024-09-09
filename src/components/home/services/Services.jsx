import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { services } from "../../../data/data";
import ServicesCard from "../../common/cards/ServicesCard";
const Services = ({ data }) => {
  const { i18n } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    slidesToShow: 3,
    verical: false,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    speed: 5000,
    autoplaySpeed: 5000,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
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
    <div className="w-full relative">
      <button
        onClick={i18n.language === "ar" ? slickNext : slickPrev}
        className=" absolute top-[30%]  right-0 cursor-pointer w-10 h-10 rounded-[50%] flex items-center justify-center bg-gray-200 z-50"
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
        className=" absolute top-[30%]  left-0 cursor-pointer w-10 h-10 rounded-[50%] flex items-center justify-center bg-gray-200 z-50"
      >
        <p>
          {i18n.language === "ar" ? (
            <IoIosArrowBack size={20} />
          ) : (
            <IoIosArrowForward size={20} />
          )}
        </p>
      </button>
      <Slider ref={sliderRef} {...settings}>
        {data?.map((item, index) => (
          <div key={index} className="px-3">
            <ServicesCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
