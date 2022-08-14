import Image from "next/image";
import React from "react";

const Contacts = ({ name, src }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl">
      <Image
        src={src}
        height={40}
        width={40}
        className="rounded-full cursor-pointer"
        alt="user photo"
      />
      <p className="hidden sm:inline-flex text-sm">{name}</p>
      <div></div>
    </div>
  );
};

export { Contacts };
