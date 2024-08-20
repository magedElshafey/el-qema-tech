import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl"
    >
      Logo
    </Link>
  );
};

export default Logo;
