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
    href: "/images/works/other-routes-of-the-image/fig1.jpg", 
    title: "",
    description: "Fig. 1. Rina Banerjee, <i>Take Me, Take Me, Take Me…to the Palace of Love</i>, 2003. Plastic, antique Anglo-Indian Bombay dark wood chair, steel and copper framework, floral picks, foam balls, cowry shells, quilting pins, red colored moss, antique stone globe, glass, synthetic fabric, shells, fake birds. Artist’s collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery2 = [
  {
    href: "/images/works/other-routes-of-the-image/fig2.jpg", 
    title: "",
    description: "Fig. 2. Mosque of St. Sophia, Constantinople, Turkey, photomechanical print: photochrom, color, between ca. 1890 and ca. 1900, Library of Congress Prints and Photographs Division Washington, D.C. 20540 USA <a href='http://hdl.loc.gov/loc.pnp/pp.print' target='_blank'>http://hdl.loc.gov/loc.pnp/pp.print</a>",
  },
];

const gallery3 = [
  {
    href: "/images/works/other-routes-of-the-image/fig3.jpg", 
    title: "",
    description: "Fig. 3. Taj Mahal, Agra, Photoglob Company, 1890-1910, color photochrom, Library of Congress Prints and Photographs Division Washington, D.C. 20540 USA <a href='http://hdl.loc.gov/loc.pnp/pp.print' target='_blank'>http://hdl.loc.gov/loc.pnp/pp.print</a>",
  },
];

export default function OtherRoutesEssay() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/timur_hammond.png",
      author_name: "Timur Hammond",
      bio: "Timur Hammond is an Assistant Professor in the Department of Geography and the Environment at Syracuse University. Trained as a cultural and urban geographer, his research and teaching explore how people create meaningful worlds by encountering and transforming urban environments. His recently published book project, <i>Placing Islam: Geographies of Connection in 20th Century Istanbul</i>, develops this project through a geo-history of the neighborhood of Eyüp, home to one of Istanbul’s most important Muslim shrines. Other recent articles have examined the geographies of commemoration following Turkey’s July 2016 coup attempt and critically assessed the value of ‘regional’ frames for understanding heritage in the Middle East. At both the undergraduate and graduate level, his teaching examines the politics and practices of urban transformation, changing cultural forms in the city, and the complicated ways that religion and memory are woven into urban life."
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
              Other Routes of the Image: Looking at Rina Banerjee by Way of Istanbul
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/timur_hammond.png"width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Timur Hammond</span></div>
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
                    Introducing his research into the ‘image’ of American cities in the 1950s, Kevin Lynch wrote, “Looking at cities can give a special pleasure… At every instant, there is more than the eye can see, more than the ear can hear, a setting or a view waiting to be explored. Nothing is experienced by itself, but always in relation to its surroundings, the sequence of events leading up to it, the memory of past experiences… Every citizen has had long associations with some part of his city, and [their] image is soaked in memories and meanings.”<sup><Link href="#fn1" id="ref1" className="anchor">1</Link></sup>  Lynch was interested in the (in)coherence of cities’ images; a good city, he suggested, was an ‘imageable’ one, “invit[ing] the eye and the ear to greater attention and participation.”<sup><Link href="#fn2" id="ref2" className="anchor">2</Link></sup>  Lynch’s framework is not without its faults, of course, but I have often been reminded it of when returning to Istanbul for research and travel; now, reflecting on Rina Banerjee’s remarkable Take me, take me, take me… to the Palace of Love (2003), it comes to mind again (fig. 1).                
                </p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">Istanbul is many things to many people: It is a meeting of continents and seas; it is a city of winds that blow, the <i>lodos</i> from the south and the <i>poyraz</i> from the northeast; it is a city of hills and ridgelines; but perhaps most of all, it is&mdash;or was, until skyscrapers began to mushroom from the city’s districts&mdash;a city of mosques, their domes and minarets defining neighborhoods and ridgelines. While diverse, many of these mosques have a similar shape: There is a large central dome that sits over the main congregational space; depending on the size of the mosque, a series of semi-domes and arches will surround the main dome. A minaret&mdash;sometimes one, sometimes two, rarely four or even six&mdash;will flank the building. Even without knowing the history of this style, it is immediately recognizable as an ‘Ottoman’ mosque, closely identified with a history of Ottoman Istanbul.</p>
                <br />
                <p className="sm:indent-16">Yet this style&mdash;this image of a mosque&mdash;was not always so closely associated with the Ottoman Empire. It has as much to do with a Byzantine building, completed in 537 by the Byzantine emperor Justinian I and once the heart of Eastern Orthodox Christianity: The Hagia Sophia (fig. 2). When the Ottomans captured Constantinople in 1453, its leaders found themselves forced to develop a new architectural and monumental vocabulary, one that could place them as heirs to the city’s imperial traditions and aspirations and mark their Muslim empire as different than what came before. As the architectural historian Çiğdem Kafescioğlu described their project of making ‘Constantinople’ into ‘Istanbul,’ this project involved “the monumentalization of the city in an Ottoman idiom, through the creation of a network of significant buildings and sites… [For the empire’s rulers, the city was an image] that was to be reshaped, to become receptacle and signifier of a new political and cultural order.”<sup><Link href="#fn3" id="ref3" className="anchor">3</Link></sup>  The transformation of the Hagia Sophia into a mosque involved a number of transformations, including the building of minarets outside the building, the placement of a minbar (prayer pulpit) and mihrab (prayer niche) inside the building, the covering of the building’s mosaics, and the later addition of massive calligraphic roundels.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">Following the collapse of the Ottoman Empire and the declaration of the Turkish Republic in 1923, the building’s status (Was it an active mosque? A monument? A museum?) became a renewed object of debate. In November 1934&mdash;following a series of public discussion and private negotiation&mdash;the mosque was officially designated a museum, ending its religious use and providing as a highly visible marker of the new government’s secularizing and modernizing ambitions.<sup><Link href="#fn4" id="ref4" className="anchor">4</Link></sup>  In July 2020, the government&mdash;now led by President Recep Tayyip Erdoğan&mdash;formally changed the building’s status from a museum back to a mosque. What was once a destination for short-wearing tourists (many from Europe) has now become one of the city’s&mdash;if not Turkey’s&mdash;most well-known and well-attended congregational mosques. On Fridays, when congregational prayers take place, the square in front of the Hagia Sophia is often filled with long lines waiting to enter the new mosque. For the government, the building’s reconversion is one part of a much broader project to ground Turkey’s political and cultural identity in an unchanged Sunni Muslim essence. This is, to borrow a phrase I’ve used elsewhere, a way of place-making that relies on ‘core truths.’<sup><Link href="#fn5" id="ref5" className="anchor">5</Link></sup> </p>
                <br />
                <p className="sm:indent-16">A reflection on the Hagia Sophia might seem an odd digression for a discussion of Rina Banerjee’s ‘Pink Taj,’ but there are reasons that thinking the two buildings in conversation is valuable and urgent. I&mdash;like many of the people who’ve encountered Banerjee’s work&mdash;have never seen the Taj Mahal in person. I know it, of course, but only as an image (fig. 3).</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">I can close my eyes and see that oft-photographed view: The building itself seen from a distance, its inscriptions illegible, simply the curving white lines of its central dome; in front of the building, a long reflecting pool flanked by gardens aligns the viewer and the viewed object. It has a history, I’m sure, but not one that I need to know. It is exotic, wondrous, alluring, the visual reference for <i>Aladdin</i>. As a viewer based in the United States of America, the building itself is inseparable from the images which circulate about it, images that tend to heighten rather than collapse the distances and differences between me here and that place (and its people) in that place over there.</p>
                <br />
                <p className="sm:indent-16">Banerjee’s work at once plays with that image of the Taj and undercuts it. It is the image of the Taj, of course, but its materials pull from everywhere. There is plastic, an antique Anglo-Indian Bombay wood chair, steel and copper, floral picks, foam balls, cowry shells, quilting pins, red colored moss, an antique stone globe, glass, synthetic fabric, shells, and fake birds. Far from depending on a single core essence, Banerjee’s sculpture materializes what the geographer Doreen Massey once described as a ‘global sense of place,’ an “articulated [moment] in networks of social relations and understandings, but where a large proportion of those relations, experiences and understandings are constructed on a far larger scale than what we happen to define for that moment as the place itself.”<sup><Link href="#fn6" id="ref6" className="anchor">6</Link></sup>  In Massey’s version&mdash;and in the way that I encounter Banerjee’s work&mdash;there are no grounds for claiming a ‘pure’ sense of place. What we have instead is an outward looking sense of place and sense of self, where our ‘we’ is always being defined through uneven relations to other peoples, places, and times.</p>
                <br />
                <p className="sm:indent-16">As I looked at Banerjee’s sculpture, I wondered how the Hagia Sophia would look rendered in saran wrap and steel; a cluster of objects beneath it, prayer rugs and mosaics and cameras and tourist backpacks and prayer beads for good measure. Turkey’s ruling party would likely hate it, accuse it of violating ‘our identity and religion.’ Tourists looking for some pure vision of the Byzantine past also might dislike it, finding it hopeless kitschy or an example of bathos. Orthodox Christians might also object, finding it offensive or disrespectful to their faith as well. But I think there would be something compelling true about this sculpture&mdash;and something that gives Banerjee’s work its urgency. Our senses of who we are and where we belong are always and have always been articulated through references to an other, mediated through objects, peoples, and places that we find different than ourselves. When the Ottomans captured Constantinople in 1453, their architectural vernacular and its image of the city shifted as they made sense of being Ottoman in relation to this new capital. When I see Banerjee’s work, I am reminded of the way that the image of the Taj has circulated through so many different routes of desire. What happens when we give up our claims of control and purity? What does the image of that city look like? I’m not sure that there is a single answer and that may be precisely Banerjee’s point. Rather than close down debates about what a building is and should be, I take Banerjee’s work as an invitation to imagine more: More objects, more histories, more connections, and&mdash;just perhaps&mdash;more possibilities.</p>
                <br />
                <br />
                <p className="border-t border-[#d3d3d3] mb-4"></p>
                <sup id="fn1">
                  1. Kevin Lynch, <i>The Image of the City</i> (Cambridge, MA: The MIT Press, 1960), 1.
                  <Link href="#ref1" title="Jump back to footnote 1 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn2">
                  2. Ibid., p. 10.
                  <Link href="#ref2" title="Jump back to footnote 2 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn3">
                  3. Çiğdem Kafescioğlu, <i>Constantinopolis/Istanbul: cultural encounter, imperial vision, and the construction of the Ottoman capital</i> (University Park, PA: Pennsylvania State University Press, 2009), 130.
                  <Link href="#ref3" title="Jump back to footnote 3 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn4">
                  4. Edhem Eldem provides a useful history of this process in Eldem, “The Reconversion of the Hagia Sophia into a Mosque: A Historian's Perspective,” <i>Journal of the Ottoman and Turkish Studies Association</i> 8, no. 1 (2021): 243-60.
                  <Link href="#ref4" title="Jump back to footnote 4 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn3">
                  5. Timur Hammond, <i>Placing Islam: Geographies of Connection in 20th Century Istanbul</i> (Berkeley, CA: University of California Press, 2023), 3-5.
                  <Link href="#ref5" title="Jump back to footnote 5 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn3">
                  6. Doreen Massey, <i>Space, Place, and Gender</i> (Minneapolis: University of Minnesota Press, 1994), 154.
                  <Link href="#ref6" title="Jump back to footnote 6 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
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
                  <Link href="/works/mermaid-thoughts"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Mermaid Thoughts</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/reflection-take-me-to-the-palace-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Reflection: <i>Take Me to the Palace of Love</i></div>
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