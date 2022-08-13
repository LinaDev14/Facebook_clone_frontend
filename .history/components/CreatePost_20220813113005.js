import Image from "next/image";
import React from "react";

/* service next/auth */
import { useSession } from "next-auth/react";

const CreatePost = () => {

const {data: session} =  useSession();

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
      
      
      </form>
      </div>
    </div>
  );
};

export { CreatePost };
