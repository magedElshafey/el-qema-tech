import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { team } from "../../../data/data";
const Team = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    slidesToShow: 4,
    verical: false,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    speed: 2000,
    autoplaySpeed: 2000,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
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
    <div>
      <div className="flex items-center justify-start  mb-3 gap-2">
        <button
          className=" cursor-pointer flex items-center justify-center text-white bg-red h-8 w-8 rounded-[50%]"
          onClick={slickNext}
        >
          {i18n.language === "ar" ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        <button
          className=" cursor-pointer flex items-center justify-center text-white bg-red h-8 w-8 rounded-[50%]"
          onClick={slickPrev}
        >
          {i18n.language === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {team.map((item, index) => (
          <div key={index} className="px-3">
            <img
              alt="team"
              src={item}
              className="w-full h-[250px] lg:h-[350px]  duration-300 team-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
