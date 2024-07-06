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
    href: "/images/works/a-world-lost-climate-policy-art/fig1.jpg", 
    title: "",
    description: "Fig. 1. Rina Banerjee, <i>A World Lost</i>, 2013. Black synthetic horns, wire, netting, lightbulbs, scale, ostrich eggs, textiles, cowrie shells, pebbles, coins, feathers, fish vertebrae, greenery, coral, glass birds, miniature human and animal figurines, plastic cups, and red thread. Syracuse University Art Museum. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery2 = [
  {
    href: "/images/works/a-world-lost-climate-policy-art/fig2.jpg", 
    title: "",
    description: "Fig. 2. Rina Banerjee, detail, <i>A World Lost</i>, 2013. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery3 = [
  {
    href: "/images/works/a-world-lost-climate-policy-art/fig3.jpg", 
    title: "",
    description: "Fig. 3. Rina Banerjee, detail, <i>A World Lost</i>, 2013. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.",
  },
];

export default function WorldLostEssay() {  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleLinkClick = () => {
    // Set the data to be passed to the modal
    setModalData({
      author_headshot: "/images/headshots/david_driesen.png",
      author_name: "David M. Driesen",
      bio: "Professor David M. Driesen, University Professor at the College of Law, focuses on constitutional law, law and economics, and environmental law. Professor Driesen has written four books: <a href='https://www.amazon.com/Specter-Dictatorship-Judicial-Enabling-Presidential/dp/1503628612' target='_blank'><i>The Specter of Dictatorship: Judicial Enabling of Presidential Power</i></a> (Stanford University Press), <a href='https://www.amazon.com/The-Economic-Dynamics-David-Driesen/dp/1107004853/ref%3Dsr_1_1?ie=UTF8&amp%3Bqid=1341231977&amp%3Bsr=8-1&amp%3Bkeywords=the%2Beconomic%2Bdynamics%2Bof%2Blaw' target='_blank'><i>The Economic Dynamics of Law</i></a> (Cambridge University Press), the textbook <a href='https://www.amazon.com/Environmental-Law-Conceptual-Pragmatic-Approach/dp/145487001X' target='_blank'><i>Environmental Law: A Conceptual and Pragmatic Approach</i></a> (Aspen Kluwer with Robert Adler and Kirsten Engel) and <a href='https://www.amazon.com/Economic-Dynamics-Environmental-Law/dp/0262541394' target='_blank'><i>The Economic Dynamics of Environmental Law</i></a> (MIT Press), which won the Lynton Keith Caldwell Award—a prize offered by The American Political Science Association annually for the best book published in science, technology, and environmental studies. He has also published two edited volumes, <a href='https://www.amazon.com/Beyond-Environmental-Law-Policy-Proposals/dp/0521744326' target='_blank'><i>Beyond Environmental Law: Policy Proposals for a Better Environmental Future</i></a> (Cambridge University Press with Alyson Flournoy) and <a href='https://mitpress.mit.edu/?q=books%2Feconomic-thought-and-us-climate-change-policy' target='_blank'><i>Economic Thought and U.S. Climate Change Policy</i></a> (MIT Press). He has published numerous articles with leading journals, such as <i>Cornell Law Review</i>, <i>Fordham Law Review</i>, <i>Ecology Law Quarterly</i>, <i>Harvard Environmental Law Review</i>, and the <i>Virginia Journal of International Law</i>, <i>Emory Law Journal</i>, and several book chapters. <br /><br />Driesen engages in public service defending democracy, environmental law’s constitutionality and efforts to combat the climate crisis. He has written numerous amicus briefs in Supreme Court cases and has <a href='https://law.syracuse.edu/wp-content/uploads/Amicus_Brief_of_Senators_and_Clean_Air_Trust.pdf' target='_blank'>represented Senators Hillary Clinton and others in Clean Air Act litigation in the DC Circuit</a>. He is a member scholar with the Center for Progressive Reform (CPR), and blogs often on climate disruption issues for CPR and for RegBlog. He has worked as a consultant for American rivers and other environmental groups on Clean Water Act issues and has testified before Congress on implementation of the 1990 Clean Air Act Amendments. <br /><br />Professor Driesen was a Senior Project Attorney for The Natural Resources Defense Council, in its Air and Energy Program. Before that, he clerked for Justice Robert Utter of the Washington State Supreme Court and worked in the Special Litigation Division of the Washington State Attorney General’s Office. <br /><br />Driesen joined the College of Law faculty in 1995. He was the Distinguished Summer Scholar in 2008 at Vermont Law School and a Visiting Professor at the University of Michigan Law School in 2006. <br /><br />Driesen holds a J.D. from the Yale Law School, a Master of Music from the Yale School of Music, and a Bachelor of Music from the Oberlin Conservatory. Currently, Professor Driesen performs with the <a href='http://excelsiorcornetband.com/Excelsior_Cornet_band/Home.html' target='_blank'>Excelsior Cornet Band</a> and the <a href='https://subrass.syr.edu' target='_blank'>Syracuse University Brass Ensemble</a>."
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
              “A World Lost”: Climate, Policy, and Art
            </h1>

            <div className="sm:sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/david_driesen.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>David M. Driesen</span></div>
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
                  <i>A World Lost</i> (2013) offers a fascinating and absorbing, albeit deeply troubling, picture of the climate crisis (fig. 1). As an academic lawyer, I tend to focus on actions designed to “mitigate” climate disruption, such as policies to reduce fossil fuel use (which reduce greenhouse gas emissions). At the same time, when I write or teach about this subject, I have to try to do something analogous to what Rina Banerjee does in <i>A World Lost</i>, paint a picture of what climate disruption is all about. In this essay, I want to contrast the perspective of <i>A World Lost</i> with the perspective I am accustomed to, as a way of capturing some of what is so intriguing about this installation.</p>
                <br />
                <p className="sm:indent-16">First of all, there is the matter of temporal perspective. The science that policymakers focus on the most is future oriented. It aims to predict the types and magnitudes of consequences that might occur if global warming continues unabated. It is based on observations of the past (data), but the data is then assembled into computer models that have equations embodying what we might know about interrelationships between warming and the behavior of earth systems. The models then make future predictions about the type and extent of consequences of continued warming. Policy experts’ work also looks forward, proposing measures now that can have an impact in ameliorating the climate crisis going froward. My own work focuses a lot on economic incentive schemes, such as emissions trading.</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16"><i>A World Lost</i> has a very different perspective. The installation depicts a future after much of the world we know is gone. It looks back on the present (or at least the near future) from a future radically disrupted by a climate crisis. From that perspective, I found the slow rotation of the upper part of the piece particularly moving (fig. 2). It seemed to depict the aftermath of some terrible violence to the earth, as if the earth itself was left to slowly twist in the wind.</p>
                <br />
                <p className="sm:indent-16">Then comes the problem of selection. Global climate disruption is a multifaceted phenomenon. When I first began teaching this in the 1990s, practically all my colleagues would speak of different new revelations in the scientific literature regarding the likely effects of climate disruption when we met. Global warming was, and remains, dizzying in the breadth and sheer numerosity of its consequences. The litany in my articles usually mentions floods and inundation of coastal areas, the spread of infectious disease, widespread drought, species loss and heat waves. But that description leaves out a lot. Scientists tend to solve the description problem by trying to comprehensively list all of the facts, which makes the subject overwhelming and incomprehensible to most people. Economists solve this by reducing as many of the consequences as possible into dollar terms, an approach that proves deeply misguided, as the most important aspects of the problem resist valuation in those terms.</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16"><i>A World Lost</i>, at least in its Syracuse incarnation, focuses heavily on the problem of sea level rise. It has seashells arranged along the periphery, but one has the impression that the sea has taken over and overwhelmed everything else (fig. 3). Sea level rise is one of the most central and certain consequences of global warming, caused by both melting ice caps and the thermal expansion of the ocean. Depicting it visually or describing what it means is hard. First of all, eventually it can simply mean that coastal cities go underwater. But in the meantime, one sees things like intense flooding after hurricanes pass through, the sidewalks of Fort Lauderdale being inundated almost all of the time, not just after heavy rains, and beaches slowly disappearing. <i>A World Lost</i> depicts sea level rise mainly be the use of negative space leaving a remnant of something that resembles land surrounded by an advanced sea.</p>
                <br />
                
                <div className="flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">It’s a very rich exhibition and I can’t reduce it to a set of consequences depicted. I found myself seeing more things in it every time I looked. It includes burned out light bulbs suggesting the origins of the crisis in the generation of electricity. Ultimately, I hope it enables viewers to feel the immensity of the climate crisis.</p>
                <br />
                <p className="sm:indent-16">But for all of that horror, the piece has a kind of beauty. Its elements have a weird sort of balance to them that draws one in and makes one want to look, not look away. <i>A World Lost</i> can help viewers understand and care about the climate crisis, which is what the world needs right now.</p>
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
                  <Link href="/works/whats-love-got-to-do-with-it"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">What’s Love Got to Do With It?</div>
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