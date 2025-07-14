//import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { PiAcornDuotone } from "react-icons/pi";
import { RiUserCommunityFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import {GoogleLogin} from "@react-oauth/google";

import React from "react";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <IoMdHome />,
  },
  {
    title: "Explore",
    icon: <CiSearch />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <FaRegMessage />,
  },
  {
    title: "Grok",
    icon: <PiAcornDuotone />,
  },
  {
    title: "Communities",
    icon: <RiUserCommunityFill />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-50">
        <div className="col-span-3 pt-10">
          <div className="text-4xl h-fit hover:bg-gray-500 p-1 cursor-pointer transition-all rounded-full">
            <FaXTwitter />
          </div>
          <div className="mt-10 text-2xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-2 hover:bg-gray-700 cursor-pointer transition-all rounded-md m-2 px-2 py-1 w-fit"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#EFF3F4] text-black rounded-full p-3 w-full mt-5">
              POST
            </button>
          </div>
        </div>
        <div className="col-span-6 border-r-2 border-l-2 h-screen overflow-scroll no-scrollbar border-slate-800">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">
          {/* <GoogleLogin onSuccess={cred => console.log(cred)} /> */}
        </div>
      </div>
    </div>
  );
}
