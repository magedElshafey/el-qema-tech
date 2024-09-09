import React from "react";
import { useTranslation } from "react-i18next";
const OrgnizationsCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4 bg-white shadow-md">
      <img
        alt={data.title}
        src={data.image}
        className="w-[64px] h-[64px]"
        loading="lazy"
      />
      <p className="text-base md:text-md lg:text-lg font-semibold">
        {t(data?.title)}
      </p>
    </div>
  );
};

export default OrgnizationsCard;
