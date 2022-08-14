import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
            height={40}
            width={40}
            className="rounded-full w-10 h-10"
            alt="fb image"
          />
          <div>
            <p className="font-medium">Lina María</p>
            <p className="text-xs text-gray-500">{new Date().toLocaleString()}</p>
          </div>
        </div>
        <p className="py-4">Lorem ipsum</p>
              </div>
              {/* If any Image */}
            <div className="relative h-60 md:h-96 bg-white"></div>
    </div>
  );
};

export { Post };
