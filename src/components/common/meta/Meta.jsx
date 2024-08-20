import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Meta = ({ title, desc, fav }) => {
  const { i18n } = useTranslation();
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title ? title : i18n.language === "ar" ? "القمة تيك" : "El-Qema Tech"}
      </title>
      <meta name="description" content={desc} />
      <link rel="icon" href={fav} />
    </Helmet>
  );
};

export default Meta;
