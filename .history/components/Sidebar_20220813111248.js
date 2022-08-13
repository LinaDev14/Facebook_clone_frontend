import Image from "next/image";
import React from "react";
/* React icons */
import { ImUsers } from "react-icons/im";
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore
} from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs"

/* component */
import { SidebarIcon } from "./SidebarIcon";

/* service next/auth */
import { useSession, signOut } from "next-auth/react";


const Sidebar = () => {

  const {data: session} =useSession();

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
      <SidebarIcon Icon={ ImUsers } value="Friends" />
      <SidebarIcon Icon={MdGroups} value="Groups" />
      <SidebarIcon Icon={ AiOutlineShop } value="Marketplace" />
      <SidebarIcon Icon={ MdOutlineOndemandVideo } value="Watch" />
      <SidebarIcon Icon={ BsStopwatch } value="Memories" />
      <SidebarIcon Icon={ MdOutlineExpandMore } value="See More" />
      
    </div>
  );
};

export { Sidebar };
