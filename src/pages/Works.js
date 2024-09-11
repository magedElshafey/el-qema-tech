import React from "react";
import WorksCard from "../components/common/cards/WorksCard";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { request } from "../services/axios";
import Spinner from "../components/common/loader/Spinner";
const Works = () => {
  const { t } = useTranslation();
  const fetchData = async () => {
    return await request({
      url: "/works",
    });
  };
  const { isLoading, data } = useQuery("works", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="my-8 lg:my-12 container mx-auto px-6 md:px-8 lg:px-12">
          <p className="text-xs md:text-sm text-blue font-semibold mb-1 text-center">
            {t("our works")}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl  font-extrabold text-center mb-5 lg:mb-8">
            {t("our works desc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {data?.data?.data.map((item, index) => (
              <WorksCard key={index} data={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Works;
