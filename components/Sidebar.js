import Image from "next/image";
import React from "react";
import { ImUsers } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          height={40}
          width={40}
          alt="facebook_logo"
          className="rounded-full cursor-pointer"
        />

        <p className="hidden sm:inline-flex font-medium"> Lina Maria </p>
              </div>
              
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <ImUsers className="h-8 w-8 text-blue-500" />
        <p className="hidden sm:inline-flex font-medium">Users</p>
      </div>
    </div>
  );
};

export { Sidebar };
