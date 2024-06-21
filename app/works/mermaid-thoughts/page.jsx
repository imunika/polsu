'use client';
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";
import { TbArrowBack } from "react-icons/tb"; 

const gallery1 = [
  {
    href: "/images/works/mermaid-thoughts/fig1.jpg", 
    title: "",
    description: "Rina Banerjee, <i>Viola</i>, from New Orleans…, 2017. Murano glass horns, Indian rakes, seed beads, steel, Yoruba African mask, oyster shells, cowrie shells, Charlotte dolls, polyester horse hair trim, Korean silks, Indian silks, vintage Kashmir shawls, French wire ferris wheel, Congolese elbow bangles, colonial mirror sconces, Japanese seed glass beads, sequins, threads. Courtesy of the Pennsylvania Academy of the Fine Art, Philadelphia. Museum Purchase, 2017.53. Photograph courtesy of Syracuse University Art Museum, 2023.",
  },
];
export default function MermaidThoughtsEssay() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/jason_vartikar.png",
      author_name: "Jason Vartikar",
      bio: "Jason Vartikar is a writer, scholar, model and performer living in New York City, where he is a Joan Tisch Fellow at the Whitney Museum of American Art. From 2016-2022, he was a Jones fellow in the Stanford department of art & art history Ph.D. program. He is currently writing his dissertation on Edward Hopper, focused on Greenwich Village, where the artist lived and worked for over fifty years. His essay on the wire sculptures of Ruth Asawa appeared in <i>American Art</i>, the journal of the Smithsonian American Art Museum, which awarded him Frost Prize honorable mention in 2021."
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
              Mermaid Thoughts
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/jason_vartikar.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Jason Vartikar</span></div>
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
                  Are there real magical objects anymore? Medieval crowns and crystal ewers were once meant to carry divine power. Today, scholars shy from the idea that objects are literally magical. Here, I explore if Rina Banerjee’s 2017 sculpture <i>Viola…</i> may have such power. I explore how the sculpture may compare to the legendary, magical songs of sirens, or mermaids.
                </p>
                <br />
                <p className="sm:indent-16">The mermaid, known popularly from Hans Christian Andersen’s <i>The Little Mermaid</i> (1837), originates from the ancient siren, a creature often depicted as half human, half bird.<sup><Link href="#fn1" id="ref1" className="anchor">1</Link></sup>  Siren music was so gorgeous it forever trapped the listener, causing death by beauty&mdash;siren, from the ancient Greek for “rope,” stresses the inherently binding power of beauty. Sirens in Homer’s <i>The Odyssey</i> serenaded passing mariners, luring them to die in a Siren meadow of flowers and skulls.<sup><Link href="#fn2" id="ref2" className="anchor">2</Link></sup>  William Shakespeare refers to sirens in <i>Antony and Cleopatra</i> (1607), picturing Cleopatra’s arriving sailboat: “At the helm / A seeming mermaid steers.” Like Homer’s Sirens, Shakespeare’s nymphic boat is bewitching, toxic, stunning the seawater and air with lovesickness: “Purple the sails, and so perfumed that / The winds were lovesick with them.” Adding to this drama of beauty’s stunning power, Cleopatra’s own beauty is too much for words. “For her own person, she beggared all description.”<sup><Link href="#fn3" id="ref3" className="anchor">3</Link></sup>  She is not just indescribable, but like the dreamy, binding effects of siren song, hers is a tongue-tying, word-stopping mermaid beauty.</p>
                <br />
                <p className="sm:indent-16">Could Banerjee’s sculpture be a siren song too, could it stun the elements, the air, the light? Could it bind the tongue, in other words, stopper the flow of description?</p>
                <br />
                <p className="sm:indent-16">Let’s tackle the second question first. The sculpture’s intense material and compositional variety, with so many parts, feels like a juggernaut to describe. It is figural, seemingly winged, birdlike, and ferocious, perhaps suggesting it is indeed the body of a Homeric Siren. Like the light bones of a bird, it is made of a thin, steel skeleton. It is draped in a feathery upholstery, consisting however of fabric, sequins, and dangling threads. Like the Sirens, too, at center is a human visage: a painted wooden face (a mask from Yoruba). Furthermore, over its head, stands a little wire Ferris wheel that, along with the figure’s forward tilt, suggests the motion of perpetual advance, as if the sculpture forever lunges at mariners. Amputated Charlotte-doll’s legs tangled in the Ferris wheel could suggest the Siren’s graveyard meadow of bones. A dusting of blue and green sand blankets the floor, evoking the palette of the Siren’s Mediterranean Sea. At the base, a fanning array of clam shells and wooden shoe-forms make two, giant crustacean-y fins, suggesting the figure is Poseidon’s nymph. Banerjee’s figure also holds an imposing wood rake, like talons, and features two enormous black glass tusks butting the ground, like beaks. Up in the air, behind the figure, and anchored by a fine web to its back, is a round steel armature with silky, feathery embellishments, suggesting a sea net ready to capture.</p>
                <br />
                <p className="sm:indent-16">While it may help to picture this figure as a Siren, who could ever describe to any avail the object’s crevices, surfaces, and joints, baroquely embroidered with shells and beads, in any such neat terms? At some point, the weight of the sculpture’s apparently infinite variety will buckle the act of description. And I take this to be one of the object’s most important effects. A tongue-tying, Siren magic.</p>
                <br />
                <p className="sm:indent-16">This summer, my six-year-old daughter, Archer, bobbed up to me poolside, ecstatic about the mermaids she had found in the shallow end. I smiled; how cute. But maybe that’s because I’m looking for mermaids in the wrong places, while she has been looking in the right ones. Perhaps I should search in the electric squiggles of sunlight over the pool’s blue surface; in the cloudy mirages in the deep end; in the iridescence of big soap bubbles; in the gap between the teeth of cowrie shells. Maybe it is there, in the “lovesick winds,” the stunned air and light&mdash;for example, the texture, glow, or aura of a painting&mdash;where critics could sense the sirens.</p>
                <br />
                <p className="sm:indent-16">On closer looking, Banerjee’s sculpture may indeed stun its immediate air and light. Reflections swim and arc over the craning rounded surfaces of the two black glass tusks, waterfalling as you walk by. On the floor and walls of the gallery, shadows swirl in hooks and loops, moving and tangling with one’s own silhouette. The dusting of green and blue sand shimmers, casting a little, radiant Arora Borealis across the whole space. Protruding like wings, cloud-like puffs seem to change shape as you move around them, recalling cumulus in the real sky. Gossamer threads disappear and reappear as the eye glides across them. There is a sconce on the floor, bathing the figure in an upward and eerie glow. Light immaculately interpenetrates the figure’s lacy layers, escaping in graceful patterns over the surface. Hair wafts uncannily in the open air. The Yoruba mask seems to move, its face too determined to be inert.</p>
                <br />
                <p className="sm:indent-16">As in Henry James’ masterwork <i>The Turn of the Screw</i> (1898), you wouldn’t ever know if these ghosts haunt the sculpture, for real, are absolutely <i>there</i> in the Syracuse gallery <i>with you</i>; or if, instead, these ghosts are merely an insubstantial pageant, thin air, tricks, illusions.<sup><Link href="#fn4" id="ref4" className="anchor">4</Link></sup>  In any case, it is precisely this&mdash;not only its word-defying variety but&mdash;its confounding spells over light and air, its unusual radiance and atmospherics, aura, and automatism, that tampers with our ability to know anything about it for sure, that binds us in its magical labyrinth, that makes it a true siren song.</p>
                <br />
                <br />
                <p className="border-t border-[#dadada] mb-4"></p>
                <sup id="fn1">
                  1. Hans Christian Andersen, <i>The Little Mermaid</i>, ed. Michael Hague (New York: Henry Holt, 1993).
                  <Link href="#ref1" title="Jump back to footnote 1 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn2">
                  2. Homer, <i>The Odyssey</i>, ed. Robert Fitzgerald (Garden City, N.Y.: Doubleday, 1961).
                  <Link href="#ref2" title="Jump back to footnote 2 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn3">
                  3. William Shakespeare, “Antony and Cleopatra,” in <i>Tragedies Vol. 2</i>, ed. Sylvan Barnet (New York: Alfred. A. Knopf, 1993).
                  <Link href="#ref3" title="Jump back to footnote 3 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn4">
                  4. Henry James, <i>The Turn of the Screw</i> (New York: Dover Publications, 1991).
                  <Link href="#ref4" title="Jump back to footnote 4 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
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
                  <Link href="/works/love-in-syracuse-making-art-together"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Love in Syracuse: Making Art Together</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/other-routes-of-the-image"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Other Routes of the Image: Looking at Rina Banerjee by Way of Istanbul</div>
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