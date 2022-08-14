import Image from "next/image";
import React from "react";

const Contacts = ({ name, src, status }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl cursor-pointer relative">
      <Image
        src={src}
        height={40}
        width={40}
        className="rounded-full cursor-pointer"
        alt="user photo"
      />
      <p className="hidden sm:inline-flex text-sm">{name}</p>
      {}
      <div className="bg-green-500 h-4 w-4 rounded-full absolute left-5 bottom-2 border-2"></div>
    </div>
  );
};

export { Contacts };
