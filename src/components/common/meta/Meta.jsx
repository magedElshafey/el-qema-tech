import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../hooks/api/GlobalContext";
const Meta = ({ title, desc, fav }) => {
  const { i18n } = useTranslation();
  const { data } = useGlobalContext();
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title ? title : i18n.language === "ar" ? "القمة تيك" : "El-Qema Tech"}
      </title>
      <meta name="description" content={desc} />
      <link rel="icon" href={data?.fav_icon} />
    </Helmet>
  );
};

export default Meta;
