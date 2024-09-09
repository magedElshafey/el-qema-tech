import React from "react";
import Hero from "../components/home/hero/Hero";
import { useTranslation } from "react-i18next";
import {
  whyUs,
  orgnizations,
  portfolios,
  blogs,
  steps,
  statistics,
} from "../data/data";
import FeatuerCard from "../components/common/cards/FeatuerCard";
import OrgnizationsCard from "../components/common/cards/OrgnizationsCard";
import About from "../components/home/about/About";
import Services from "../components/home/services/Services";
import WorksCard from "../components/common/cards/WorksCard";
import Static from "../components/home/static/Static";
import Contact from "../components/home/contact/Contact";
import MainBtn from "../components/common/buttons/MainBtn";
import { useNavigate } from "react-router-dom";
import ContactDetails from "../components/home/contact/ContactDetails";
import Team from "../components/home/team/Team";
import BlogCard from "../components/common/cards/BlogCard";
import Steps from "../components/home/steps/Steps";
import Statistics from "../components/home/statistics/Statistics";
import Clients from "../components/home/clients/Clients";
import { useQuery } from "react-query";
import { request } from "../services/axios";
import Spinner from "../components/common/loader/Spinner";
const fetchHomeData = async () => {
  return await request({
    url: "/home",
  });
};
const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleWorksNavigate = () => navigate("/works");
  const handleBlogsNavigate = () => navigate("/blogs");
  const { isLoading, data } = useQuery("home", fetchHomeData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="my-8 lg:my-12">
          {/* hero section */}
          <Hero data={data?.data?.data?.banner} />
          {/**client slider section*/}
          <Clients data={data?.data?.data?.customers} />
          {/* why us section */}
          <div className="mb-12 lg:mb-16 w-full py-5 flex items-center bg-darkColor">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
              <p className="mb-3 text-center text-md md:text-lg lg:text-xl xl:text-2xl font-bold mx-auto text-white">
                {t("why us")}
              </p>
              <p className="text-center mx-auto text-xs md:text-sm text-slate-200 mb-8">
                {t("why us desc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {data?.data?.data?.features?.map((item, index) => (
                  <FeatuerCard data={item} key={index} />
                ))}
              </div>
            </div>
          </div>
          {/* our orgnization section */}
          <div className="mb-12 lg:mb-16 container mx-auto px-6 md:px-8 lg:px-12">
            <p className="mb-3 text-center text-md md:text-lg lg:text-xl xl:text-2xl font-bold mx-auto">
              {t("orgnizations")}
            </p>
            <p className="text-center mx-auto text-xs md:text-sm text-blue mb-8">
              {t("orgnizations desc")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {data?.data?.data?.solutions?.map((item, index) => (
                <OrgnizationsCard data={item} key={index} />
              ))}
            </div>
          </div>
          {/* about us section */}
          <About />
          {/* services */}
          <div className="mb-12 lg:mb-24 container mx-auto px-6 md:px-8 lg:px-12">
            <p className="text-xs md:text-sm text-blue font-semibold mb-1 text-center">
              {t("services")}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl  font-extrabold text-center mb-5 lg:mb-8">
              {t("services desc")}
            </p>
            <Services data={data?.data?.data?.services} />
          </div>
          {/* portfolio */}
          <div className="w-full py-5 flex items-center bg-[#f9f9f9] mb-8 lg:mb-24">
            <div className=" container mx-auto px-6 md:px-8 lg:px-12">
              <p className="text-xs md:text-sm text-blue font-semibold mb-1 text-center">
                {t("our works")}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl  font-extrabold text-center mb-5 lg:mb-8">
                {t("our works desc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {portfolios.slice(0, 6)?.map((item, index) => (
                  <WorksCard key={index} data={item} />
                ))}
              </div>
              <div className="w-full mt-5 md:mt-12 flex justify-center ">
                <div className="w-full md:w-[200px] lg:w-[250px]">
                  <MainBtn
                    type="button"
                    text="see more works"
                    action={handleWorksNavigate}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* statistics */}
          <Static />
          {/* contact us */}
          <div className="mb-8 lg:mb-24 container mx-auto px-6 md:px-8 lg:px-12">
            <Contact services={data?.data?.data?.services || []} />
          </div>
          {/* contact details */}
          <div className="mb-8 lg:mb-24 container mx-auto px-6 md:px-8 lg:px-12">
            <ContactDetails />
          </div>
          {/* blogs */}
          <div className="mb-8 lg:mb-24 w-full bg-[#f6f7f9] py-5 flex items-center">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
              <p className="text-xs md:text-sm text-blue font-semibold mb-1 text-center">
                {t("atricals")}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl  font-extrabold text-center mb-5 lg:mb-8">
                {t("atricals desc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                {data?.data?.data?.blogs?.slice?.(0, 4)?.map((item, index) => (
                  <BlogCard key={index} data={item} index={index} />
                ))}
              </div>
              <div className="w-full mt-5 md:mt-12 flex justify-center">
                <div className="w-full md:w-[200px] lg:w-[250px]">
                  <MainBtn
                    type="button"
                    text="see more blogs"
                    action={handleBlogsNavigate}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* mechanis, */}
          <div className="w-full py-5 flex items-center mb-8 lg:mb-24 bg-darkColor">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl  font-extrabold text-center mb-5 lg:mb-8 text-white ">
                {t("Mechanism")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {data?.data?.data?.how_to_works.map((item, index) => (
                  <Steps key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
          {/* our team */}
          {/* <div className="mb-8 lg:mb-24 container mx-auto px-6 md:px-8 lg:px-12">
            <p className="text-xs md:text-sm text-blue font-semibold mb-1 text-center">
              {t("team")}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl  font-extrabold text-center mb-5 lg:mb-8">
              {t("team desc")}
            </p>
            <Team />
          </div> */}
        </div>
      )}
    </>
  );
};

export default Home;
