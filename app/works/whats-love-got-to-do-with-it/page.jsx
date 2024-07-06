'use client';
import { useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import SocialIcons from "../../components/Socialicons";
import Image from 'next/image';
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import GlightboxDemo from "../../components/GlightboxDemo";

const gallery1 = [
  {
    href: "/images/works/whats-love-got-to-do-with-it/fig1.jpg",
    title: "",
    description: "Fig. 1.",
  },
];

export default function LoveGotToDoEssay() {  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/romita_ray.png",
      author_name: "Romita Ray",
      bio: "Romita Ray is associate professor of art history at Syracuse University where she teaches European and Indian art. Her area of research is the art and architecture of the British empire in India on which she has published widely. The author of <i>Under the Banyan Tree: Relocating the Picturesque in British India</i> (Yale University Press 2013), Ray is currently working on a book manuscript about the visual cultures of tea in India tentatively titled, <i>Leafy Wonders: Art, Aesthetics, and the Science of Tea in India</i>. Together with Dr. Jos Hackforth-Jones, she is also editing a multi-volume project for Routledge on art, architecture, material culture, and early cinema in the British empire forthcoming in 2022."
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
              What’s Love Got to Do With It?
            </h1>

            <div className="sm:sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/romita_ray.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Romita Ray</span></div>
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
                  Curating <i>Take Me to the Palace of Love</i> was a labor of love. It was also a collaboration, an experiment, and a community engagement that began with Rina Banerjee, whose thought-provoking and spectacular installations and drawings invited us into the intertwined worlds of art, science, and engineering.</p>
                <br />
                <br />

                <div className="mt-4 px-5 ">
                  <div className="flex items-center relative" style={{ width: '100%', paddingBottom: '100%' }}>
                    <iframe
                      src="https://player.vimeo.com/video/788124215?h=2385f746e1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      title="Installation of Take Me to the Palace of Love Time Lapse"
                    ></iframe>
                  </div>
                  <p className="mt-1 text-xs text-left">Time-lapse video of installing <i>Take Me to the Palace of Love</i>, January 2023</p>
                </div>


                <br />
                <br />
                <p className="sm:indent-16">The idea to organize <i>Take Me to the Palace of Love</i> grew out of numerous, rambling exchanges about life, art, love, loss, memory, and identity with Rina, who I had known since our student days at Yale. It finally came to fruition during the COVID-19 pandemic when Rina was invited to be in residence at Syracuse University as the Jeanette F. Watson Distinguished Professorship in the Humanities. Following in the footsteps of luminaries such as Noam Chomsky and Margaret Atwood, among others, who had held this prestigious professorship, Rina was now a part of a rich legacy of public humanities in Syracuse. She also brought something unique to her residency: the opportunity to organize an exhibition of her work at the Syracuse University Art Museum.</p>
                <br />
                <p className="sm:indent-16">With Vanja Malloy, the museum’s director; Vivian May, director of the Syracuse University Humanities Center; and Brice Nordquist, Dean’s Professor of Community Engagement in the College of Arts and Sciences, the kernel of an idea grew into something much larger than we had anticipated. Rina’s striking “Take Me, Take Me, Take Me…to the Palace of Love” (2003), affectionately dubbed the “pink Taj,” would be the focal point of the exhibition. “A Lost World…” (2013) and “Viola, from New Orleans…” (2017), two other installations by her would round off the exhibition and draw us into the environmental humanities and race relations&mdash;subjects never far from our minds during a pandemic that saw a virus unleash havoc and the Black Lives Matter movement sweep across the United States.</p>
                <br />
                <p className="sm:indent-16">The exhibition evolved when, quarantined at home and cut off from the world, we had turned to our digital screens to hold on to loved ones, reconnect with friends and family, connect with strangers on zoom, and dream about post-pandemic futures. What might an exhibition that emerged from such an era look like? What work could it do to repair the fractures and disruptions in our lives? The “heart’s memory eliminates the bad and magnifies the good,” writes Gabriel Garcia Márquez in <i>Love in the Time of Cholera</i> (1988), “and thanks to this artifice, we manage to endure the burden of the past.”</p>
                <br />
                <p className="sm:indent-16">A “floating pink tent” inspired by the Taj Mahal, as one of my students described it, “Take Me, Take Me, Take Me…to the Palace of Love” was key to conceptualizing the exhibition as a tribute to love whose nourishing power was badly needed in a world shaken by an invisible virus. So emerged <i>Take Me to the Palace of Love</i> as the title of the exhibition. Could we envision an art exhibition as a “palace of love”? How about the museum?</p>
                <br />
                <p className="sm:indent-16">While the “pink Taj” may invoke an architectural wonder famously built by a Mughal emperor to commemorate a beloved wife, love also wove its way through the other installations. “Viola” drew our attention to the love between an African American woman and a Bengali merchant whose personal, albeit fragmentary histories had been salvaged from archives and family memories. “A World Lost” exposed the detritus of an unloved world created by Hurricane Sandy that in 2012, had left a trail of destruction in its wake. Into this mix, we decided to add Rina’s drawings that urged us to reimagine a quotidian world where vegetal and human worlds merged and where multi-armed goddesses and angels flew and frolicked. To complement these and her sculptural installations, we drew upon our museum collections to select works that had never been seen together; some had never been displayed: Mithila paintings curated by Ankush Arora, my graduate student advisee, as an homage to Rina’s Indian heritage; a Hudson River School painting by William Sonntag to remind us of the awesome power of water; and a Bundu mask for a Mende initiation rite for women in Sierra Leone that held the secrets of ritual, among many other art works. Objects have a way of reaching into us, to touch our emotions, moods, and dreams. Engaging with them means looking within ourselves and thinking through&mdash;and with&mdash;the lives and histories of others. Perhaps this is what love means? The ability to go beyond ourselves, to understand that we are entangled with each other in what Nobel Prize-winning writer Rabindranath Tagore once called “the heart of creation.”</p>
                <br />
                <p className="sm:indent-16">Love can be hard earned. Not everyone was enamored of the exhibition, at first. The university’s risk management team balked at the prospect of hanging a large plastic installation from the museum’s ceiling. Others, confronted with the bric-a-brac of Rina’s sculptures, found themselves questioning what art is. Remarkably, they all came around to appreciate the lively imagination and skillful dexterity behind Rina’s work. There were others who were enthusiastic from the start: an acclaimed physicist who marveled at her ability to work with gravity. A Family Studies scholar for whom Rina’s generous splashes of bright pink brought home a flood of childhood memories of playing Holi, the festival of color in India. A student, struck by Rina’s use of diverse materials, was reminded of the excesses of capitalism rooted in the global trade networks of European empires. As an art historian, I was keenly aware of Rina’s dual heritage (Indian and American) in her work, her drawings and installations moving between visual and material registers that emerged from and participated in complex and highly personal experiences of identity and belonging.</p>
                <br />
                <p className="sm:indent-16"><i>Take Me to the Palace of Love</i> was rooted in our desire to connect with each other and in our ability to build together in an era that will be forever etched in our memories. By the time the exhibition opened on January 19, 2023, we were slowly limping back to some semblance of normalcy. It had taken generosity, collaboration, and team work to build and act upon a shared vision. Who were the hidden voices, minds, and hands behind the exhibition?</p>
                <br />
                <p className="sm:indent-16">Vanja Malloy, Emily Dittman, Melissa Yuen, Kate Holohan, Jennifer (Jen) Badua, Victoria Gray, Abigail (Abby) Campanaro, Dylan Otts, Samaya Nasr, Julia Neufeld, and Lily LaGrange at the Syracuse University Art Museum; Joan Bryant in African American Studies; Doug Armstrong and Christopher DeCorse in Anthropology; Amanda Eubanks Winkler, Sascha Scott, Ruth Opara, Sam Johnson, Ankush Arora, Elizabeth Buchanan, and Bill Bowen in the Art and Music Histories; Tim Korter and Matthew Maye in Chemistry; Vivian May and the CNY Humanities Corridor; Deans Karin Ruhlandt, Lois Agnew, Gerry Greenberg, and Alan Middleton in the College of Arts and Sciences; Dean Craig Boise and David Driesen in the College of Law; Tanisha Jackson in the Community Folk Art Center; George Kallander in the East Asia Program; Jeff Karson in Earth and Environmental Sciences; Brice Nordquist in the Engaged Humanities Network; Mike Goode and Coran Klaver in English; Thomas Perrault and Timur Hammond in Geography; Eric Grode and Natalie Rieth in the Goldring Arts Journalism and Communications Program; Dean Brian Konkol and Pastor Gail Riina in Hendricks Chapel; Susan Branson, Junko Takeda, and Radha Kumar in History; Sandra Hewett in the Interdisciplinary Neuroscience Program; Dean David Van Slyke in the Maxwell School of Citizenship and Public Affairs; Andrew Saluti in Museum Studies; Mary Grace Almandrez in the Office of Diversity and Inclusion; Duncan Brown and Ramesh Raina in the Office of Research; Marcelle Haddix in the Office of Strategic Initiatives, Academic Affairs; Danielle Smith in the Renée Crown University Honors Program; Dean Michael Speaks and Lawrence Chua in the School of Architecture; Srivi Ramasubramanian and Tula Goenka in the S.I. Newhouse School of Public Communications; Patrick Berry and Kira Reed in the Social Differences, Social Justice Research Cluster; Prema Kurien and Matthew Baxter in the South Asia Center; Nicolette Dobrowolski, Courtney Hicks, and Jana Rosinski in the Special Collections Research Center; Vivian May, Diane Drake, and Miguel Rodriguez in the Syracuse University Humanities Center; The Lender Center for Social Justice; Mike Goode, William P. Tolley Distinguished Teaching Professor in the Humanities; Shobha Bhatia and Sharon Alestalo in Women in Science and Engineering (WiSE); Himika Bhattacharya in Women’s and Gender Studies, and Patrick Berry in Writing Studies, Rhetoric, and Composition. Heartfelt thanks to Syracuse University alumnus Todd Rubin (’04) and The Republic of Tea for sponsoring delicious tea throughout Rina’s residency and to Susan Wadley (Professor Emeritus, Anthropology) for her unwavering support. And special thanks to all the faculty, staff, students at the university, Syracuse community members, and participants from neighboring colleges, schools, and universities, who came together for <i>Take Me to the Palace of Love</i>.</p>
                <br />
                <p className="sm:indent-16">Finally, thank you to Rina Banerjee for her creative spirit, innovative ideas, and dazzling work that made it possible to organize <i>Take Me to the Palace of Love</i>.</p>
                <br />
                <p className="sm:indent-16">More than 5,000 visitors attended the exhibition and its events. In April 2024, <i>Take Me to the Palace of Love</i> was recognized by the Museum Association of New York (MANY) with an Award of Distinction in the “Engaging Communities” category.</p>
                <br />
                <br />
                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
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
                {/* <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS ESSAY</p>
                <div className="flex gap-1 items-center justify-start">
                <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href="/works/"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2"></div>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/a-world-lost-climate-policy-art"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">“A World Lost”: Climate, Policy, and Art</div>
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