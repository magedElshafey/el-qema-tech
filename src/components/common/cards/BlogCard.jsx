import React from "react";
import MainBtn from "../buttons/MainBtn";
import { useNavigate } from "react-router-dom";
const BlogCard = ({ data, index }) => {
  const navigate = useNavigate();
  const handleNavigate = (i) => navigate(`/blogs/${i}`);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index + 100}
      className="bg-white rounded-md overflow-hidden relative"
    >
      <img
        alt={data?.title}
        src={data?.img}
        className="h-[250px]  lg:h-[215px] w-full mb-5 lg:mb-8 duration-300 hover:scale-105 cursor-pointer"
        loading="lazy"
      />
      <div className=" z-50 absolute top-0 py-2 left-0 w-[80px] flex flex-col items-center justify-center text-white bg-red font-bold">
        <p>{data?.day}</p>
        <p>{data?.month}</p>
      </div>
      <div className="p-3">
        <p className="text-center mb-4 font-semibold text-md md:text-lg lg:text-xl">
          {data?.title}
        </p>
        <p className="text-slate-500 mb-8">
          {data?.desc?.substr(0, 80)} {data?.desc?.length > 80 ? "..." : null}
        </p>
        <div className="w-full md:w-[150px]">
          <MainBtn text="read more" action={() => handleNavigate(data.id)} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
