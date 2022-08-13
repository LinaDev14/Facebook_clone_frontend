import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image src="https://pixabay.com/photos/wonder-gecko-rough-scincus-terrarium-256046/" height={240} width={240} alt="photo" />

              <a 
              
              className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">Login</a>
    </div>
  );
};

export { Login };
