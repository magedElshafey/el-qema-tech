import React from "react";
import { useTranslation } from "react-i18next";
const FeatuerCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 cursor-pointer rounded-md duration-300 flex flex-col items-center justify-center gap-3 hover:shadow-xl bg-white">
      <div className=" relative w-24 h-24 rounded-[50%] flex items-center justify-center bg-slate-800 text-white">
        <p>{data?.icon}</p>
        <div className="absolute top-0 left-0 w-4 h-4 bg-red rounded-full animate-rotate-top-left"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full animate-rotate-bottom-right"></div>
      </div>
      <p className="mt-3 font-bold text-base md:text-md lg:text-lg">
        {t(data?.title)}
      </p>
      <p className="text-center text-slate-500">{t(data?.desc)}</p>
    </div>
  );
};

export default FeatuerCard;
