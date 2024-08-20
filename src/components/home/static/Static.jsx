import React from "react";
import img1 from "../../../assets/static-01.png";
import img2 from "../../../assets/static-02.png";
import style from "./static.module.css";
import { useTranslation } from "react-i18next";
const Static = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-8 lg:mb-12 w-full py-5 flex items-center bg-mint relative">
      <img
        alt="static"
        src={img1}
        loading="lazy"
        className={`h-[64px]  absolute top-[50%] left-0 ${style.mainImg}`}
      />
      <img
        alt="static"
        src={img2}
        loading="lazy"
        className={`h-[84px]  absolute top-[50%] right-0 ${style.mainImg}`}
      />
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="w-full flex justify-between items-center flex-col md:flex-row">
          <div className="w-full md:w-[40%]">
            <p className="w-full md:w-[60%] text-center text-md md:text-lg lg:text-xl xl:text-3xl font-extrabold">
              {t("static one")}
            </p>
          </div>
          <div className="w-full md:w-[40%]">
            <p className="w-full md:w-[60%] text-center text-md md:text-lg lg:text-xl xl:text-3xl font-extrabold">
              {t("static two")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
