'use client';
import { useEffect, useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";

const gallery1 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig1.jpg", 
    title: "",
    description: "<span style={{color: 'blue', lineHeight : 10, padding: 20}}>Fig. 1. Wall assembly, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, Syracuse University Art Museum, January 2023.</span>",
  },
];

const gallery2 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig2.jpg",
    title: "",
    description: "Fig. 2. Abby Campanaro tidying up, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig3.jpg",
    title: "",
    description: "Fig. 3. Samaya Nasr in the dome, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig4.jpg",
    title: "",
    description: "Fig. 4. Taking a break from umbrella threading for <i>Viola, from New Orleans</i>, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig5.jpg",
    title: "",
    description: "Fig. 5. Julia Neufeld and Samaya Nasr installing umbrella components for <i>Viola, from New Orleans</i>, Syracuse University Art Museum, January 2023.",
  },
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig6.jpg",
    title: "",
    description: "Fig. 6. John Umphlett installing <i>Viola, from New Orleans</i>, Syracuse University Art Museum, January 2023.",
  },
];

const gallery3 = [
  {
    href: "/images/works/installing-take-me-to-the-palace-of-love-ac/fig7.jpg",
    title: "",
    description: "Fig. 7. The joy of a completed installation, Syracuse University Art Museum, January 2023.",
  },
];

export default function InstallingPalaceLoveEssayAC() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Code that uses the window object
      console.log(window.location.href);
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/abby_campanaro.png",
      author_name: "Abby Campanaro",
      bio: "Abby Campanaro is the Assistant Registrar & Provenance Researcher at Syracuse University Art Museum, having started her position in December of 2022. She comes from a previous job as a supervisor on the Guest Services team at The Strong Museum in Rochester, NY. Her background in museums primarily consists of collection and archival work at The Strong and at her alma mater, Gordon College, from which she graduated with a BA in History and Museum Studies in 2020. She plans to pursue an MA in Museum Studies and an MS in Library and Information Science from Syracuse in the coming years."
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
                <div><Image src="/images/headshots/abby_campanaro.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Abby Campanaro</span></div>
              </div>
              <div className="mt-4 flex items-center">
                <SocialIcons />
              </div>
            </div>

            <div className="text-md sm:text-lg text-zinc-800 font-light leading-8 tracking-wide">
              <div className="mt-2 border-t border-[#d3d3d3]">
                
              </div>
              <div>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  The world that Rina Banerjee creates through her installation work is dichotomous: impressive in its size yet simple in many of its materials; mysterious in its approach yet forthright in its message. And the almost effortless and tranquil appearance of, say, a floating pink Taj Mahal, directly contrasts the detailed and demanding work that went into installing it, along with Rina’s two other large-scale installation pieces included in the <i>Take Me to the Palace of Love</i> exhibition (fig. 1).
                </p>
                <br />

                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">The installation process for the <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, <i>Viola, from New Orleans</i>, and <i>A World Lost</i> was neither glamorous nor easy (fig. 2). I probably spent an equal amount of time kneeling on the ground to unwrap objects and laying on my back to patch holes in the plastic underside of the <i>Taj</i> dome as I did standing on my feet (fig. 3). At times, the process was almost humbling as I crawled on the ground in front of <i>Viola</i>, meticulously placing each shoe and shell around her feet, and then spending more than an hour combing through the hundreds of threads hanging from her clothes and body (figs. 4 and 5). Despite the challenges, I do think this installation was distinctive in the sheer amount of teamwork required to put it together, and the camaraderie that emerged through the process. Nothing bonds a group of people more than sitting underneath the largest dome of the <i>Take Me, Take Me, Take Me…to the Palace of Love</i> and collectively feeling as if we’re sitting in a womb, which was a truly unique experience to say the least. But suffice to say, the work would never have gotten done without the assistance of our full museum staff, plus Rina’s installer, John Umphlett, who never seemed fazed by the task at hand, though I’m sure that putting a pink Taj Mahal together, piece by piece, is just a typical day in the office for him (fig. 6).</p>
               <br />

                <div className="flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>
                
                <br />
                <p className="sm:indent-16">For me, however, this experience was unlike anything I’ve ever done before, both inside and outside of the museum world. It was challenging and intricate, but seeing an empty gallery space fill with these larger-than-life pieces in less than a week and knowing I played a role in the process was an incredibly rewarding feeling (fig. 7).</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
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
                <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS ESSAY</p>
                <div className="flex gap-1 items-center justify-start">
                <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href="/works/infectious-transmissions"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Infectious Transmissions: Rina Banerjee in Two Dimensions</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/installing-take-me-to-the-palace-of-love-jn"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Behind the Scenes: Installing <i>Take Me to the Palace of Love</i></div>
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