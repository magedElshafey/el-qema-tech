import React from "react";
import { useTranslation } from "react-i18next";
const Steps = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-white">
      <div className="relative">
        <p
          dir="ltr"
          className=" font-extrabold text-4xl xl:text-5xl text-white "
        >
          0{data.id}
        </p>
        <img
          className="absolute top-0 left-[-32px] bg-mainColor flex items-center justify-center  h-8 w-8 md:w-10 md:h-10 rounded-[50%]"
          alt={data?.title}
          src={data?.icon}
        />
      </div>
      <p className=" font-extrabold  text-lg md:text-xl">{data.title}</p>
      <p className=" text-slate-200 text-center">{data.description}</p>
    </div>
  );
};

export default Steps;
