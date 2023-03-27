import React from "react";
import { AiOutlineCamera, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const chatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatInfo">
        <span>Jane perro Cc</span>
        <div className="chatIcon">
          <AiOutlineCamera />
          <AiOutlineUsergroupAdd />
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default chatHeader;
