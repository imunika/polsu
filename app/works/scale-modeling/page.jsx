'use client';
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";

const gallery1 = [
  {
    href: "/images/works/scale-modeling/fig1.jpg", 
    title: "",
    description: "Fig. 1. Rina Banerjee, <i>A World Lost</i>, 2013. Black synthetic horns, wire, netting, lightbulbs, scale, ostrich eggs, textiles, cowrie shells, pebbles, coins, feathers, fish vertebrae, greenery, coral, glass birds, miniature human and animal figurines, plastic cups, and red thread. Syracuse University Art Museum. Artist’s Collection, New York City.",
  },
];

const gallery2 = [
  {
    href: "/images/works/scale-modeling/fig2.jpg", 
    title: "",
    description: "Fig. 2. Rina Banerjee, detail, <i>A World Lost</i>, 2013. Syracuse University Art Museum. Artist’s Collection, New York City.",
  },
];

const gallery3 = [
  {
    href: "/images/works/scale-modeling/fig3.jpg", 
    title: "",
    description: "Fig. 3. Rina Banerjee, detail, <i>A World Lost</i>, 2013. Syracuse University Art Museum. Artist’s Collection, New York City.",
  },
];

export default function ScaleModelingEssay() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/mike_goode.png",
      author_name: "Mike Goode",
      bio: "Mike Goode is Professor of English and the William P. Tolley Distinguished Professor of the Humanities at Syracuse University, where he researches and teaches on British Romanticism, media studies, critical theory, gender, and the environmental humanities. His book <i>Romantic Capabilities: Blake, Scott, Austen, and the New Messages of Old Media</i> was published by Oxford University Press in 2020. His earlier book, <i>Sentimental Masculinity and the Rise of History, 1790-1890</i>, was published by Cambridge University Press in 2009. His interdisciplinary articles on British Romanticism, viral media, eighteenth-century political caricatures, aesthetic philosophy, postmodernism, historicist theory, gender, historical reenacting, and living history museums have appeared in various venues, including <i>PMLA</i>, <i>Representations</i>, <i>ELH</i>, <i>Romantic Circles</i>, and <i>Textual Practice</i>. He is currently directing a team of researchers creating an ecology and climate-related finding aid to the Syracuse University Art Museum’s permanent collection."
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
              Scale Modeling: The Climate of Rina Banerjee’s “A World Lost…”
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/mike_goode.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Mike Goode</span></div>
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
                    Rina Banerjee’s <i>A World Lost…</i> (2013) dangles an inverted dome-shaped, plastic horn-adorned, incandescent lightbulb-bedazzled, metal frame precariously over a colorful assemblage that combines organic and inorganic materials sourced from around the world (fig. 1). Comprised of sand, shells, plant forms woven from textiles, feathers, pebbles, figurines, filaments, and petty change from various currencies, the assemblage on the floor remaps the gallery space in terms of itself. Between this remapping, the entire installation’s massive size, the miniature scale of its components, and its temporal and affective titular framing through loss, <i>A World Lost…</i> invites reflections on <i>scale</i>.
                </p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">By designating the scale of what the sculpture depicts or imagines as “a world,” Banerjee makes it hard not to regard the assemblage on the floor as a whimsical habitat whose plant, animal, and human figures correspond to no known ecosystem or biome. Because she reinvents the topography and population of this habitat anew&mdash;and very differently&mdash;each time the piece is exhibited, whatever “world” one imagines in this habitat will indeed be lost in a matter of weeks. This future loss feels proleptically present somehow when one fixates on the slow, pendular, clockwise and counter-clockwise turning of the sculpture’s inverted dome (an inevitable climatic effect of the gallery’s air currents interacting with a heavy form suspended from a slender wire). Banerjee’s complete title for the sculpture, however, alters its spatial and temporal scale into something more expansive and yet also much more depressingly intimate:</p>
                <br />
                <blockquote className="relative border-s-4 border-[#f0d2d2] ps-4 sm:ps-6">
                  <p className="text-zinc-800 sm:text-base"><em>
                    A World Lost: after the original island appears, a single land mass is fractured, after population migrated, after pollution revealed itself and as cultural locations once separated did merged, after the splitting of Adam and Eve, shiva and shakti, of race black and white, of culture East and West, after animals diminished, after the seas’ corals did exterminate, after this and at last imagine all water evaporated,…this after Columbus found it we lost it, imagine this.
                  </em></p>
                </blockquote>
                <br />
                <p className="sm:indent-16">The simultaneously lost, found, and imagined “world” the sculpture references is a bit too much like ours. It is marked by fractures and forced mergers, by colonization and migration, by spiritual divides, by falls into binarizing hemispheres and social structures, and especially by ecological devastation: fault-lines, pollution, evaporation, extermination, extinction. The scale of <i>A World Lost…</i> is planetary and climatic.</p>
                <br />
                <p className="sm:indent-16">To reckon politically and affectively with anthropogenic climate change always involves wrestling with problems of scale, and this is a project with which sculpture can sometimes help. Climate change takes place on a planetary scale, and its mitigation must too. Thinking and acting at such a scale requires regarding oneself less as an individual than as an insignificant member of a biological population of billions whom one will never meet. This can be challenging and even uncomfortable. Doing so requires a degree of estrangement from one’s “world,” or at least from one’s sense of being at home. Spending some time contemplating and feeling for a strange, miniature world on a gallery floor can produce a version of this estrangement. The fact that some of the miniature animal figures roaming Banerjee’s <i>A World Lost…</i> depict familiar, endangered species like tigers and polar bears only adds to the sense of bewilderment, though it also reinforces a different kind of scalar problem (fig. 2). Among the many intellectual, representational, and affective challenges that climate change poses is that the most potentially devastating part of the mass extinction it has set in motion is also the hardest for humanity to witness. The destruction of biodiversity on micro-organic scales ultimately poses graver challenges to the future health of the biosphere than the decline of the megafauna that typically appear on the pages of Sierra Club advertisements.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">The scalar problem that anthropogenic climate change presents is temporal too. For the vast subset of the world’s billions who do <i>not</i> live in low-lying coastal areas, drought-prone regions, or wildfire-vulnerable biomes, climate change tends to be a slow-time event, even as abundant scientific evidence accumulates that the change has already begun accelerating. “Slow time” is, by definition, scalarly incommensurate with lived experience, even with the slowed-down, routinized time of everyday life and of clock-watching workdays. Slow time cannot be felt urgently, at least not all of the time, and it can be even more challenging to represent, especially through narrative media that tend to focus on individual experience, like novels and feature films. </p>
                <br />
                <p className="sm:indent-16">Once again, sculpture can sometimes help with this. <i>A World Lost…</i> may be a narrative phrase, but the ephemeral sculptural installation or assemblage at which it gestures does not tell a story so much as prompt reflection on what kinds and just how much lost time and energy it stores or records. The diverse objects and materials that comprise most of Banerjee’s sculpture are the products of long histories of botanical and mineralogical colonialism, multinational capitalism, consumption, contamination, and emissions. The coastline of the small island on the floor thus traces a carbon and energy footprint of staggering proportions: currencies from multiple continents comprised of metals mined from still others, sands transported by container ships and trailer-trucks from who knows where, polished rocks from multiple geologic regions, pieces of once-living coral reefs, figurines and horticultural forms created out of the same petrochemicals that persist in landfills and oceans, burnt-out lightbulbs whose expended kilowattage could power a small village for a month. A provocative recycling at once of foraged cultural detritus, of pollutants, and of fetish objects like cowrie shells, glass evil eyes, and nearly worthless coins, <i>A World Lost…</i> prompts reflection on how much has been lost for so little, and for so many little things.</p>
                <br />
                <p>One physically substantial component of <i>A World Lost…</i> that persists across each of its iterations is an antique scale, which hangs from the base of the sculpture’s inverted metal dome, making it an unmissable part of the work’s central vertical axis (fig. 3). In a public conversation with Banerjee in the Syracuse University Art Museum in March 2023, she recounted that the type of scale, a pan balance, carries personal associations for her of visiting marketplaces in India with her mother. Certainly, the viewer recognizes <i>A World Lost…</i>’s pan scale as a commercial one due to the presence of a plastic gold bullion bar in one of its pans. In the context of a sculpture that engages with histories of injustice bound up with enduring practices of ecological harm, however, the pan scale’s commercial associations end up entangled with its more general cultural power to conjure up and conceptualize “justice.” According to a symbolic tradition that endures into the present from ancient Egypt and Greece, a balanced pan scale signifies the dual ethical demand to weigh sides of a case equally and to find punishments that exactly counteract harms. Banerjee’s version of this emblem reads as critique or even parody of this idea. The incongruous objects juxtaposed on her scale’s two pans&mdash;on one side: fake gold bullion, ostrich egg, pedestal, glass eyes, and mohair wool; on the other: ostrich egg, feathers, coral, silver-plated bowl, and more mohair&mdash;are so blatantly non-equivalent that they do less to prop up balanced exchanges and retributive justice as desirable ideals than to conjure up the accounting manipulations and legal fictions that underwrite most of our fantasies of “balance.” In the context of a sculpture so engaged with the scalar challenges of anthropogenic climate change, a planetary event whose tipping point has already passed, the overall effect is to expose balanced scales as just another outmoded object in a world that teems with cast-off consumer goods and relatively worthless things. In the face of climate change, the very notion of “balance” as an ecological and cultural ideal looks antique. Anthropogenic climate change leaves so many of our conceptual scales hanging by precarious threads.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p>The project of heightening ecological being by estranging viewers from received conceptual and artistic lenses for thinking about ecosystems, “nature,” and climate informs <i>Assembly</i>, a major upcoming exhibition the Syracuse University Art Museum’s main galleries. From January to May 2024, acclaimed ecological artists Ed Morris and Susannah Sayler (Associate Professor, Film and Media Arts, Syracuse University) will be curating a show that creates dialogues between objects selected from the university’s collection and ecologically minded artworks created by themselves and by other distinguished Syracuse University faculty and alumni artists.</p>
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
                  <Link href="/works/reflection-take-me-to-the-palace-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Reflection: <i>Take Me to the Palace of Love</i></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/stanger-in-the-palace-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Stranger in the Palace of Love</div>
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