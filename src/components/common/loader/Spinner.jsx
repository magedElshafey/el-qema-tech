import React from "react";
import style from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className="w-screen h-screen fixed z-[1500] flex items-center justify-center">
      <div className={style.progress}></div>
    </div>
  );
};

export default Spinner;
