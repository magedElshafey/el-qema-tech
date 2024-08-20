import React from "react";
import Meta from "../components/common/meta/Meta";
import { Outlet } from "react-router-dom";
import ContactHeader from "./ContactHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FixedBtn from "../components/common/buttons/FixedBtn";
import CommonFunctions from "../components/common/function/CommonFunction";
import Ending from "./Ending";
const MainLayout = () => {
  return (
    <div>
      <CommonFunctions />
      <Meta />
      <FixedBtn />
      <ContactHeader />
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Ending />
      <Footer />
    </div>
  );
};

export default MainLayout;
