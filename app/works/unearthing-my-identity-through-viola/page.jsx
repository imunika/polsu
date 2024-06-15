'use client'
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function UnearthingIdentityPoem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/zamzam_mohamed.png",
      author_name: "Zamzam Mohamed",
      bio: "Zamzam Mohamed is majoring in biology and writing & rhetoric. She is a 2021 Narratio Fellow and co-leads a community-based research project called Northside Futures, which studies and advocates for safe and affordable housing and neighborhood development in the Northside of Syraucuse."
    });
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6 bg-[rgb(253,249,249)]">
          <div className="mt-20 px-5 pb-10 md:mx-6 lg:mx-12 xl:mx-16 2xl:mx-32 min-[1600px]:mx-40">
            <h1 className="font-italiana font-light pb-3 text-4xl sm:text-6xl tracking-wide leading-tight">
              Unearthing my Identity through Viola
            </h1>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/zamzam_mohamed.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Zamzam Mohamed</span></div>
              </div>
              <div className="mt-4 flex items-center">
                <SocialIcons />
              </div>
            </div>

            <div className="text-md sm:text-lg text-zinc-800 font-light leading-8 tracking-wide">
              <div className="mt-2 border-t border-[#d3d3d3]">
              </div>
              <div className="mt-10">
                <div className="sm:indent-4">
                  <p className="text-center">As I wander through these halls,</p>
                  <p className="text-center">my eyes alight on a figure that calls</p>
                  <p className="text-center font-semibold">To me, as if it holds a secret key.</p>
                  <p className="text-center">To unlock the truth of who I'm meant to be.</p>
                  <br />
                  <p className="text-center">Oh Viola, your skin is a tapestry,</p>
                  <p className="text-center font-bold text-black">woven with the threads of your past and present,</p>
                  <p className="text-center font-bold text-black">Each stitch a tribute to your heritage and history,</p>
                  <p className="text-center">A masterpiece that defies all attempts to confine.</p>
                  <br />
                  <p className="text-center">Your tusks, proud and regal,</p>
                  <p className="text-center">extend like sentinels from your neck,</p>
                  <p className="text-center">A symbol of the burdens you have borne,</p>
                  <p className="text-center">And the strength that lies within your every step.</p>
                  <br />
                  <p className="text-center">The objects that surround us,</p>
                  <p className="text-center">bear witness to the stories of generations,</p>
                  <p className="text-center">They whisper secrets of struggle and survival,</p>
                  <p className="text-center">And the resilience that has carried us to this moment at last.</p>
                  <br />
                  <p className="text-center">Like you, I am on a journey,</p>
                  <p className="text-center">to discover the depths of my identity,</p>
                  <p className="text-center">My roots, like the tendrils of a tree,</p>
                  <p className="text-center">Entwined with the stories of those who came before me.</p>
                  <br />
                  <p className="text-center">Viola, your legacy of fortitude is an inspiration,</p>
                  <p className="text-center">A testament to the human spirit,</p>
                  <p className="text-center">And the unyielding force that makes us stand / still.</p>
                  < br/>
                  <p className="text-center">And though the road ahead may be fraught with struggles,</p>
                  <p className="text-center">I take comfort in the knowledge that I am not alone,</p>
                  <p className="text-center">for I carry within me the strength and resilience,</p>
                  <p className="text-center">Of those who have come before.</p>
                  <br />
                  <p className="text-center">Oh Viola, your tapestry and tusks,</p>
                  <p className="text-center">Are a testament to the power of the human spirit,</p>
                  <p className="text-center">Through your assemblage I find the courage to face the unknown,</p>
                  <p className="text-center">And the strength to live my life with purpose and merit.</p>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* Render the ModalProfile component */}
      {isModalVisible && (
        <ModalProfile
          isVisible={isModalVisible}
          onClose={closeModal}
          item={modalData}
        />
      )}

      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6">
          <div className="flex items-center gap-20">
            <div className="text-left flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS POEM</p>
                <div className="flex gap-1 items-center justify-start">
                <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href="/works/to-the-palace-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">To the Palace of Love</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT POEM</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/violas-love-story"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Viola’s love story</div>
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
}