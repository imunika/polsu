'use client'
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";

const gallery1 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-jn/fig1.jpg", 
    title: "",
    description: "Julia Neufeld with Rina Banerjee’s drawings, <em>Take Me to the Palace of Love</em>, Syracuse University Art Museum, Spring 2023",
  },
];

export default function InstallingPalaceLoveEssayJN() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/julia_neufeld.png",
      author_name: "Julia Neufeld",
      bio: "Julia Neufeld is a graduate student studying museum studies at Syracuse University. She received her MA in Art History from SU in May 2023, and her BA in Art History from Loyola University Chicago in May 2021. Julia works as a graduate assistant at the Syracuse University Art Museum, where she helped install <i>Take Me to the Palace of Love</i>. Julia has always been passionate about art, developing a love for museums and art history at an early age. Her art historical interests include comics media and graphic memoirs, mid-twentieth century American prints, and art and the wars of the twentieth century."
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
              Behind the Scenes: Installing “Take Me to the Palace of Love”
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/julia_neufeld.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Julia Neufeld</span></div>
              </div>
              <div className="mt-4 flex items-center">
                <SocialIcons />
              </div>
            </div>
            
            <div className="text-md sm:text-lg text-zinc-800 font-light leading-8 tracking-wide">
              <div className="mt-2 border-t border-[#d3d3d3]">
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

              </div>
              <div>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  Installing Rina Banerjee’s monumental works for <i>Take Me to the Palace of Love</i> was an experience unlike any I’ve had in a museum. Unlike the prints, paintings, and smaller sculptures included in the exhibition, Rina’s enormous installations were physically demanding. Her unconventional materials—the metal frameworks of all the sculptures, the antique chair and table in <i>Take me, take me, take me… to the Palace of Love</i>, and the mesh cage covered in light bulbs and shells in <i>A World Lost</i>—were often heavy and unwieldy. The challenges of installing these objects might not be visible to visitors, since the works are hanging, seeming almost weightless with their single point of suspension. One of the most challenging moments of the installation was hanging the suspended chair at the center of <i>Take me, take me, take me… to the Palace of Love</i>. The chair is a heavy antique with delicate details mounted to a metal framework that attached to cables hanging from the top dome of the Taj Mahal. Hanging the chair was difficult not only because of the weight, but because of the balance required to make sure that the chair did not pull the dome in any one direction. The chair needed to be perfectly centered to ensure that the entire rest of the sculpture was balanced. These kinds of challenges that go on behind the scenes are not seen by visitors to the exhibition, who only see the end product and not the labor that goes into making the exhibition as close to perfect as possible.</p>
                <br />
                <p className="sm:indent-16">My favorite work to install was <i>Viola, from New Orleans</i>, which I worked on primarily with my colleague Samaya Nasr. <i>Viola</i> was exciting for me to work on because of how it involved us in the artistic process. All of the sculptures arrived disassembled, requiring us to essentially rebuild the artworks, unlike installing paintings or other sculptures, which are more self-contained, and usually just need hanging or placing. <i>Viola</i> was special to me because of the real person she represented and how closely I worked with her. Samaya and I spent one day running thread back and forth over 100 times, connecting the figure of Viola to the parachute hanging from the ceiling behind her. At the end of this process, when the threads were brought together and tied to Viola’s back between her wings, I sat on the floor behind her to braid the strings together in a long fishtail braid. This act felt like being at a sleepover with a friend as a child, braiding hair before going to sleep. That intimacy and connection made <i>Viola, from New Orleans</i> my favorite sculpture in the exhibition.</p>
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
                <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS ESSAY</p>
                <div className="flex gap-1 items-center justify-start">
                <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href="/works/installing-take-me-to-the-palace-of-love-ac"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Behind the Scenes: Installing <i>Take Me to the Palace of Love</i></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/love-in-syracuse-making-art-together"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Love in Syracuse: Making Art Together</div>
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