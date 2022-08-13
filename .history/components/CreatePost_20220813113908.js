import Image from "next/image";
import React from "react";

/* service next/auth */
import { useSession } from "next-auth/react";

const CreatePost = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-white rounded-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          alt="facebook_logo"
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            placeholder={`What's on your mind, ${session?.user.name}`}
          />
          <button hidden></button>
        </form>
      </div>

      <div className="flex">
            <d
      
      </div>
    </div>
  );
};

export { CreatePost };
