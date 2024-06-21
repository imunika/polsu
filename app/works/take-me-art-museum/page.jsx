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
    href: "/images/works/take-me-art-museum/fig1.jpg", 
    title: "",
    description: "Fig. 1. <i>Take Me to the Palace of Love</i>, Syracuse University Art Museum, 2023.",
  },
  {
    href: "/images/works/take-me-art-museum/fig2.jpg",
    title: "",
    description: "Fig. 2. Wall of drawings, <i>Take Me to the Palace of Love</i>, Syracuse University Art Museum, 2023.",
  },
  {
    href: "/images/works/take-me-art-museum/fig3.jpg",
    title: "",
    description: "Fig. 3. <i>Take Me, Take Me, Take Me…to the Palace of Love</i> (2003), Syracuse University Art Museum, 2023.",
  },
  {
    href: "/images/works/take-me-art-museum/fig4.jpg",
    title: "",
    description: "Fig. 4. Rina Banerjee, <i>Viola, from New Orleans…</i>, 2017. Murano glass horns, Indian rakes, seed beads, steel, Yoruba African mask, oyster shells, cowrie shells, Charlotte dolls, polyester horse hair trim, Korean silks, Indian silks, vintage Kashmir shawls, French wire ferris wheel, Congolese elbow bangles, colonial mirror sconces, Japanese seed glass beads, sequins, threads. Courtesy of the Pennsylvania Academy of the Fine Art, Philadelphia. Museum Purchase, 2017.53. Photograph courtesy of Syracuse University Art Museum.",
  },
  {
    href: "/images/works/take-me-art-museum/fig5.jpg",
    title: "",
    description: "Fig. 5. Rina Banerjee, side view, <i>Viola, from New Orleans…</i>, 2017. Courtesy of the Pennsylvania Academy of the Fine Art, Philadelphia. Museum Purchase, 2017.53. Photograph courtesy of Syracuse University Art Museum. ",
  },
];

const gallery2 = [
  {
    href: "/images/works/take-me-art-museum/fig6.jpg", 
    title: "",
    description: "Fig. 6. Rina Banerjee, floor detail, <i>A World Lost</i>, 2013. Black synthetic horns, wire, netting, lightbulbs, scale, ostrich eggs, textiles, cowrie shells, pebbles, coins, feathers, fish vertebrae, greenery, coral, glass birds, miniature human and animal figurines, plastic cups, and red thread. Syracuse University Art Museum. Artist’s Collection, New York City.",
  },
];

const gallery3 = [
  {
    href: "/images/works/take-me-art-museum/fig7.jpg", 
    title: "",
    description: "Fig. 7. <i>Love in Syracuse: Making Art Together</i>, Salt City Market, Syracuse, New York, February 2023.",
  },
];

export default function ArtMuseumEssay() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/melissa_yuen.png",
      author_name: "Melissa Yuen",
      bio: "Melissa Yuen is the interim chief curator at the Syracuse University Art Museum, where she oversees the museum’s exhibition program in addition to conducting research and expanding the institution’s permanent collection. Trained in early modern Italian paintings, she has a secondary research interest in contemporary prints. Prior her arrival to the SUArt Museum in December 2021, she was the associate curator of exhibitions at Sheldon Museum of Art, University Nebraska–Lincoln (2019-2021) and the curatorial fellow of European and American art to 1900 at the Cantor Arts Center, Stanford University (2017-2019). She holds an M.A. and Ph.D. in Art History from Rutgers University."
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
              “Take me, take me, take me... to the art museum”
            </h1>
            
            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/melissa_yuen.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Melissa Yuen</span></div>
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
                  On view during the Spring 2023 semester, <i>Take Me to the Palace of Love</i> showcased the importance of art and highlighted the central role a university art museum plays on a college campus (fig. 1). Featuring sculptures and drawings made by Rina Banerjee, the installation was visually compelling and conceptually rich, with the large sculptures and intricate drawings highlighting a riot of colors and a wide range of textures (fig. 2). In addition, the engineering and fabrication expertise needed to create the sculptures steel armatures form an interesting juxtaposition with the creativity required to dream up the different components that adorned the sculptures and the labor needed to carefully attach them to the works (fig. 3). This contrast is best seen in <i>Viola, from New Orleans…</i> (2017), which was on loan from the Pennsylvania Academy of the Fine Arts (fig. 4). The figure stands on two feet with her metal skeleton exposed. Wings sprout from her shoulder blades, acting as a counterbalance to the parachute that trails behind her. On each segment of her wings, hundreds of threads were individually tied to the armature, so that they, along with the attached textiles, create a diaphanous and gauzy effect that belie the weight of the sculpture (fig. 5).
                </p>
               <br />

                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>
                
                <br />
                <p className="sm:indent-16">The multitude of materials used in each sculpture create different visual qualities, allowing for multiple points of access, all of which were evident during the run of the exhibition. Students’ jaws dropped when they rounded the corner and encountered the spectacle of <i>Take me, Take me, Take me… to the Palace of Love</i> (2013), a pink Saranwrap covered reduction of the Taj Mahal, which was suspended from the ceiling. A tween spent 20 minutes poring over the painting on the floor of <i>A World Lost</i> (2013), gleefully pointing out the many whimsical details, including the Eiffel Tower, angel heads, bears, toy soldiers, and a single black feather contributed by one of Syracuse’s many crows, that Banerjee nestled among brightly colored sand (fig. 6). Faculty made connections between the artworks to their lived experiences and critical theory in the same conversation. These experiences would not be possible without the museum nor the artworks on view in the galleries.</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">These wide-ranging interactions with the exhibition are also borne out in the class visits and programs that occurred in the museum’s galleries, a space where different audiences (from Syracuse University and beyond) came together around tangible objects and worked through the ideas presented (fig. 7). As a curator, witnessing these conversations in the galleries is one of the most gratifying parts of my work. With each exhibition, my colleagues and I spend so much time thinking through the conceptual frameworks and installation details, while also making countless contingency plans in case arrangements go awry. Yet, what we often cannot account for are the visitors’ reactions&mdash;the joy, bewilderment, awe, and excitement&mdash;expressed in the galleries. These emotions on display in the art museum, alongside the objects that elicited them, affirm the importance of art for the academic community and for humanity more broadly.</p>
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
                  <Link href="/works/stanger-in-the-palace-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Stranger in the Palace of Love</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/teaching-arts-resistance-curriculum-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">“Take Me to the Palace of Love”: Teaching Out Loud about the Arts, Resistance and the Curriculum of Love</div>
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