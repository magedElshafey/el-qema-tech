import React from "react";
import { useTranslation } from "react-i18next";
const About = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-5 flex items-center  bg-[#f9f9f9f9] mb-8 lg:mb-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div>
            <p className="text-xs md:text-sm text-blue font-semibold mb-1">
              {t("about us")}
            </p>
            <p className=" font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-5">
              {data?.title}
            </p>
            <p className=" text-slate-700">{data?.content}</p>
          </div>
          <img alt="about us" src={data?.image} className="max-h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
/**
 *   <div >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 items-center">
          <div className="w-full md:w-[60%]">
           
          
           
          </div>
          <div className="w-full md:w-[40%] flex justify-center">
         
          </div>
        </div>
      </div>
    </div>
 */
