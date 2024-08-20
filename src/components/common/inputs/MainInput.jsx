import React from "react";
import { useTranslation } from "react-i18next";
const MainInput = ({
  label,
  value,
  type,
  placeholder,
  onChange,
  error,
  icon,
  ...otherProps
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <label className="block mb-1 text-blue text-md font-medium">
        {t(label)}
      </label>
      <div className="w-full p-3 rounded-md flex items-center justify-between border gap-5">
        <input
          className=" bg-transparent border-none focus:outline-none"
          id={t(label)}
          required
          placeholder={t(placeholder)}
          type={type}
          value={value}
          onChange={onChange}
          {...otherProps}
        />
        {icon ? <p className="text-blue">{icon}</p> : null}
      </div>
      {error ? <div className="my-2 text-sm text-red">{error}</div> : null}
    </div>
  );
};

export default MainInput;
