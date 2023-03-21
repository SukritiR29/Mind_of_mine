import React from 'react'
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid";
import SidebarLink from '../components/SidebarLink'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
  <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
    <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
    <Image src="/main_logo.png" width={40} height={40} />
    </div>
    <div className="mt-4 mb-2.5 xl:ml-20 space-y-">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
    </div>
  </div>
  );
}

export default Sidebar
