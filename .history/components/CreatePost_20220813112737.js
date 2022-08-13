import Image from "next/image";
import React from "react";

const CreatePost = () => {
  return (
    <div className="bg-white rounded-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          onClick={signOut}
          src={session?.user.image}
          height={40}
          width={40}
          alt="facebook_logo"
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export { CreatePost };
