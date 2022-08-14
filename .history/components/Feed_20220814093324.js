import React from "react"
import { CreatePost } from "./CreatePost"

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-x-xl lg:max-w-2xl">
      {/* Create Post Box */}
      <CreatePost />
      {/* Posts */}
        
      </div>
    </div>
  )
}

export {Feed}