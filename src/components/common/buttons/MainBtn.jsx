import React from "react";
import { useTranslation } from "react-i18next";
const MainBtn = ({ type, text, action, disabled }) => {
  const { t } = useTranslation();
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={action}
      className={`bg-red text-white p-3 rounded-md flex items-center justify-center w-full duration-300 hover:translate-y-[10px] ${
        disabled ? "bg-opacity-35" : null
      }`}
    >
      {t(text)}
    </button>
  );
};

export default MainBtn;
