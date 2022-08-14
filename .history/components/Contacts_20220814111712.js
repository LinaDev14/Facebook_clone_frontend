import Image from "next/image";
import React from "react";

const Contacts = ({ name, src }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl curs">
      <Image
        src={src}
        height={40}
        width={40}
        className="rounded-full cursor-pointer"
        alt="user photo"
      />
      <p className="hidden sm:inline-flex text-sm">{name}</p>
      <div className="bg-green-500 h-4 w-4 rounded-full absolute"></div>
    </div>
  );
};

export { Contacts };
