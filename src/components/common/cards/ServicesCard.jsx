import React from "react";
import { useTranslation } from "react-i18next";
const ServicesCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="p-5 bg-white  shadow-lg flex flex-col items-center justify-center gap-3 duration-300 group  hover:bg-blue hover:text-white border">
      <img
        alt={data?.title}
        src={data?.icon}
        className="w-[64px] h-[64px]  group-hover:brightness-0 group-hover:invert"
      />
      <p className="text-center text-md md:text-lg lg:text-xl xl:text-2xl font-extrabold ">
        {t(data?.title)}
      </p>
      <p className="text-center ">{t(data?.desc)}</p>
    </div>
  );
};

export default ServicesCard;
