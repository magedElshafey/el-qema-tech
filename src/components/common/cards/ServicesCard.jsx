import React from "react";
const ServicesCard = ({ data }) => {
  return (
    <div className="p-5 bg-white  shadow-lg flex flex-col items-center justify-center gap-3 duration-300 group  hover:bg-blue hover:text-white border">
      <img
        alt={data?.title}
        src={data?.image}
        className="w-[64px] h-[64px]  group-hover:brightness-0 group-hover:invert"
      />
      <p className="text-center text-md md:text-lg lg:text-xl xl:text-2xl font-extrabold ">
        {data?.title}
      </p>
      <p className="text-center ">{data?.description}</p>
    </div>
  );
};

export default ServicesCard;
