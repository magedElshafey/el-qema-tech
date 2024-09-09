import React from "react";
import { useTranslation } from "react-i18next";
import style from "./hero.module.css";
import { useGlobalContext } from "../../../components/hooks/api/GlobalContext";
const Hero = ({ data = {} }) => {
  const { t } = useTranslation();
  const { data: global } = useGlobalContext();
  return (
    <div className="container mx-auto  px-6 md:px-8 lg:px-12">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
        <div>
          <p className="font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3">
            {data?.title}
          </p>
          <p className="mb-2">{data?.content}</p>
          <a
            className="w-[150px] p-3 rounded-md bg-red text-white flex items-center justify-center mb-5"
            href={`https://wa.me/${global?.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            {t("start now")}
          </a>
        </div>
        <img className={style.mainImg} alt="hero/img" src={data?.image} />
      </div>
    </div>
  );
};

export default Hero;
/**
 *    <div className="container mx-auto">
      <div className="w-full flex items-center flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-2">
        <div className="w-full md:w-[60%]">
        
        
        
        </div>
        <div className="w-full md:w-[40%]">
        
        </div>
      </div>
    </div>
 */
