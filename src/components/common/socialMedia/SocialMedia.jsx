import React from "react";
import { socialMedia } from "../../../data/data";
const SocialMedia = ({ color, action }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {socialMedia?.map((item, index) => (
        <a
          onClick={action ? action : null}
          key={index}
          href={item.path}
          target="_blank"
          rel="noreferrer"
          className={color}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
