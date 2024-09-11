import React from "react";
import { useParams } from "react-router-dom";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Spinner from "../components/common/loader/Spinner";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const fetchData = async () => {
    return await request({
      url: `/works/${params?.id}`,
    });
  };
  const { isLoading, data } = useQuery(["work-details", params?.id], fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="w-full h-[200px] bg-black text-white flex items-center justify-center text-md md:text-lg lg:text-xl xl:text-2xl font-black mb-8 lg:mb-12">
            <div className="flex items-center gap-2">
              <p>{t("home")}</p>
              <p>
                {i18n.language === "ar" ? (
                  <FaArrowLeft size={20} />
                ) : (
                  <FaArrowRightLong size={20} />
                )}
              </p>
              <p>{t("our works")}</p>
              <p>
                {i18n.language === "ar" ? (
                  <FaArrowLeft size={20} />
                ) : (
                  <FaArrowRightLong size={20} />
                )}
              </p>
              <p>{data?.data?.data?.title}</p>
            </div>
          </div>
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
              <div className="w-full md:w-1/2 flex flex-col items-center gap-3">
                <img
                  alt={data?.data?.data?.title}
                  src={data?.data?.data?.image}
                  loading="lazy"
                  className="w-[250px] h-[300px]"
                />
                {/* to do : slider */}
              </div>
              <div>
                <div className="pb-5 border-b border-bslate-600">
                  <h1 className="font-black text-blue text-md md:text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-8">
                    {data?.data?.data?.title}
                  </h1>
                  <p className="text-slate-500 mb-4">
                    {data?.data?.data?.description}
                  </p>
                  <p className="font-black text-base md:text-md lg:text-lg mb-2">
                    {t("category")} :
                  </p>
                  <p className="text-white p-3 bg-blue flex items-center justify-center rounded-md w-[180px]">
                    {data?.data?.data?.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
