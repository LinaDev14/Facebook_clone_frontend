import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
                    <div className="flex items-center">
                    <Image 
                    className="rounded-full w-10 h-10" 
                    alt="fb image"/>

                          
                    </div>
      </div>
    </div>
  );
};

export { Post };
