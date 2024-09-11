import React from "react";
import { useParams } from "react-router-dom";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Spinner from "../components/common/loader/Spinner";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/bird_2.jpg";
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
          <div className="w-full h-[120px] md:h-[200px] bg-black text-white flex items-center justify-center text-md md:text-lg lg:text-xl xl:text-2xl font-black mb-8 lg:mb-12">
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
                <div className="py-5 border-b border-bslate-600">
                  <div className="flex items-center gap-1 mb-3">
                    <p className="font-black">{t("project date")} :</p>
                    <p className="text-slate-500">25-10-2023</p>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <p className="font-black">{t("visit the website")} :</p>
                    <a
                      className="text-slate-500 underline"
                      href="https://www.google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("visit the website")}
                    </a>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <p className="font-black">{t("type")} :</p>
                    <p className="text-slate-500">{t("websitee")}</p>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <p className="font-black">{t("status")} :</p>
                    <p className="text-slate-500">
                      {t("available on the internet")}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="font-bold mb-4 text-base md:text-md lg:text-lg ">
                    {t("client information")}
                  </h2>
                  <div className="flex items-center gap-4 lg:gap-8">
                    <p className="text-base md:text-md xl:text-lg font-black text-blue">
                      {data?.data?.data?.title}
                    </p>
                    <img
                      loading="lazy"
                      src={logo}
                      alt={data?.data?.data?.title}
                      className="h-[80px] w-[80px]"
                    />
                  </div>
                  <div>
                    <p className=" font-semibold">{t("about the client")} : </p>
                    <p className="text-slate-500 w-full md:w-1/2">
                      {t("lorem").slice(0, 150)}
                    </p>
                  </div>
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
