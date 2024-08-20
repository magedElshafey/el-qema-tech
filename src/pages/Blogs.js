import React from "react";
import { blogs } from "../data/data";
import BlogCard from "../components/common/cards/BlogCard";
const Blogs = () => {
  return (
    <div className="my-8 lg:my-12 container mx-auto px-6 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
        {blogs?.map((item, index) => (
          <BlogCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
