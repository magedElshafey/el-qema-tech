import React from "react";
import { useGlobalContext } from "../../../components/hooks/api/GlobalContext";
const SocialMedia = ({ color, action }) => {
  const { data } = useGlobalContext();
  console.log("data from global", data);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {data?.socials?.map((item, index) => (
        <a
          onClick={action ? action : null}
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={color}
        >
          <img
            alt={item?.slig}
            src={item?.icon}
            className="w-[30px] h-[30px] rounded-[50%]"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
