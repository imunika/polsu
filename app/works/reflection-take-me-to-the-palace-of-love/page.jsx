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
    href: "/images/works/reflection-take-me-to-the-palace-of-love/fig1.jpg", 
    title: "",
    description: "Fig. 1. Teaching Workshop, <i>Take Me to the Palace of Love</i>, Syracuse University Art Museum, January 2023.",
  },
];

const gallery2 = [
  {
    href: "/images/works/reflection-take-me-to-the-palace-of-love/fig2.jpg", 
    title: "",
    description: "Fig. 2. Rina Banerjee, detail, <i>A World Lost</i>, 2013. Black synthetic horns, wire, netting, lightbulbs, scale, ostrich eggs, textiles, cowrie shells, pebbles, coins, feathers, fish vertebrae, greenery, coral, glass birds, miniature human and animal figurines, plastic cups, and red thread. Syracuse University Art Museum. Artist’s Collection, New York City.",
  },
];

const gallery3 = [
  {
    href: "/images/works/reflection-take-me-to-the-palace-of-love/fig3.jpg", 
    title: "",
    description: "Fig. 3. Rina Banerjee, detail, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, 2003. Plastic, antique Anglo-Indian Bombay dark wood chair, steel and copper framework, floral picks, foam balls, cowry shells, quilting pins, red colored moss, antique stone globe, glass, synthetic fabric, shells, fake birds. Artist’s collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery4 = [
  {
    href: "/images/works/reflection-take-me-to-the-palace-of-love/fig4.jpg", 
    title: "",
    description: "Fig. 4. Rina Banerjee, detail, <i>Viola, from New Orleans…</i>, 2017. Courtesy of the Pennsylvania Academy of the Fine Art, Philadelphia. Museum Purchase, 2017.53. Photograph courtesy of Syracuse University Art Museum.",
  },
];

export default function ReflectionEssay() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/kate_holohan.png",
      author_name: "Kate Holohan",
      bio: "Kate E. Holohan is the Curator of Education and Academic Outreach at the Syracuse University Art Museum, where she develops teaching, research, and curatorial projects as well as public programs. She is dedicated to interdisciplinary scholarship and museum programming, as well as to object-based teaching. She has held curatorial and education positions, fellowships, and internships at the Cantor Arts Center at Stanford University, the Metropolitan Museum of Art, and the Frick Collection. A specialist in the art of early modern Spain and the Spanish-colonized Americas, she earned her PhD in Art History from the Institute of Fine Arts, New York University in 2015, with a dissertation titled “Collecting the New World at the Spanish Habsburg Court, 1500-1700”. She is a member of the American Alliance of Museums, the Association for Spanish and Portuguese Historical Studies, the College Art Association, the Renaissance Society of America, and the Society for Iberian Global Art."
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
              Reflection: “Take Me to the Palace of Love”
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/kate_holohan.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Kate Holohan</span></div>
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
                  I sometimes analogize museum work to the movement of a duck in water. To museum visitors, exhibitions and programs often appear polished and carefully executed, as graceful as a duck gliding across a pond. Yet underneath this surface, the paddling feet of curators, educators, registrars, preparators, administrators, and collaborators belie the appearance of effortlessness.
                </p>
                <br />
                <p className="sm:indent-16">The programs we developed as part of <i>Take Me to the Palace of Love</i> were the product of an incredible amount of behind-the-scenes work. Most of the public programs were the brainchildren of the exhibition’s curator, Romita Ray, who worked with incredible energy and tenacity to engage faculty and students from across the university. Once collaborators and speakers were in place, including faculty from the School of Architecture, the School of Law, Maxwell School of Citizenship and Public Affairs, and the College of Arts & Sciences, program logistics kicked into high gear: RSVPs needed to be managed, microphones charged, seats arranged, and a run-of-show for each event carefully planned.</p>
                <br />
                <p className="sm:indent-16">In February 2023, as we embarked on several weeks of near-daily public programs, I also was also working to engage students and faculty by directly connecting the exhibition to university curricula. I got to know Rina Banerjee’s work and professor Ray’s thinking as the show’s curator. I developed gallery activities to spur students’ engagement and scheduled and taught university class visits to the exhibition. I also planned and taught a workshop for SU faculty interested in teaching with the exhibition.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">For each of the museum’s special exhibitions, I develop an art-making project that aims to bridge the gap between the eye, the mind, and the body. The idea is to make art history not just a matter of thought, but of active, bodily engagement. Rina Banerjee’s work, so rich in materials, color, texture, and ideas, posed a challenge. Its abundance&mdash;it’s too much-ness&mdash;baffled me. Could we create mini-versions of Banerjee’s already-scaled down version of the Taj Mahal? I tested different materials but couldn’t get it to work. Could we use sand or glitter to create our own worlds a la <i>A World Lost</i>? A facilities nightmare! Finally, during the middle of installation in January 2023, it hit me: we would make our own “love tokens” inspired by the plastic-wrapped Styrofoam balls at the center, the beating heart, of Banerjee’s Taj.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">These “eureka!” moments provided much-needed clarity and calm for me. Amidst the hectic planning and the wrangling of all the little details, there was joy and delight! These moments also occurred while looking at Banerjee’s work with students. Together we discovered the panoply of figures and features that made up the island-like floor component of <i>A World Lost</i>. And, a student helped me see a part of <i>Viola, from New Orleans…</i> that I had overlooked. The Yoruba-style mask that I had thought was Viola’s face truly was a mask: behind it was a glass head, transparent, enigmatic, nearly hidden. Together we imagined and reimagined how the world is made, what it is made of, and what it means to make a world.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery4} />
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
                  <Link href="/works/other-routes-of-the-image"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Other Routes of the Image: Looking at Rina Banerjee by Way of Istanbul</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/scale-modeling"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Scale Modeling: The Climate of Rina Banerjee’s “A World Lost…”</div>
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