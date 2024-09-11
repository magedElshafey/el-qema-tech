// contact icons
import { MdEmail } from "react-icons/md";
import { FaMobileAlt, FaLocationArrow } from "react-icons/fa";
// clients assets

export const contactHeader = {
  email: {
    icon: <MdEmail size={20} />,
    value: "magedelshafey98@gmail.com",
  },
  phone: {
    icon: <FaMobileAlt size={20} />,
    value: "+201022153359",
  },
  location: {
    icon: <FaLocationArrow size={20} />,
    value: "المنصورة , حي الجامعة",
  },
};

export const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "blogs",
    path: "/blogs",
  },
  {
    title: "our works",
    path: "/works",
  },
];
