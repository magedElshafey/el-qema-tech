import React from "react";
import Logo from "../components/common/logo/Logo";
import { useTranslation } from "react-i18next";
import { navLinks, contactHeader } from "../data/data";
import { NavLink } from "react-router-dom";
import SocialMedia from "../components/common/socialMedia/SocialMedia";
import { useGlobalContext } from "../components/hooks/api/GlobalContext";
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { data } = useGlobalContext();
  return (
    <>
      <div className="w-full bg-darkColor py-5 flex items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 text-slate-300">
            <div>
              <Logo />
              <div className="mt-4 text-slate-100">{data?.selgon}</div>
            </div>
            <div>
              <p className="mb-4 font-bold text-base md:text-md lg:text-lg text-white">
                {t("important links")}
              </p>
              <ul>
                {navLinks?.map((item, index) => (
                  <li key={index} className="mb-3 text-slate-100">
                    <NavLink to={item.path}>{t(item.title)}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-bold text-base md:text-md lg:text-lg text-white">
                {t("contact us")}
              </p>
              <ul>
                <li className="flex items-center gap-1  mb-3">
                  <p className="text-slate-100">{contactHeader?.email?.icon}</p>
                  <a
                    href={`mailto:${data?.email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-100 lowercase"
                  >
                    {data?.email}
                  </a>
                </li>
                <li className="flex items-center gap-1 mb-3">
                  <p className="text-slate-100">{contactHeader?.phone?.icon}</p>
                  <a
                    dir="ltr"
                    href={`https://wa.me/${data?.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-100 lowercase"
                  >
                    {data?.phone}
                  </a>
                </li>
                <li className="flex items-center gap-1 ">
                  <p className="text-slate-100">
                    {contactHeader?.location?.icon}
                  </p>
                  <p className="text-slate-100">{data?.address}</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 font-bold text-base md:text-md lg:text-lg text-white">
                {t("follow us")}
              </p>
              <SocialMedia color="text-slate-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center  justify-center py-2 bg-bgColor">
        <p className="text-xs md:text-sm lg:text-base">
          {t("copyRight")}
          <a
            href="https://nxtlvladv.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-slate-400"
          >
            {t("elqema")}
          </a>
          © {currentYear}
        </p>
      </div>
    </>
  );
};

export default Footer;
