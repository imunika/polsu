'use client'
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function PalaceOfLovePoem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/justo_triana.png",
      author_name: "Justo Triana",
      bio: "Justo Triana is majoring in Classical Civilization at Syracuse University. He is a poet, and a passionate advocate for free speech on and off campus. He has published articles on the dangers of political extremism and destructive ideological tendencies. Justo is a 2021 Narratio Fellow and published his first collection poetry, <i>La Condena</i>, in Spanish in Fall 2022. As a former <a href='https://narratio.org/fellowship' target='_blank'>Narratio Fellow</a> and current Narratio Facilitator, he has provided support and feedback on the fellows' creative projects and exhibitions. He strongly believes in the importance of mentoring as a way to help the young become the best version of themselves."
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
              To the Palace of Love
            </h1>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/justo_triana.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Justo Triana</span></div>
              </div>
              <div className="mt-4 flex items-center">
                <SocialIcons />
              </div>
            </div>

            <div className="text-md sm:text-lg text-zinc-800 font-light leading-8 tracking-wide">
              <div className="mt-2 border-t border-[#d3d3d3]">
              </div>
              <div className=" mt-10">
                <div className="sm:indent-4">
                  <p className="text-center">Take me</p>
                  <p className="text-center">to the Palace of Love</p>
                  <p className="text-center">before the Taj</p>
                  <p className="text-center">where I can dip my feet in the long fountain</p>
                  <p className="text-center">and close my eyes, and kneel and pray, and play</p>
                  <p className="text-center">the sitar to the gods.</p>
                  <br />
                  <p className="text-center">To the palace</p>
                  <p className="text-center">where memory is a promise</p>
                  <p className="text-center">&mdash;a breathing, burning promise&mdash;</p>
                  <p className="text-center">blending with life,</p>
                  <p className="text-center">perpetually unfulfilled.</p>
                  <br />
                  <p className="text-center">Take me where incense manifests its wisdom</p>
                  <p className="text-center">in the dark room,</p>
                  <p className="text-center">growing</p>
                  <p className="text-center">like an unfinished shadow,</p>
                  <p className="text-center">like a serpent</p>
                  <p className="text-center">entangled in the air</p>
                  <p className="text-center">interrupted by the movement of a hand,</p>
                  <p className="text-center">where I may see</p>
                  <p className="text-center">what you've seen</p>
                  <p className="text-center">through other eyes.</p>
                  <br />
                  <p className="text-center">The marble hides the features</p>
                  <p className="text-center">not yet sculpted</p>
                  <p className="text-center">by the lover's chisel,</p>
                  <p className="text-center">imagining a face</p>
                  <p className="text-center">buried four hundred years ago.</p>
                  <br />
                  <p className="text-center">I want to see that face.</p>
                  <p className="text-center">And I want to forget all other faces.</p>
                  <br />
                  <p className="text-center">I'll bid farewell</p>
                  <p className="text-center">with pity</p>
                  <p className="text-center">from some window</p>
                  <p className="text-center">to those who dare not realize</p>
                  <p className="text-center">that love was always worth</p>
                  <p className="text-center">the vow to love till death;</p>
                  <p className="text-center">to die till love, till life:</p>
                  <p className="text-center">to love</p>
                  <p className="text-center">till life do us part,</p>
                  <p className="text-center">till death bring us together.</p>
                  <br />
                  <p className="text-center">I'll leave my death outside</p>
                  <p className="text-center">&mdash;the one I wore</p>
                  <p className="text-center">while living&mdash;,</p>
                  <p className="text-center">my scabs as souvenirs,</p>
                  <p className="text-center">and the walls of the palace</p>
                  <p className="text-center">as my testament.</p>
                  <br />
                  <p className="text-center">Now</p>
                  <p className="text-center">take me</p>
                  <p className="text-center">to the Altar of Love,</p>
                  <p className="text-center">and take my life:</p>
                  <p className="text-center">I'll keep dragging my suffering around</p>
                  <p className="text-center">until I lie</p>
                  <p className="text-center">where there are no more names,</p>
                  <p className="text-center">no dates,</p>
                  <p className="text-center">no history,</p>
                  <p className="text-center">no pain,</p>
                  <p className="text-center">and what is left is naked flesh in silence</p>
                  <p className="text-center">offering Love its beauty</p>
                  <p className="text-center">in spite of time.</p>
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
                  <Link href="/works/a-world-lost"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">A World Lost</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT POEM</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/unearthing-my-identity-through-viola"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Unearthing my Identity through Viola</div>
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