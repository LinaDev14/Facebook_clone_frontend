import Image from 'next/image'
import React from 'react'

const Header = () => {
      return (
            <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
              {/* Left */}
                  <div className="flex min-w-fit">
                        <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                              height={40}
                              width={40}
                        />
                  </div>
              {/* Center */}
              {/* Right */}
            </div>
      )
}

export {Header}