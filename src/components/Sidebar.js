import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
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
import SidebarLink from "./SidebarLink";


function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-0 fixed h-full">
    <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 mt-2">
    <Image src="/main_logo.png" width={40} height={40} />
    </div>
    <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
    </div>
    <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[50px] mt-5 font-bold text-lg hover:bg-[#1a8cd8]">
      Express</button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-20 xl:-mr-5 mt-5">
        <img src="dp.png" alt="" 
        className="h-10 w-10 rounded-full xl:mr-2.5 " />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Sukriti Raora</h4>
          <p className="text-[#6e767d]">@sukritirajora29</p>
        </div>
      </div>
     </div>
     

  
  );
}

export default Sidebar
