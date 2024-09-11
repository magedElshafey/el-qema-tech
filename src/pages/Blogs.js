import React from "react";
import BlogCard from "../components/common/cards/BlogCard";
import { useQuery } from "react-query";
import { request } from "../services/axios";
import Spinner from "../components/common/loader/Spinner";
const fetchBlogsData = async () => {
  return await request({
    url: "/blogs",
  });
};
const Blogs = () => {
  const { isLoading, data } = useQuery("blogs", fetchBlogsData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="my-8 lg:my-12 container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {data?.data?.data?.map((item, index) => (
              <BlogCard key={index} data={item} index={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
