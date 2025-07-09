import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdOutlinePoll } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-500 p-5 hover:bg-slate-900 transition-all rounded-lg cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1 rounded-lg">
          <Image
            src="https://avatars.githubusercontent.com/u/108715715?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 p-3">
          <h1>Shivam Gupta</h1>
          <p>
            OnePlus Nord 5’s open sale is live. Powered by Snapdragon 8s Gen 3
            for buttery 144-FPS gaming, it stays ice-cool with a 7,300 mm² vapor
            chamber and all-day 6,800 mAh battery. Dual 50 MP cameras turn night
            shots into stories. It's an all-rounder you've been waiting for.
          </p>
          <div className="flex justify-evenly mt-2 items-center">
            <div>
                <FiMessageCircle/>
            </div>
            <div>
                <BiRepost/>
            </div>
            <div>
                <CiHeart/>
            </div>
            <div>
                <CiBookmark/>
            </div>
             <div>
                <MdOutlinePoll/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
