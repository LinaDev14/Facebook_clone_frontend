import React from 'react'


const SidebarIcon = ({Icon, value}) => {
  return (
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
      <Icon className="h-8 w-8 text-blue-500" />
      <p className="hidden sm:inline-flex font-medium">Users</p>
    </div>
  )
}

export {SidebarIcon}