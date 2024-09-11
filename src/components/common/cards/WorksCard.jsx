import React from "react";
import { Link } from "react-router-dom";
const WorksCard = ({ data }) => {
  return (
    <div>
      <div className="relative h-[300px] cursor-pointer duration-300 group rounded-md mb-4">
        <img
          alt={data?.title}
          src={data?.image}
          className="w-full h-full  rounded-md"
          loading="lazy"
        />
        <div className=" hidden  duration-500 absolute top-0 left-0 w-full h-full z-50 bg-black bg-opacity-80 group-hover:flex items-center justify-center">
          <div className="w-[50%] h-[30%] flex flex-col items-center justify-center bg-white border rounded-md">
            <p className="text-xs md:text-sm text-slate-500 mb-1">
              {data?.solution}
            </p>
            <Link
              to={`/works/${data?.id}`}
              className="text-center mx-auto block  font-bold text-base md:text-md lg:text-lg xl:text-xl duration-300 hover:text-blue hover:underline w-fit"
            >
              {data?.title}
            </Link>
          </div>
        </div>
      </div>
      <Link
        to={`/works/${data?.id}`}
        className="text-center mx-auto block  font-bold text-base md:text-md lg:text-lg xl:text-xl duration-300 hover:text-blue hover:underline w-fit"
      >
        {data?.title}
      </Link>
    </div>
  );
};

export default WorksCard;
