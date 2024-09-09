import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { request } from "../services/axios";
import Spinner from "../components/common/loader/Spinner";
import { useParams, useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/common/cards/BlogCard";
const Blog = () => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const fetchBlogData = async () => {
    return await request({
      url: `/blogs/${params?.id}`,
    });
  };
  const { isLoading, data } = useQuery(
    ["blog-details", params.id],
    fetchBlogData
  );
  console.log("data returned from cover", data?.data?.data);
  useEffect(() => {
    if (data && !params.slug && data?.data?.data?.blog?.slug) {
      const originalSlug = data?.data?.data?.blog?.slug;

      // Update the URL with the slug without reloading the page
      navigate(`/blogs/${params?.id}/${originalSlug}`, { replace: true });
    }
  }, [data, params.slug, params.id, navigate]);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <img
            alt={data?.data?.data?.blog?.title}
            src={data?.data?.data?.blog?.cover}
            className="w-full h-[350px] object-cover"
          />
          <div className="my-8 lg:my-12 w-full bg-[#f9f9f9f9] flex items-center py-6">
            <div className="container mx-auto px-8 md:px-12 lg:px-16">
              <div className="flex justify-between items-center mb-8 lg:mb-16 gap-6 flex-wrap">
                <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl text-blue flex-1">
                  {data?.data?.data?.blog?.title}
                </h1>
                <div className="flex items-center gap-2 text-slate-600">
                  <SlCalender size={20} />
                  <p>{data?.data?.data?.blog?.full_date}</p>
                </div>
              </div>
              <div className="flex  justify-between flex-col md:flex-row gap-8 mb-8 lg:mb-16">
                <p className="flex-1">{data?.data?.data?.blog?.description}</p>
                <img
                  alt={data?.data?.data?.blog?.title}
                  src={data?.data?.data?.blog?.image}
                  className="w-[250px] h-[250px] rounded-md"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-blue text-center font-bold text-base md:text-md lg:text-lg xl:text-xl mb-8 ">
                  {t("related blogs")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                  {data?.data?.data?.blogs?.map((item, index) => (
                    <BlogCard key={index} data={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
