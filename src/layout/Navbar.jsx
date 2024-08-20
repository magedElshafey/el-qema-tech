import React, { useState, useRef, useEffect } from "react";
import Logo from "../components/common/logo/Logo";
import { navLinks } from "../data/data";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import SocialMedia from "../components/common/socialMedia/SocialMedia";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const closeSidebar = () => setShowSidebar(false);
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="w-full bg-blue text-white py-5 flex items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <div>
              <ul className=" hidden md:flex items-center gap-5">
                {navLinks?.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      className=" text-base md:text-md lg:text-lg pb-2 nav"
                      to={item.path}
                    >
                      {t(item.title)}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="md:hidden">
                <AiOutlineMenu
                  size={30}
                  className=" cursor-pointer"
                  onClick={() => setShowSidebar(true)}
                />
              </div>
            </div>
            <div>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 w-[90%] h-screen duration-300 bg-blue p-4 text-white z-[2000] ${
          showSidebar ? "right-0" : "right-[-350%]"
        }`}
      >
        <IoMdClose
          size={20}
          className=" cursor-pointer"
          onClick={() => setShowSidebar(false)}
        />
        <ul className="my-5">
          {navLinks?.map((item, index) => (
            <li key={index} className="mb-4">
              <NavLink to={item.path} onClick={() => setShowSidebar(false)}>
                {t(item.title)}
              </NavLink>
            </li>
          ))}
        </ul>
        <SocialMedia color="text-white" action={closeSidebar} />
      </div>
    </>
  );
};

export default Navbar;
