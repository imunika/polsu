'use client'
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function WorldLostPoem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/khadija_sharif.png",
      author_name: "Khadija Sharif",
      bio: "Khadija Sharif is majoring in biology and creative writing. She is a 2019 Narratio Fellow and served as a Narratio artist-in-residence in 2021. In addition to serving in leadership positions within the fellowship program, Khadija works as a facilitator and research assistant for Write Out, a creative writing program associated with SU’s Engaged Humanities Network that works with youth across schools and community centers in Syracuse."
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
        <div className="sm:my-10 md:col-span-4 col-span-6 bg-[rgb(253,249,249)]">
          <div className="mt-16 sm:mt-20 px-5 sm:pb-10 md:mx-6 lg:mx-12 xl:mx-16 2xl:mx-32 min-[1600px]:mx-40">
            <h1 className="font-italiana font-light pb-3 text-4xl sm:text-6xl tracking-wide leading-tight">
              A World Lost
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/khadija_sharif.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Khadija Sharif</span></div>
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
                  <p className="text-center">It is important you know what calms the waterfall’s anger</p>
                  <p className="text-center">Currents so wild</p>
                  <p className="text-center">It chips off a piece of</p>
                  <p className="text-center">you slowly sinking to the bottom</p>
                  <p className="text-center">And under the water, the scales, weigh the same</p>
                  <p className="text-center">But down here it’s so easy</p>
                  <p className="text-center">The current taking you,</p>
                  <p className="text-center">Through a world lost</p>
                  <p className="text-center">And you become complacent riding the wave</p>
                  <p className="text-center">Unaware</p>
                  <p className="text-center">As if the reefs aren’t dying</p>
                  <p className="text-center">As if you soul isn’t screaming for air</p>
                  <p className="text-center">WAKE UP</p>
                  <p className="text-center">When will you realize that the scale weighs the same down here?</p>
                  <br />
                  <p className="text-center">Can love rescue us?</p>
                  <br />
                  <p className="text-center">And even when you are part of that world</p>
                  <p className="text-center">Where we can run and walk</p>
                  <p className="text-center">There are days when the sky opens up and lets droplet drips</p>
                  <p className="text-center">And it’s these days is when we say the prayer</p>
                  <br />
                  <div className="flex items-center justify-center">
                    <Image src="/images/works/a-world-lost/a_world_lost_prayer2.png" width={1280} height={720} alt="" className="w-[50%]" />
                  </div>  
                  <br />
                  <p className="text-center">Allahumma hawalaina wala ‘alaina</p>
                  <br />
                  <p className="text-center">And let us find our anchor</p>
                  <p className="text-center">While out boat gets tossed around</p>
                  <p className="text-center">In this sea we call life</p>
                  <p className="text-center">In a Word lost</p>
                  <p className="text-center">I pray you find your way</p>
                  <p className="text-center">a path light up with Gulaal</p>
                  <p className="text-center">Where we can quench the desire to be artificially human</p>
                  <br />
                  <p className="text-center">Imagine a world found,</p>
                  <p className="text-center">Only then would we understand</p>
                  <p className="text-center">The waterfall wasn’t angry</p>
                  <p className="text-center">It was warning us</p>
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
        <div className="sm:my-10 md:col-span-4 col-span-6">
          <div className="flex items-center gap-20">
            <div className="text-left flex-1">
              <div className="flex flex-col">
                {/* <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS ESSAY</p>
                <div className="flex gap-1 items-center justify-start">
                <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href="/works/"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2"></div>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT POEM</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/to-the-palace-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">To the Palace of Love</div>
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