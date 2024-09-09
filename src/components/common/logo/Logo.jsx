import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/api/GlobalContext";
const Logo = () => {
  const { data } = useGlobalContext();
  return (
    <Link
      to="/"
      className="font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl"
    >
      {data?.logo ? (
        <img
          alt="logo"
          src={data?.logo}
          loading="lazy"
          className="max-h-[60px]"
        />
      ) : (
        "logo"
      )}
    </Link>
  );
};

export default Logo;
