import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow"> Contacts</p>
        <div className="flex space-x-1 px-2">
        <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
        </div>
      </div>
      </div>
    </div>
  );
};

export { RightSidebar };
