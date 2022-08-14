import Image from "next/image";
import React from "react";

const Contacts = ({ name, src }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:b">
      <Image
        src={src}
        height={40}
        width={40}
        className="rounded-full cursor-pointer"
        alt="user photo"
      />
    </div>
  );
};

export { Contacts };
