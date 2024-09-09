import React from "react";
import { useGlobalContext } from "../components/hooks/api/GlobalContext";
const Ending = () => {
  const { data } = useGlobalContext();
  return (
    <div className="ending py-4 mt-6 flex items-center text-white">
      <div className="container mx-auto px-8 md:px-16">
        <p className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3">
          {data?.footerTitle}
        </p>
        <p className="text-sm">{data?.footerDescription}</p>
      </div>
    </div>
  );
};

export default Ending;
