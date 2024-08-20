import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { clients } from "../../../data/data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import heroImg from "../../../assets/hero.webp";
import style from "./hero.module.css";
const Hero = () => {
  const { t, i18n } = useTranslation();
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
    <div className="container mx-auto px-6 md:px-8 lg:px-12 mb-8 lg:mb-12">
      <div className="w-full flex items-center flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-2">
        <div className="w-full md:w-[40%]">
          <p className="font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 w-full md:w-1/2">
            {t("we can")}
          </p>
          <p className="mb-2">{t("call us")}</p>
          <a
            className="w-[150px] p-3 rounded-md bg-red text-white flex items-center justify-center mb-5"
            href="https://wa.me/+201022153359"
            target="_blank"
            rel="noreferrer"
          >
            {t("start now")}
          </a>
          <div>
            <p className=" text-slate-500">{t("trusted")} : </p>
            <div className="w-full relative lg:w-3/4">
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
              <Slider ref={sliderRef} {...settings} className="">
                {clients?.map((item, index) => (
                  <div className=" text-center" key={index}>
                    <img
                      alt="clients"
                      src={item}
                      loading="lazy"
                      className=" w-20 object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <img className={style.mainImg} alt="hero/img" src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
