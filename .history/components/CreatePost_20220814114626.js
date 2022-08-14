import Image from "next/image";
import React, { useRef } from "react";

/* react icons */
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";

/* service next/auth */
import { useSession } from "next-auth/react";

const CreatePost = () => {

  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);

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
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user.name}`}
          />
          <button hidden></button>
        </form>
      </div>

      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600 ">Live Video</p>
        </div>

        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600 ">Photo/Video</p>
        </div>

        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600 ">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export { CreatePost };
