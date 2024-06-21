'use client';
import { useEffect, useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";
import { TbArrowBack } from "react-icons/tb"; 

const gallery1 = [
  {
    href: "/images/works/stanger-in-the-palace-of-love/fig1.jpg", 
    title: "",
    description: "Fig. 1. E. B. Havell, <i>A Handbook to Agra and the Taj: Sikandra, Fatehpur-Sikri and the Neighbourhood</i>. Calcutta: Thacker and Spink, 1924, 2nd edition.",
  },
];

const gallery2 = [
  {
    href: "/images/works/stanger-in-the-palace-of-love/fig2.jpg", 
    title: "",
    description: "Fig. 2. Rina Banerjee, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, 2003. Plastic, antique Anglo-Indian Bombay dark wood chair, steel and copper framework, floral picks, foam balls, cowry shells, quilting pins, red colored moss, antique stone globe, glass, synthetic fabric, shells, fake birds. Artist’s collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery3 = [
  {
    href: "/images/works/stanger-in-the-palace-of-love/fig3.jpg", 
    title: "",
    description: "Fig. 3. Detail, Rina Banerjee, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, 2003. Artist’s collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery4 = [
  {
    href: "/images/works/stanger-in-the-palace-of-love/fig4.jpg", 
    title: "",
    description: "Fig. 4. Taj Mahal, Agra, India, 1631- 1643 © <a href='https://commons.wikimedia.org/wiki/User:Yann' target='_blank'>Yann Forget</a>/<a href='https://commons.wikimedia.org/wiki/Main_Page' target='_blank'>Wikimedia Commons</a>/<a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC-BY-SA</a>",
  },
];

export default function StrangerPalaceLoveEssay() {
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
      author_headshot: "/images/headshots/lawrence_chua.png",
      author_name: "Lawrence Chua",
      bio: "Lawrence Chua is associate professor in the School of Architecture with a customary appointment in the Department of Art and Music Histories at Syracuse University. He is currently a research fellow at the Center for Southeast Asian Studies, Kyoto University and will be a senior research fellow at the Center for Khmer Studies in 2024. He has also held fellowships at the Getty Research Institute, the International Institute for Asian Studies, Leiden University and the Freiburg Institute of Advanced Studies, Freiburg University where he is also a FRESCO fellow for 2023-2025. His publications include <i>Bangkok Utopia: Modern Architecture and Buddhist Felicities</i> and articles in the <i>Journal of the Society of Architectural Historians</i>, <i>October</i>, <i>Journal of Urban History</i>, and <i>Architectural Histories</i>. He is a co-founder, with the artists Julie Mehretu and Paul Pfeiffer, of Denniston Hill, a queer artist of color-led not-for-profit arts and agriculture center in upstate New York."
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
              Stranger in the Palace of Love
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/lawrence_chua.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Lawrence Chua</span></div>
              </div>
              <div className="mt-4 flex items-center">
                <SocialIcons />
              </div>
            </div>

            <div className="text-md sm:text-lg text-zinc-800 font-light leading-8 tracking-wide">
              <div className="mt-2 border-t border-[#d3d3d3]">
              </div>
              <div>
                <blockquote className="relative text-center max-w-lg mx-auto mt-6 pt-8">
                  <div className="relative z-10">
                    <p className="text-xl text-gray-800">
                      <em className="relative">
                        <svg className="absolute -top-8 -start-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" className="fill-[#be3a3b] opacity-20 stroke-white	"/>
                        </svg>
                        <span className="text-xl relative z-10">Today I believe in the possibility of love; that is why I endeavor to trace its imperfections, its perversions.—Frantz Fanon<sup><Link href="#fn1" id="ref1" className="anchor">1</Link></sup></span>
                      </em>
                    </p>
                  </div>
                </blockquote>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  Both cenotaph and tomb, the Taj Mahal operates as both a monument to love and a monument to death. But its history as a romantic site is of more recent provenance than its history as a monument to temporality.<sup><Link href="#fn2" id="ref2" className="anchor">2</Link></sup>  Its formalist geometry and symmetry as well as its gleaming marble cladding create a stunning visual effect, the contradictory appearance of both solidity and lightness, a hulking volume with the detailing of a precious gemstone. They also placed the 17<sup>th</sup>-century Taj within a standard of beauty that emerged in the 18<sup>th</sup> century that falsely associated whiteness with the beauty of an earlier classical period.<sup><Link href="#fn3" id="ref3" className="anchor">3</Link></sup>  Built in the early modern period, the Taj was constructed at a moment in which the world-making practices of the medieval and classical worlds were giving way to a new mode of building and a new way of thinking. Hannah Arendt used the term “world-making” in the mid-20<sup>th</sup> century to refer to the project of philosophy as a social project.<sup><Link href="#fn4" id="ref4" className="anchor">4</Link></sup>  More recently, scholars like Ariella Aïsha Azoulay have deployed the term to reframe an understanding of precolonial creative practices as living social practices and not as commodity-oriented “art.”<sup><Link href="#fn5" id="ref5" className="anchor">5</Link></sup>  This difference between “art” and “worldmaking” is echoed&mdash;albeit in an essentialist way&mdash;on the first page of one of the early 20<sup>th</sup>-century guidebooks that the curator of Banerjee’s exhibition at the SU Art Museum, Romita Ray, placed across from the sculpture, almost as a conversation partner (fig. 1):</p>
                <br />
                <blockquote className="relative border-s-4 border-[#f0d2d2] ps-4 sm:ps-6">
                  <p className="text-zinc-800 sm:text-base">
                  “India is the only part of the British Empire where art is still a living reality, a portion of the people’s spiritual possessions. We, in our ignorance and affectation of superiority, make efforts to improve it with Western ideas; but, so far, have only succeeded in doing it incalculable harm. It would be wiser if we would first attempt to understand it.”<sup><Link href="#fn6" id="ref6" className="anchor">6</Link></sup>
                  </p>
                </blockquote>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">The modern architectural profession emerged within both the colonial project that transformed living social practices into an economy of things and the early modern revolution in European thinking that historians would later call “the Enlightenment.” At the conceptual center of the modern architectural discipline’s new understanding of building was the individual, usually a man, usually white, inscribed arms akimbo within the sacred geometries of the circle and the square.</p>
                <br />
                <p className="sm:indent-16">At the center of Rina Banerjee’s <i>Take me, take me, take me … to the Palace of Love</i> (2003) is an antique globe, a model of the world European empires sought to dominate (fig. 2). It is a model based in scientific reason, but organized according to the new, conceptual order of Westphalian nation-states with clearly defined borders and territories. Hovering precariously above the globe is a heavy antique Anglo-Indian chair (fig. 3). Red orbs cascade over this hybrid throne, filling its seat and spilling over it like luscious jewels or drops of blood. Over all of this, pink plastic sheets, stretched across a metal frame, mimic the spectral form of the Taj Mahal. In its mimicry of the original, Banjeree’s sculpture allows us to peer through the building’s romantic image and glimpse something else.</p>
                <br />
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">The Taj Mahal that we see today is the product of not only an early modern construction project, but its modern defacement and renovation (fig. 4). Throughout the 19<sup>th</sup> century, almost immediately after British troops conquered Agra from the Marathas in 1803, they set about systematically looting and even auctioning off many important palaces and monuments in the city, including a rumored attempt to dismantle and sell off the Taj Mahal.<sup><Link href="#fn7" id="ref7" className="anchor">7</Link></sup>  Today, we understand these actions as part of the larger colonial project of extracting resources from and impoverishing one of the richest regions in the early modern world. At the end of this century of plunder, George Curzon, who served as Viceroy of India from 1899 to 1905, oversaw the renovation of the Taj Mahal. The representative of Queen Victoria as empress of Britain’s South and some of its Southeast Asian colonies, Curzon was invested in using historical markers and new monuments to establish a colonial narrative about the British empire’s permanence in India during the early 20<sup>th</sup> century.<sup><Link href="#fn8" id="ref8" className="anchor">8</Link></sup>  Curzon took historical liberties in his renovation of the Taj Mahal and introduced several ahistorical motifs (including replacing the chandeliers looted by the Jats with Egyptian lamps) and redesigning the gardens to conform to English landscape standards, removing many of the fruit trees that had grown to maturity and began to overshadow the tomb itself. Curzon’s renovations staged the tomb as an object within a manicured lawn and secured its place as a romantic site. Writing to his friend, St. John Brodrick, Curzon openly described his own romantic inclinations:</p>
                <br />
                <blockquote className="relative border-s-4 border-[#f0d2d2] ps-4 sm:ps-6">
                  <p className="text-zinc-800 sm:text-base">
                  “The Taj is incomparable, designed like a palace and finished like a jewel—a snow-white emanation starting from a bed of cypresses and backed by a turquoise sky, pure, perfect and unutterably lovely. One feels the same sensation as in gazing at a beautiful woman, one who has that mixture of loveliness and sadness which is essential to the highest beauty.”<sup><Link href="#fn9" id="ref9" className="anchor">9</Link></sup>
                  </p>
                </blockquote>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery4} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">Curzon’s comments illuminate the ways that desire, or more specifically the inability of powerful white men and women to control their desires, drove empire and its ideologies. This act of hubris extended not only to the lands, resources, and peoples they exerted power over but to the concepts of time and space that they sought to subjugate to the progressive clock- and calendar-time of modernity and the bordered geography of nation-states.<sup><Link href="#fn10" id="ref10" className="anchor">10</Link></sup>  Just as world-making practices that produced sites like the Taj Mahal could be reduced to object-making processes that reduced life to things, within this new spatio-temporal conception, an idea like “love” could be reshaped with new romantic meanings that centered on the individual.</p>
                <br />
                <p className="sm:indent-16">But the Taj Mahal glimmers with sacred verses and not the unrequited yearnings of romantic poetry. Over the four doors of the tomb are inscribed <i>suras</i> that foretell the terrible events that will occur on the Day of Judgement: the folding up, the cleaving asunder, the rendering asunder of our world. They end on the east door with <i>Al-Baiyina</i>, “the Clear Evidence,” a reminder that those who are righteous and do good works shall dwell forever in Gardens of Paradise beneath which rivers flow.<sup><Link href="#fn11" id="ref11" className="anchor">11</Link></sup>  These are not the melancholic sentiments of “loveliness and sadness” that Curzon hallucinated. Rather, these are sentiments that connect the reader to times, places, and lives beyond the individual. They challenge us to conceive of a world that emerges out of a different kind of love, one that is not in bondage to the individual or a pathological attachment to a lost object of desire, but that obligates us to act selflessly on each other’s behalf and to transcend the poverty of the self. It is the love that Fanon calls us to study in <i>Black Skin, White Masks</i>: a love liberated from the coloniality of power and what he called “the metaphysis of race,” a love deeply rooted in collective practice.</p>
                <br />
                <p className="sm:indent-16">The objects in <i>Take me, take me, take me…to the Palace of Love</i> come from different parts of the colonized world, a third world that still fabricates the luxury objects and daily conveniences of the first world. They were plucked out of circulation by Banerjee and placed in this new context where they tell a story about a shared experience of surviving the brutality of empire. Embraced by an ephemeral shelter of pink plastic and metal scaffolding, their ontological values are no longer determined by a marketplace of commodities. It is in these queer shadows that Banerjee gives them the opportunity to conjure new worlds beyond the world in flames colonialism has bequeathed us.</p>
                <br />
                <br />
                <p className="border-t border-[#dadada] mb-4"></p>
                <sup id="fn1">
                  1. Frantz Fanon, <i>Black Skin White Masks</i> (London: Pluto, 1986), 42.
                  <Link href="#ref1" title="Jump back to footnote 1 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn2">
                  2. Pratapaditya Pal et al., <i>Romance of the Taj Mahal</i> (London: Thames & Hudson, 1989), 199.
                  <Link href="#ref2" title="Jump back to footnote 2 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn3">
                  3. George L. Mosse, “Racism and Nationalism”, Lasse Hodne, <i>Nations and Nationalism</i>, Vol. 1, No. 2, 1995, 165-166; “Winckelmann’s Apollo and the Physiognomy of Race”, <i>The Nordic Journal of Aesthetics</i> Vol. 29, No. 59, 2020, 6-35.
                  <Link href="#ref3" title="Jump back to footnote 3 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn4">
                  4. Hannah Arendt, <i>The Human Condition</i> (Chicago and London: University of Chicago Press, 1958), 176-177.
                  <Link href="#ref4" title="Jump back to footnote 4 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn5">
                  5. Ariella Aïsha Azoulay, <i>Potential History: Unlearning Imperialism</i> (London: Verso, 2019), 89-93.
                  <Link href="#ref5" title="Jump back to footnote 5 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn6">
                  6. E. B. Havell, <i>A Handbook to Agra and the Taj: Sikandra, Fatehpur-Sikri and the Neighbourhood</i>. Calcutta: Thacker and Spink, 1924 (2nd edition), v.
                  <Link href="#ref6" title="Jump back to footnote 6 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn7">
                  7. Eugenia Herbert, <i>Flora’s Empire: British Gardens in India</i>, 199; <i>The Illustrated London News</i>, October 28, 1843, 288, in Mrinalini Rajagopolan, “From Loot to Trophy,” <i>IIAS Newsletter</i> 57 (Summer 2011), 24.
                  <Link href="#ref7" title="Jump back to footnote 7 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn8">
                  8. Durba Ghosh, “Stabilizing History through Statues, Monuments, and Memorials in Curzon’s India,” <i>The Hsitorical Journal</i>, 66 (2023), 348-369.
                  <Link href="#ref8" title="Jump back to footnote 8 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn9">
                  9. Quoted in Lawrence John Lumley Dundas Zetland., <i>The Life of Lord Curzon Being the Authorized Biography of George Nathaniel Marquess Curzon of Kedleston K.G.</i>, Ernest Benn Ltd.. United Kingdom. Retrieved from <a href="https://southasiacommons.net/artifacts/2356467/the-life-of-lord-curzon-being-the-authorized-biography-of-george-nathaniel-marquess-curzon-of-kedleston-kg/3326689/" target="_blank">https://southasiacommons.net/artifacts/2356467/the-life-of-lord-curzon-being-the-authorized-biography-of-george-nathaniel-marquess-curzon-of-kedleston-kg/3326689/</a>, 1: 64, 128.
                  <Link href="#ref9" title="Jump back to footnote 9 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn10">
                  10. Walter Benjamin, “Theses on the Philosophy of History,” <i>Illuminations</i> (New York: Schocken, 1969), 261; Benedict Anderson, <i>Imagined Communities: Reflections on the Origin and Spread of Nationalism</i> (New York: Verso, 1991), 24.
                  <Link href="#ref10" title="Jump back to footnote 10 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn11">
                  11. W.E. Begley and Z.A. Desai, <i>Taj Mahal: The Illumined Tomb</i> (Cambridge: Aga Khan Program for Islamic Architecture, 1989), 213.
                  <Link href="#ref11" title="Jump back to footnote 11 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
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
                  <Link href="/works/scale-modeling"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Scale Modeling: The Climate of Rina Banerjee’s “A World Lost…”</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/take-me-art-museum"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">“Take me, take me, take me... to the art museum”</div>
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
