import React from "react";
import { useTranslation } from "react-i18next";
import { contactHeader } from "../../../data/data";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactDetails = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl  font-extrabold text-center mb-5 lg:mb-8">
        {t("contact desc")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="p-4 flex flex-col items-center justify-center gap-4 bg-white border rounded-md shadow-md">
          <p className="text-blue ">
            <MdEmail size={40} />
          </p>
          <a
            href={`mailto:${contactHeader?.email?.value}`}
            target="_blank"
            rel="noreferrer"
            className=" lowercase text-blue "
          >
            {contactHeader?.email?.value}
          </a>
        </div>
        <div className="p-4 flex flex-col items-center justify-center gap-4 bg-white border rounded-md shadow-md">
          <p className="text-blue ">
            <FaPhoneAlt size={40} />
          </p>
          <a
            href={`https://wa.me/${contactHeader?.phone?.value}`}
            target="_blank"
            rel="noreferrer"
            className="lowercase text-blue "
            dir="ltr"
          >
            {contactHeader?.phone?.value}
          </a>
        </div>
        <div className="p-4 flex flex-col items-center justify-center gap-4 bg-white border rounded-md shadow-md">
          <p className="text-blue ">
            <IoLocationSharp size={40} />
          </p>
          <p className="lowercase text-slate-600 ">
            {contactHeader?.location?.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
