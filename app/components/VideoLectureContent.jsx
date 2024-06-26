// components/VideoLectureContent.jsx
'use client';

import SocialIconsVideo from "./SocialiconsVideo";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const VideoLectureContent = ({ item, prevItem, nextItem }) => {
  return (
    <>
      <div className="grid grid-cols-16 mt-14 xl:-mt-2">
        <div></div>
        <div className="md:col-span-12 col-span-16 bg-black">
          <div className="mt-4 px-5 md:mx-6 lg:mx-12 xl:mx-16 2xl:mx-32 min-[1600px]:mx-40">
            <iframe 
              width="100%" 
              height="550" 
              src={item.youtube}
              title={item.title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-8 bg-[rgb(253,249,249)]">
        <div className="col-span-1"></div>
        <div className="pb-10 mb-1 col-span-6">
          <div className="text-md text-slate-700 font-light leading-7">
            <div className="mt-6">
              <div className="flex flex-col items-center mx-4">
                <h1 className="font-italiana font-light pb-3 text-3xl md:text-4xl tracking-wide mb-2 max-w-5xl">
                  {item.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: item.desc }} className="max-w-6xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mt-6 flex flex-row justify-center items-center mr-6">
            <SocialIconsVideo />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 p-4 mt-4">
        <div></div>
        <div className="md:col-span-6 col-span-8">
          <div className="flex items-start gap-20 mb-6">
            <div className="text-left flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS VIDEO</p>
                <div className="flex gap-1 items-center justify-start">
                  <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href={prevItem.url}
                    className="line-clamp-2 text-md font-light text-gray-950 lg:text-lg hover:text-[rgb(190,58,59)]">
                    {prevItem.title}
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT VIDEO</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href={nextItem.url}
                    className="line-clamp-2 text-md font-light text-gray-950 lg:text-lg hover:text-[rgb(190,58,59)]">
                    {nextItem.title}
                  </Link>
                  <div className="hidden md:block"><BsChevronCompactRight size={50} color="#be3a3b" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default VideoLectureContent;
