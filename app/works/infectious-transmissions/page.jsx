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
    href: "/images/works/infectious-transmissions/fig1.jpg",
    title: "",
    description: "Fig. 1. <i>Infectious Migrations</i> (from the series <i>An Uncertain Bondage is Required When Threatening Transmission</i>), 1999, incense sticks, kumkum, Vaseline, turmeric, Indian blouse gauze, fake fingernails and eyelashes, chalk, foam, feathers, fabric, Spanish moss, light bulbs, wax, Silly Putty, quilting pins, plastic tubing, latex and rubber gloves, acrylic and dry pigment, dimensions variable; as installed at the Whitney Museum. Coll. Frédéric Guilbaud, France.",
  },
];

const gallery2 = [
  {
    href: "/images/works/infectious-transmissions/fig2.jpg",
    title: "",
    description: "Fig. 2. <i>Her black growth produced such a sprinkle of ultimate fears that a shadow of silver emerged from it to watch herself watching and followed all worldly movements</i>, 2006, mixed media on paper, 40 3/4 x 44 1/2 in., private collection, Paris.",
  },
];

const gallery4 = [
  {
    href: "/images/works/infectious-transmissions/fig4.jpg",
    title: "",
    description: "Fig. 4.	<i>The durability of her beauty, polished fingers, her private and delicate proportions made all the city to know that she was a wonder… that only nature was able to ponder</i>, 2011, acrylic, gold paint, ink on watercolor paper, 22.5 x 15 in.",
  },
];

const gallery3= [
  {
    href: "/images/works/infectious-transmissions/fig3.jpg",
    title: "",
    description: "Fig. 3. <i>Severed suddenly from land she swam, ran far for freedom</i>, 2015, acrylic, gold paint, ink on wood maple panel",
  },
];

const gallery5 = [
  {
    href: "/images/works/infectious-transmissions/fig5a.jpg",
    title: "",
    description: "Fig. 5a.	<i>A myriad of voices from beaten ground and buried folks, headless cries break even and odd broken sky to make sea to float like crackers baked by empires storm to make us hovel beneath, in whispers this blemish is wound, countable, not incorrect or surmountable so, so so – so what to do but come with feathered citizens and blow hard away this faceless fascism</i>, 2019, acrylic, collage on handmade paper, installation dimensions variable, 63 x 70 in., 160 x 177.8 cm",
  },
  {
    href: "/images/works/infectious-transmissions/fig5b.jpg",
    title: "",
    description: "Fig. 5b.	<i>A myriad of voices from beaten ground and buried folks, headless cries break even and odd broken sky to make sea to float like crackers baked by empires storm to make us hovel beneath, in whispers this blemish is wound, countable, not incorrect or surmountable so, so so – so what to do but come with feathered citizens and blow hard away this faceless fascism</i>, 2019, acrylic, collage on handmade paper, installation dimensions variable, 63 x 70 in., 160 x 177.8 cm",
  },
];

export default function InfectiousTransmissionsEssay() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/rebecca_brown.png",
      author_name: "Rebecca M. Brown",
      bio: "Rebecca M. Brown is Professor in the Department of the History of Art and Chair of the Advanced Academic Programs in Museum Studies and Cultural Heritage Management at Johns Hopkins University. Brown’s research engages in the history of art, architecture, and visual culture of South Asia from the late eighteenth century to the present. She has published numerous articles and three books on the early British presence on the subcontinent, the anti-colonial movement of the early twentieth century (<i>Gandhi’s Spinning Wheel and the Making of India</i>, Routledge 2010), art in the decades after India’s independence in 1947 (<i>Art for a Modern India</i>, Duke 2009), and the economic and political machinations of the long 1980s (<i>Displaying Time: The Many Temporalities of the Festival of India</i>, Washington 2017). Her current research focuses on the painter KCS Paniker (1911–77) and his search for a language of painting in the 1960s and 1970s. Other interests extend to contemporary photography via the work of Dayanita Singh and Annu Palakunnathu Matthew, and to the decolonizing maneuvers of the sculpture–installations of Rina Banerjee."
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
              Infectious Transmissions: Rina Banerjee in Two Dimensions
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/rebecca_brown.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Rebecca M. Brown</span></div>
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
                  Rina Banerjee’s sculpture–installations interrupt the gallery space, as she uses myriad media to create effusive, organic, overwhelming constructions that engage our senses. We are drawn to these detailed compilations of forms, and we are alert: they ask us to come close but they also seem to reach out towards us with a hint of threat. They are infectious, in all senses of the word. This infectiousness extends to Banerjee’s paintings, inviting and threatening and expanding well beyond their frames.<sup><Link href="#fn1" id="ref1" className="anchor">1</Link></sup>
                </p>
                <br />
                <p className="sm:indent-16">Room-sized installations have centered Banerjee’s practice from the beginning, but there was always the wall, and the two-dimensional was always gesturing to the three. In <i>Infectious Migrations</i> (2000), she assembled a wall-based sculpture that emerges from a blueprint on mylar&mdash;a plan of the air ducts and electrical wiring of a building at Columbia’s School of Public Health that Banerjee found.<sup><Link href="#fn1" id="ref1" className="anchor">2</Link></sup>  The plan shows, in two-dimensions, the pathways designed to move powerful forces into, through, and out of the building, enabling it to breathe, to energize itself, to support the work and life that it houses. That it is a health-related structure adds an appropriate twist to Banerjee’s use of it in 2000, as she built from it a critical engagement with the AIDS pandemic, as it continued to destroy lives across the world and particularly in Africa.</p>
                <br />

                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>
                
                <br />
                <p className="sm:indent-16">The building plan reappears in her later work&mdash;she copied it so that she could re-use it&mdash;as in <i>Her black growth produced such a sprinkle of ultimate fears that a shadow of silver emerged from it to watch herself watching and followed all worldly movements</i> (2006). Against the backdrop of the plan, which is oriented upside-down, two human-like figures float in a suspension of red, grey, and pink dots and blobs. The title suggests that this sprinkle might be seen as blood, bodily fluid, and a “black growth”&mdash;evoking black mold, a cancerous tumor, and also simply black body hair, aligning the foreign and intrusive with the natural, pointing to the way racism makes alien certain bodies, seeing them as intrusive or wrong.</p>
                <br />

                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>
                
                <br />                
                <p className="sm:indent-16">The two bodies in the work are human but with a twist: the lower, green figure has four arms and perhaps three legs. Her fingers extrude long thin black fronds for nails, her shoulders sprout thin wings, her hair winds to the sky, sprouting grey leaves at its base and orange flowers at its crest. Sometimes her hair twists behind the pipes of the diagram, making visible their interpenetration. Her companion, whose gender is even less certain, has two profiles and seven eyes across their head, but their whole body is covered with eyes. Their feet sprout green fronds and their arms and tail seem to melt into a watercolor haze. Both figures expel lines of veiny blood and green vegetal growth from their mouths. The electric, mechanical, air-duct flows of the diagram are echoed by the bodies and their effluvia that float above and within in watery acknowledgement of the penetration of the alien into the organized heart of architectural engineering, of infrastructural building against the chaos and the intrusion of the other or the alien.</p>
                <br />
                <p className="sm:indent-16">These meditations on the relation of bodies to space, and of flows of air and electricity to flows of blood, snot, semen, viscera, vaginal secretion, continue through the last two decades of Banerjee’s work. Bodies often float, whether fully immersed in liquid, as in <i>Severed suddenly from land she swam, ran far for freedom</i> (2015), or subtly unmoored from gravity, as in <i>The durability of her beauty, polished fingers, her private and delicate proportions made all the city to know that she was a wonder… that only nature was able to ponder</i> (2011). And their surfaces shift into transparency so that we can sometimes see through skin into inner workings offered not as anatomical plans but through daubs of paint, collaged pictures of teeth, or intrusive passages of dark, watery pigment.</p>
                <br />

                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>
                
                <br />

                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery4} />
                  </div>  
                </div>

                <br />
                <br />              
                <p className="sm:indent-16">Banerjee paints and draws on paper, but uses multiple media to effect this watery sensibility, using ink and acrylic alongside cut-outs of patterned paper and gold leaf. She experiments with frameless works, suspended away from the wall (<i>Severed</i>, for example), and also with paintings that appear mural-like, spreading outward in a flow of cut-out teardrop shaped forms to extend the work onto the gallery wall. Here, the gesture of <i>Infectious Migrations</i>, spreading outward and downward from the wall into three-dimensions finds its echo. In <i>A myriad of voices</i> (2019), these cutouts emerge from the painted sheets of paper, themselves attached to the wall with round-headed pushpins. The watercolor paper’s ragged edges don’t quite line up, and so while from a distance it feels like a site-specific painting done directly on the wall, on closer looking, one finds a painting on paper that has escaped to overrun the adjacent corner and wall. The full title underscores the import of this movement outward: <i>A myriad of voices from beaten ground and buried folks, headless cries break even and odd broken sky to make sea to float like crackers baked by empires storm to make us hovel beneath, in whispers this blemish is wound, countable, not incorrect or surmountable so, so so &mdash; so what to do but come with feathered citizens and blow hard away this faceless fascism</i>. Banerjee’s titles offer a parallel aural and textual gloss on the dynamism of her works. Here, the extended paper droplets make material and visual the strength of breath in the title. Or perhaps the central figure, whose armless fingers excrete droplets and drip lines of red, is drawing souls or life force up from the “beaten ground.” We can trace a transmission both into and out from this central figure: drops on her head flow into ribbons of red from between her legs; her mouth secretes brown patterned lozenges that pass by a human-headed bird who has her own word balloon. A trunk of colored lines curves upward from the level of her nose. She gathers the flow inward, then directs it out again. Transmission, flow, infection: fluids, sounds, breath, voice.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery5} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">In 2000, Banerjee deployed a found architectural diagram of movement and power to ask us to contemplate the infection still raging across the world. Flows nourish but they also inundate, and they also slow to a trickle. The plan of air and electricity allowed Banerjee to unpack bodily relations, questions of transmission that echoed both disease vectors and histories of migration, “aliens” and othered bodies floating atop the ordered geometry of diagrams. Banerjee continues to explore the flows impeded and restricted by history, waiting to be severed suddenly and to swim, seeking out new modes of listening, feeling, catching buried voices. She offers us critical meditations on global pandemic, human migration, and the fragility and porosity of the body, inviting us to recognize our own infection, our own imbrication in these violent and visceral histories of transmission.</p>
                <br />
                <br />
                <p className="border-t border-[#dadada] mb-4"></p>
                <sup id="fn1">
                  1. For an exceptional (in all senses) essay focused on her “drawings,” see Lauren Shell Dickens, “A Fluid She: The Drawings of Rina Banerjee,” in Jodi Throckmorton, ed. <i>Rina Banerjee: Make Me a Summary of the World</i> (Philadelphia: Pennsylvania Academy of the Fine Arts, San José: San José Museum of Art, 2018), 51–71.
                  <Link href="#ref1" title="Jump back to footnote 1 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn2">
                  2. Exhibition catalog: Maxwell I. Anderson, et al. <i>Whitney Biennial: 2000</i> (New York: Whitney Museum of American Art, 2000); review and reproduction of Banerjee’s contribution to the exhibition: Carol Vogel, “Choosing a Palette of Biennial Artists: Surprises in the Whitney’s Selections,” <i>New York Times</i> (8 December 1999), E1, E5.
                  <Link href="#ref2" title="Jump back to footnote 2 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
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
        <div className="sm:sm:my-10 md:col-span-4 col-span-6">
          <div className="flex items-center gap-20">
            <div className="text-left flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS ESSAY</p>
                <div className="flex gap-1 items-center justify-start">
                <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href="/works/finding-love-for-home"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Finding Love for “Home”: Curating Mithila Art at Syracuse University Art Museum</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/installing-take-me-to-the-palace-of-love-ac"
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