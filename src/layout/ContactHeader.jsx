import React from "react";
import { contactHeader } from "../data/data";
import SocialMedia from "../components/common/socialMedia/SocialMedia";
const ContactHeader = () => {
  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12  my-4">
      <div className="w-full flex items-center justify-between flex-col md:flex-row gap-3 md:gap-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs lg:text-base">
            <p className="text-blue">{contactHeader?.email?.icon}</p>
            <a
              href={`mailto:${contactHeader?.email?.value}`}
              target="_blank"
              rel="noreferrer"
              className=" lowercase"
            >
              {contactHeader?.email?.value}
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs lg:text-base">
            <p className="text-blue">{contactHeader?.phone?.icon}</p>
            <a
              dir="ltr"
              href={`https://wa.me/${contactHeader?.phone?.value}`}
              target="_blank"
              rel="noreferrer"
              className=" lowercase"
            >
              {contactHeader?.phone?.value}
            </a>
          </div>
        </div>
        <div>
          <SocialMedia color="text-blue" />
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
