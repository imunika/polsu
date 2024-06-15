'use client';
import { useState } from "react";
import Profile from "../components/Profile";
import ModalProfile from "../components/ModalProfile";
import records from '/src/records.json'

export default function AllAuthorsPage() {
  const [showModal, setShowModal] = useState(false);
  const [theProfile, setTheProfile] = useState();
  const uniqueAuthors = records.reduce((acc, current) => {
    const x = acc.find(item => item.author_name === current.author_name);
    if (!x) {
      acc.push(current);
    }
    return acc;
  }, []);

  return (
    <>
      <div className="grid grid-cols-8 p-8 bg-[rgb(253,249,249)]">
        <div></div>
          <div className="col-span-6 mt-10">
            <div className="px-5 pt-3 text-center font-lato font-light text-5xl leading-8 tracking-wide uppercase">
              contributors
            </div>
          </div>
        <div></div>
      </div>

      {/* <div className="grid grid-cols-16 mb-6 p-8 bg-[rgb(253,249,249)]">
      <div></div>
      <div className="mb-2 col-span-2 mt-4 lg:col-span-4 xl:col-span-6 2xl:col-span-8">
        <div className="flex flex-wrap justify-center p-4">
          {uniqueAuthors.map((item, key) => (
            <div
              key={key}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <Profile
                onClick={() => {
                  setShowModal(true);
                  setTheProfile(item);
                }}
                item={item}
              />
            </div>
          ))}
        </div>
        <ModalProfile isVisible={showModal} item={theProfile} onClose={() => setShowModal(false)} />
      </div>
      <div></div>
      </div> */}

      <div className="grid grid-cols-16 gap-x-6 mb-6 p-8 bg-[rgb(253,249,249)]">
      <div className="col-span-1"></div>
      <div className="mb-2 col-span-14">
        <div className="flex flex-wrap justify-center p-4 lg:gap-2 xl:gap-0">
          {uniqueAuthors.map((item, key) => (
            <div
              key={key}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <Profile
                onClick={() => {
                  setShowModal(true);
                  setTheProfile(item);
                }}
                item={item}
              />
            </div>
          ))}
        </div>
        <ModalProfile isVisible={showModal} item={theProfile} onClose={() => setShowModal(false)} />
      </div>
      <div className="col-span-1"></div>
      </div>
    </>
  );
}