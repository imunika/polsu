'use client';
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import SocialIcons from "../../components/Socialicons";
import Image from 'next/image';
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";
import { TbArrowBack } from "react-icons/tb";

const gallery1 = [
  {
    href: "/images/works/finding-love-for-home/fig1.jpg",
    title: "",
    description: "Fig. 1. A walk through of Rina Banerjee’s drawings in <i>Take Me to the Palace of Love</i>, Syracuse University Art Museum, March 2023.",
  },
];

const gallery2 = [
  {
    href: "/images/works/finding-love-for-home/fig2.jpg", 
    title: "",
    description: "Fig. 2. Installation view, <i>Paintings from Land</i>, exhibition of Mithila paintings curated by Ankush Arora (G ‘23, Art and Music Histories), Syracuse University Art Museum, January 2023.",
  },
];

const gallery3 = [
  {
    href: "/images/works/finding-love-for-home/fig3.jpg", 
    title: "",
    description: "Fig. 3. Contemporary artist Rina Banerjee in conversation with Ankush Arora with the Mithila art exhibition in the background, Syracuse University Art Museum, March 2023.",
  },
];

export default function FindingLoveEssay() {  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/ankush_arora.png",
      author_name: "Ankush Arora",
      bio: "Ankush Arora is a Ph.D. Candidate in the History of Art Department at Yale University. His research focuses on eighteenth- and nineteenth-century art and architecture from the British colonial period in India, with an emphasis on visual and textual portrayals of the natural world. He holds an M.A. in art history from Syracuse University (2023) and is a recipient of the Digital India Learning Fellowship (2022) from the American Institute of Indian Studies. Prior to graduate school, Ankush worked as an arts journalist in Delhi, where he reviewed exhibitions on Indian modern and contemporary art for publications, such as <i>Reuters</i>, <i>Architectural Digest</i>, <i>The Hindu</i> and <i>Firstpost</i>."
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
              Finding Love for “Home”: Curating Mithila Art at Syracuse University Art Museum
            </h1>

            <div className="sm:sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/ankush_arora.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Ankush Arora</span></div>
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
                  January 2023. It was a typically snowy day in Syracuse, my temporary home for two years as a graduate student in the university’s M.A. program in art history (2021-23). On that day, many buildings on the Syracuse University campus were bathed in a white sheet of snow, while its clear, undulating paths stood out as strips of deep brown concrete in an all-encompassing, grey sight. Taking in this view of upstate New York cold—in my second year of experiencing Central New York winter&mdash;I made my way to the Syracuse University Art Museum, which was hosting <i>Take Me to the Palace of Love</i>, a wide-ranging exhibition of sculptures and drawings by the New York-based contemporary artist Rina Banerjee (fig. 1). Included in this exhibition was a selection of Mithila paintings from the museum’s collections, which I had curated under the title, <i>Paintings from Land</i> (fig. 2).</p>
                <br />

                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />

                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">As I opened the museum door, the view in front of me changed dramatically: from the glowing, auratic white of the Syracuse University campus to the hot pink covering the main wall of the galleries, announcing the exhibition. To the right of the main wall hung two rows of Mithila paintings facing Banerjee’s drawings on the other side. Thanks to these changing settings, the idea of land, or homeland, suddenly seemed far from immutable to me. First, the deep affinity with land seen in the pictorial stories from Mithila set the tone to meditate upon the idea of home itself, which was defined by their geographical location, i.e., the Mithila region that largely corresponds to the area between parts of the Bihar state in India and bordering Nepal in the eastern part of the subcontinent. Second, the proximity of these paintings to Banerjee’s drawings, a diasporic artist of Indian descent, in the same project helped to draw out connections with home that had less to do with specific locations, and more to do with constant manoeuvrability across borders.</p>
                <br />
                <p className="sm:indent-16">As for me, this semester-long project (fall 2022) of curating the exhibit of Mithila paintings revealed a different aspect of home&mdash;on the move, transplantable, hard to define or pin point, and yet indelible&mdash;that may not have been possible to experience while living in India. Being an international student from India, therefore, it was in these galleries that I was able to locate home&mdash;Delhi, my home city&mdash;and find my own work-in-progress definitions, or transitoriness, of home.</p>
                <br />
                <p className="sm:indent-16">Specifically, from the museum’s walls, the exuberant colors of Mithila paintings, the bold line work of the artists, and their intricate patterns created a visual palimpsest in my mind, bringing back vague memories of viewing similar works at Dilli Haat, a much-visited indigenous <i>bazaar</i> of visual, performative, and culinary arts supported by Delhi Tourism, located near my home. Stacked on top of each other, colourful and monochromatic images of gods, goddesses, plants, and animals were up for sale by artists from Bihar. Typically, I would admire these paintings, take pictures of the shop’s display for an occasional social media post, and move onto the next store. Little did I know that I would be curating an exhibition of these works in a country miles away from Delhi; the project would turn out to be self-reflective for an Indian-origin migrant building a new life in America. In Syracuse, quite unlike Delhi, Mithila art resonated differently with me; it emerged as a way to establish a tenuous connection with home, one that I had taken for granted and whose value now became dearer in a foreign country. In hindsight, revisiting the everyday sight of Mithila art in a Delhi <i>bazaar</i> became a point of investigating received ideas of a permanent and singular home, triggered by my relocation.</p>
                <br />
                <p className="sm:indent-16">Somewhat conscious of these thoughts while working on the project, I confronted a fundamental question as I felt torn between memories of a land seven thousand of miles away and acclimatising to a new country that simultaneously seemed more familiar and more foreign with each passing day: How does one communicate the story of an “Indian” home, with its particular sights, sounds, and smells, to an internationally diverse audience (largely, students and faculty) of an academic museum in North America? The conceptual framework of the Rina Banerjee exhibition, appropriately titled <i>Take Me to the Palace of Love</i>, opened up the possibility of “feeling” as well as “visualizing” home(s), largely owing to the project’s emphasis on the nourishing power of love that helps to anchor us within communities, places, and the planet. The Mithila paintings seamlessly fit into the exhibition’s theme of love and belonging because of the artform’s origin that is inextricably tied to the foundations of a home: Mithila art is a centuries-old tradition of communities of women adorning the walls and floors of their homes.<sup><Link href="#fn1" id="ref1" className="anchor">1</Link></sup>  Known for depicting Hindu gods and goddesses, wedding designs for the nuptial chamber, and symbols of fertility drawn from nature, these paintings created auspicious settings for family rituals.</p>
                <br />
                <p className="sm:indent-16">Paying attention to their evolution from walls to paper in the mid-twentieth century,<sup><Link href="#fn2" id="ref2" className="anchor">2</Link></sup>  the Mithila exhibit teased out themes of love&mdash;and hatred, its obverse&mdash;while emphasizing the essence of home despite the change in the medium. In terms of the process, the first step of artists using a wash of cow dung to prepare the paper, creating a background resembling the surface of the wall paintings,<sup><Link href="#fn3" id="ref3" className="anchor">3</Link></sup>  made me discover some unexpected research connections as a graduate student. Looking back at my paper on the entanglements between the cow’s sacrality and Hindu nationalism, for an anthropology seminar, I realized that the animal’s materiality nuanced the idea of home that is unique to India: from the cow’s crucial role in ploughing agricultural lands to the manipulation of its perceived divinity for religious, anti-minority politics in the country.</p>
                <br />

                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">In the Mithila exhibit, what emerges in all of these stories is love, or the lack of it, growing in different settings of “home.” A place of both liberation and restriction for women, the home in these paintings becomes a space to seek the nurturing power of love and support of other women in  order to break the confines of the same home and walk up the ladder toward the outer world. In some cases, on the other hand, love remains an unrealized dream when we see fetuses of girls as pink flowers hanging on a tree, a sign that their lives will never see the light of the day because of the age-old discrimination against births of girl children in India. It is in such situations, as Shalinee Kumari’s <i>Shakti</i> revealed, that there is a need for women to harness their inherent energy, such as the fieriness of the Hindu Goddess Durga or the cosmic feminine power (<i>shakti</i>) governing the universe, to fight the battles of a patriarchal society.</p>
                <br />
                <p className="sm:indent-16">Indeed, love and home&mdash;and their respective opposites&mdash;go hand in hand in these paintings. In the Hindu epic Ramayana, Sita is displaced and abducted by the ten-faced demon, Ravana. Under the watch of demonesses and imprisoned in a grove near Ravana’s palace, Sita finds a semblance of a home, thanks to an adventurous flight by the monkey God, Hanumana, who brings a ring from her husband, Rama, as a gesture of love and remembrance in times of separation. In sharp contrast with the hyperbole of epics and day-to-day stories of domestic, human lives, we see love finding expression in the natural world, a home bigger than the human-made walls of concrete: in people’s devotion toward the sun god; and in the communal living world of humans and non-humans in forests and water bodies.</p>
                <br />
                <p className="sm:indent-16">Installed right across Banerjee’s own watercolor drawings, these eight paintings called attention to the Kolkata-born artist’s Indian origins, and, by extension, to her diasporic mobility, returning us to the very idea of home that I began this essay with. Recalling the words of Romita Ray, curator of the Banerjee exhibition, from the wall label: the vibrant and “jewel-like” colors in the artist’s drawings “disclose her Indian heritage,” which are not “unlike the colors in Mithila art.” Indeed, the bold colors of Mithila art&mdash;reds, magentas, blues, yellows&mdash;are characteristic of an intrinsic Indianness that thrives on the explosion of color perpetually throbbing in the country’s heart. Yet, the Indian link between Banerjee’s drawings and Mithila art gets complicated because of the contrasting emphases on the processes of drawings&mdash;and more broadly on the fundamental act of making itself&mdash;in both these art forms: in the former, the contours of forms, shapes, and bodies are fluid, ungrounded, and loosely defined; and in the latter, the linework is emphatic, firm, and delible, reflecting the formative process of art making in Mithila art.<sup><Link href="#fn4" id="ref4" className="anchor">4</Link></sup> </p>
                <br />
                <p>Moving between the fixed and the fluid, between home and what that lies away from home, all these drawings do not stand at the diametrically opposing sides to understand where might one belong in this fractured world of today. Instead, they indicate that the very idea of belonging remains volatile, much like a diasporic identity; our belongingness emanates from our rootlessness, constant movement, and the lingering inability to make sense of what and where one’s home is, and who is part of it. Love helps to find that place. It could be found in the art of Mithila or in the world of Rina Banerjee; sometimes in collusion, at other times in conflict; or resting behind separate doors of the same Palace, doors that may or may not open toward each other all the time.</p>
                <br />
                <p className="text-sm sm:text-base underline underline-offset-4 decoration-1 decoration-gray-400">Acknowledgements</p>
                <p className="text-sm sm:text-base">I want to thank Dr. Romita Ray, Associate Professor and Director of Undergraduate Studies in Art History, Department of Art and Music Histories, Syracuse University, for giving me the opportunity to curate the Mithila Art exhibit. The project would not have been possible without the mentorship of Dr. Susan Wadley, Professor Emeritus, Anthropology Department, Syracuse University; Dr. Melissa A. Yuen, Interim Chief Curator, Syracuse University Art Museum; and the entire team of the museum. Research into the Mithila project was supported by the Bharati Memorial Grant (2022), awarded by the South Asia Center, Syracuse University.</p>
                <br />
                <br />
                <p className="border-t border-[#d3d3d3] mb-4"></p>
                <sup id="fn1">
                  1. Carolyn Brown Heinz, “Documenting the Image in Mithila Art,” <i>Visual Anthropology Review</i> 22, no. 2 (September 2006): 7-9.
                  <Link href="#ref1" title="Jump back to footnote 1 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn2">
                  2. David Szanton, “Mithila Painting: 1949-2014,” Marg: A Magazine of the Arts 66, no. 1 (September 2014): 34.
                  <Link href="#ref2" title="Jump back to footnote 2 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn3">
                  3. “Preparing the Canvas for Madhubani Art,” Dastkari Haat Samiti, accessed July 10, 2024, <a href="https://artsandculture.google.com/story/preparing-the-canvas-for-madhubani-art-dastkari-haat-samiti/ewWBxpjXyNFMJQ?hl=en" target="_blank">https://artsandculture.google.com/story/preparing-the-canvas-for-madhubani-art-dastkari-haat-samiti/ewWBxpjXyNFMJQ?hl=en</a>.
                  <Link href="#ref3" title="Jump back to footnote 3 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn4">
                  4. Laurel Shell Dickens, “A Fluid She: The Drawings of Rina Banerjee,” in <i>Rina Banerjee: Make Me a Summary of the World</i>, ed. Jodi Throckmorton (New York: Pennsylvania Academy of the Fine Arts, San Jose Museum of Art, 2018), 68; Mani Shekhar Singh, “Making Claims to Tradition: Poetics and Politics in the Works of Young Maithil Painters,” in <i>Wording the World: Veena Das and Scenes of Inheritance</i>, ed. Roma Chatterji (New York: Fordham University Press, 2015), 324, 328.
                  <Link href="#ref4" title="Jump back to footnote 4 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
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
                  <Link href="/works/a-world-lost-climate-policy-art"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2"><i>A World Lost</i>: Climate, Policy, and Art</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/infectious-transmissions"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Infectious Transmissions: Rina Banerjee in Two Dimensions</div>
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