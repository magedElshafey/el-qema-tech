import React, { useState } from "react";
import contactImg from "../../../assets/contact.png";
import { useTranslation } from "react-i18next";
import MainInput from "../../common/inputs/MainInput";
import useNumberInput from "../../hooks/validation/useNumberInput";
import useTextInputValidation from "../../hooks/validation/useTextInputValidation";
import { FaUser, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { services } from "../../../data/data";
import MainBtn from "../../common/buttons/MainBtn";
const Contact = () => {
  const { t } = useTranslation();
  const {
    value: name,
    error: nameError,
    handleChange: handleNameChange,
    setValue: setName,
  } = useTextInputValidation();
  const {
    value: phone,
    error: phoneError,
    handleChange: handlePhoneChange,
    setValue: setPhone,
  } = useNumberInput();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12 items-center">
      <div className="w-full md:w-[40%]">
        <img
          alt="contact"
          src={contactImg}
          loading="lazy"
          className="max-h-[350px]"
        />
      </div>
      <form className="w-full md:w-[350px] lg:w-[550px] xl:w-[650px] bg-white shadow-lg p-5 rounded-lg">
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl mb-5 lg:mb-8 text-red font-bold text-center">
          {t("contact us")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-0 lg:mb-4">
          <MainInput
            label="name"
            type="text"
            value={name}
            error={nameError}
            onChange={handleNameChange}
            icon={<FaUser size={20} />}
          />
          <MainInput
            label="phone"
            type="text"
            icon={<FaMobile size={20} />}
            value={phone}
            error={phoneError}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="mb-4">
          <MainInput
            label="email"
            type="email"
            icon={<MdEmail size={20} />}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-1 text-blue text-md font-medium"
            htmlFor="services"
          >
            {t("services need")}
          </label>
          <select
            className="w-full p-2 rounded-md  border focus:outline-none"
            id="services"
          >
            <option value="">{t("choose the service")}</option>
            {services?.map((item, index) => (
              <option key={index} value={item.title}>
                {t(item.title)}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block mb-1 text-blue text-md font-medium"
            htmlFor="message"
          >
            {t("message")}
          </label>
          <textarea
            className="w-full p-2 rounded-md  border focus:outline-none h-[100px]"
            id="message"
          />
        </div>
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full md:w-[150px] lg:w-[220px]">
            <MainBtn type="submit" text="send" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
