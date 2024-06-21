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
    href: "/images/works/tell-me-whom-you-love/fig1.jpg", 
    title: "",
    description: "Fig. 1. Rina Banerjee, <i>Viola, from New Orleans…</i>, 2017. Murano glass horns, Indian rakes, seed beads, steel, Yoruba African mask, oyster shells, cowrie shells, Charlotte dolls, polyester horse hair trim, Korean silks, Indian silks, vintage Kashmir shawls, French wire ferris wheel, Congolese elbow bangles, colonial mirror sconces, Japanese seed glass beads, sequins, threads. Courtesy of the Pennsylvania Academy of the Fine Art, Philadelphia. Museum Purchase, 2017.53. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery2 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig2.jpg", 
    title: "",
    description: "Fig. 2. Viola Ida Lewis.",
  },
];

const gallery3 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig3.jpg", 
    title: "",
    description: "Fig. 3. Joseph Abdin.",
  },
];

const gallery4 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig4.jpg", 
    title: "",
    description: "Fig. 4. Rina Banerjee, detail, <i>Viola, from New Orleans…</i>, 2017. Courtesy of the Pennsylvania Academy of the Fine Art, Philadelphia. Museum Purchase, 2017.53. Photograph courtesy of Syracuse University Art Museum.",
  },
];

const gallery5 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig5.jpg", 
    title: "",
    description: "Fig. 5. Sophie Lewis Broninlnam, Viola’s mother.",
  },
];

const gallery6 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig6.jpg", 
    title: "",
    description: "Fig. 6. Viola Ida Lewis.",
  },
];

const gallery7 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig7.jpg", 
    title: "",
    description: "Fig. 7. Viola Ida Lewis.",
  },
];

const gallery8 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig8.jpg", 
    title: "",
    description: "Fig. 8. Ali Joseph Abdin, Viola’s son.",
  },
];

const gallery9 = [
  {
    href: "/images/works/tell-me-whom-you-love/fig9.jpg", 
    title: "",
    description: "Fig. 9. Angela Abdin, Viola’s daughter.",
  },
];

export default function WhomYouLoveEssay() {
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
      author_headshot: "/images/headshots/joan_bryant.png",
      author_name: "Joan Bryant",
      bio: "Joan Bryant is Associate Professor in African American Studies at Syracuse University.  Her teaching and research foci include early African American history, African American women’s history, and American religious history. She is the author of the forthcoming book, <i>Reluctant Race Men: Black Challenges to the Practice of Race in Nineteenth-Century America</i>, (Oxford University Press, February 2024)."
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
              “Tell Me Whom You Love”: ‘Mixed’ Marriage & Racial Mutability
            </h1>
            
            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/joan_bryant.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Joan Bryant</span></div>
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
                  Indian peddlers and seamen who migrated to the United States during the 1890s and the early decades of the twentieth century frame Rina Banerjee’s <i>Viola, from New Orleans</i> (2017) (fig.1). The Bengali men who initially made this journey established themselves by supplying American consumers with “Oriental” wares&mdash;silks, curios, perfumes, and rugs.<sup><Link href="#fn1" id="ref1" className="anchor">1</Link></sup>  The <i>Viola</i> sculpture gestures toward personal relationships the men forged. It takes its inspiration from “mixed” marriages between Bengali peddlers in segregated southern cities and African American women. The phenomenon and the art it inspired invite reflections on the unstable character of racial designations. They spark questions about the meanings of interracial intimacies made public through marriage in a society that used race classifications to structure inequality.
                </p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery1} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">Banerjee’s work reflects on one relationship&mdash;the union of twenty-two-year-old Viola Ida Lewis, a woman of African descent, and Joseph Abdin (figs. 2 and 3). The couple married in 1906, two years after the forty-five-year-old Bengali native reached the United States.<sup><Link href="#fn2" id="ref2" className="anchor">2</Link></sup>  Banerjee’s imagined Viola is awkward. The figure appears to have been rendered grotesque by her associations with immigrants. Tokens of her connections&mdash;a Yoruba mask, Indian rakes and silks, cowrie shells, and Italian glass horns extending like elephant tusks&mdash;are attached to her. Indeed, they constitute her body as if to display the profound impact of “making home for aliens” on her identity. The ungainly form makes one wonder whether the relationships she developed were so unnatural that sustaining them deformed her.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery2} />
                  </div>  
                </div>

                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery3} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">The work’s long title expands and complicates Viola’s identity. While acknowledging New Orleans as her home, it peremptorily declares her “African.” The label is perhaps an ancestral justification for the mask that represents her face (fig. 4). Yet, it also seems to explain her alliances. As a timeless African, the Mississippi native might comfortably relate to the immigrants she engaged. The narrative alludes to possible memories of slavery as it describes Viola’s empathy for Bengali men transported to American shores. Surely, she was mindful of their suffering, “how they been also starved, fled from servitude and colonial dangers, ships like dungeons.”</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[100%]">
                      <GlightboxDemo galleryItems={gallery4} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">Artistic interpretations of Viola’s identity provide bases for broader reflections on the racial landscape she faced. Sources documenting her identity illuminate “racial disguises” Banerjee references and constructs. They reveal efforts to define Viola and her family in the context of marriages that “told” of their intimate associations. Against the backdrop of Banerjee’s imagination, the identities embedded in historical records give another perspective on the Creole saying, “Tell me whom you love, and I’ll tell you who you are.”</p>
                <br />
                <p className="sm:indent-16">Racial change accompanied Viola and Joseph’s marriage. By 1910, they had a young son and infant daughter, and Joseph, a peddler of “Oriental Goods” in New Orleans, was the named head of Viola’s extended family. Her mother Sophie, a possible step-sister with four children, and a grand-niece were part of the household. Viola and Joseph’s racial identities fused under this living arrangement. The census enumerator designated him “Mulatto,” along with everyone else in the household, except Sophie, who was labeled “Black” (fig. 5). The census taker documented Joseph’s birthplace as “India-Hindi,” but the bureau’s forms contained no coherent way to match his origins with official definitions of “color or race.” Enumerators had the option of listing individuals as “Other,” but Joseph’s relationships perhaps sufficed as grounds for numbering him among “persons having some proportion or perceptible trace of negro blood.” The family’s neighbor Sing Lee, a seller of “Chinese goods” who was also married to a Mulatto woman, avoided the transformation Joseph experienced. Concerted government efforts to block, regulate, and monitor immigration from China made “Chinese” a discrete “color or race” that census takers could document.<sup><Link href="#fn3" id="ref3" className="anchor">3</Link></sup></p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery5} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">“Mixed” marriage did not alter the official power of “Negro blood” in Viola’s veins. Government constructs changed her racial status. Viola was Black in 1900, when she lived with two sisters and her mother&mdash;also Black&mdash;in a household headed by her White, German-born step-father, Ato Broninlman (fig. 6). The census would have counted her as Black even if Broninlman had been her biological father because the label signified “negro or negro descent.” (emphasis added) Blood quanta and appearance did not matter.<sup><Link href="#fn4" id="ref4" className="anchor">4</Link></sup>  The stability of her mother’s racial classification across census counts highlights the importance of perception. The census enumerator in 1910 made the decision that nothing other than “Negro blood” could account for her appearance. The transformation of Viola’s racial designation and the persistence of her mother’s classification signal variable ways that race categories invent identities they purport to merely document.</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery6} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">Although Viola and Joseph remained married until Joseph died in 1938, at times spatial distance accompanied the constructions of racial difference that shaped the social milieu they inhabited. In 1930, Joseph, no longer a peddler or head of his family household, presided over a home of Bengali men. Like him, three lodgers in the house he rented were married and identified as perfume salesmen. This arrangement could have been solely for business purposes, as Viola lived with two of the couple’s children in a nearby neighborhood. Her rented home was on a street located just two blocks from his street. She was head of the family household and reported being married.</p>
                <br />
                <p className="sm:indent-16">Changes in the spouses’ racial identities at this time were concrete; however, the basis for Joseph’s designation is unclear. He and Viola no longer occupied the same census racial group as they had done in 1910. He had become White, a category he shared with his lodgers. The new classification sharply distinguished him from his predominantly Negro neighbors. It was also at odds with changes that accompanied government prohibitions on Indian immigration and the 1923 Supreme Court decision in <i>United States v. Bhagat Singh Thind</i>, which ruled that East Indians were not “free white persons” eligible for citizenship. In keeping with the legal determination that constituted the population as racially different from White American citizens, the Census Bureau created “Hindu” as a race category. Accordingly, there was no basis for making Joseph White. In contrast, the change in Viola’s classification conformed to hardening notions of difference and hierarchy that facilitated Jim Crow discrimination against people of African descent. The removal of the Mulatto category from the census made her and the Abdin children Negroes (figs. 7, 8, 9).<sup><Link href="#fn5" id="ref5" className="anchor">5</Link></sup>  The “one-drop” rule again prevailed. Black African ancestry was the factor that mattered to the state and perhaps to Banerjee in crafting “racial disguises.”</p>
                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery7} />
                  </div>  
                </div>

                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery8} />
                  </div>  
                </div>

                <br />
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="w-[70%]">
                      <GlightboxDemo galleryItems={gallery9} />
                  </div>  
                </div>

                <br />
                <p className="sm:indent-16">In the spring of 1940, a census taker again assigned the “Negro” designation to Viola and her adult sons. However, the young men’s identities changed in the fall of that year, when they registered for the World War II draft. The older son, Ali Joseph Abdin, who was officially determined to possess a “Light” complexion, followed his father into the White race, at least for military purposes. On the same day, his “Dark brown” younger brother, John Adams Abdin, registered his race as White and Indian.<sup><Link href="#fn6" id="ref6" className="anchor">6</Link></sup>  The brothers’ new classifications, codified by military registrars, marked the continuation of racial mazes Viola, Joseph and untold immigrants and native-born Americans have confronted on a social and political landscape defined and scarred by precarious structures of human difference and rank.</p>
                <br />
                <p>Banerjee’s construction is an apt symbol of the convoluted social networks Viola Lewis Abdin navigated in her lifetime. The <i>Viola</i> statue has parachuted to a landing on a sandy foundation. Its instability does not result from the fact that the muse “welcomed and married immigrants from far.” American racial taxonomies rendered the terrain unstable for Viola, Joseph, and their children.</p>
                <br />
                <br />
                <p className="border-t border-[#dadada] mb-4"></p>
                <sup id="fn1">
                  1. For a history of these early Bengali immigrants and relationships they developed, see Vivek Bald, <i>Bengali Harlem and the Lost Histories of South Asian America</i> (Cambridge: Harvard University Press, 2013).
                  <Link href="#ref1" title="Jump back to footnote 1 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn2">
                  2. New Orleans, Louisiana, U.S., Marriage Records Index, 1831-1964. Ancestry.com; Fifteenth Census of the  United States,1930: Population Schedule, New Orleans. Ancestry.com.
                  <Link href="#ref2" title="Jump back to footnote 2 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn3">
                  3. Thirteenth Census of the United States,1910: Population Schedule, New Orleans. Ancestry.com; <a href="https://www.census.gov/programs-surveys/decennial-census/technical-documentation/questionnaires/1910/1910-instructions.html" target="_blank">“1910 Census Instructions to Enumerators,”</a> United States Census Bureau. The scan of the original census schedule appears to label Joseph as “Mex,” for Mexican, which was not an official census classification that year. The transcription lists him as “Mulatto.”
                  <Link href="#ref3" title="Jump back to footnote 3 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn4">
                  4. Twelfth Census of the United States,1900: Schedule No. 1 - Population, New Orleans. Ancestry.com; <a href="https://www.census.gov/programs-surveys/decennial-census/technical-documentation/questionnaires/1900/1900-instructions.html" target="_blank">1900 Census Instructions to Enumerators</a>.
                  <Link href="#ref4" title="Jump back to footnote 4 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn5">
                  5. Fifteenth Census of the United States,1930: Population Schedule, New Orleans. Ancestry.com; <i>United States v. Bhagat Singh Thind</i>, 261 U. S. 204 (1923); <a href="https://www.census.gov/history/www/through_the_decades/index_of_questions/1930_1.html" target="_blank">United States Census, History, 1930</a>. See Ian Haney-Lopez, <i>White by Law: The Legal Construction of Race</i> NY: New York University Press, 1996, pp. 61-62; Balk, <i>Bengali Harlem</i>, p. 2; Melissa Nobles, <i>Shades of Citizenship: Race and the Census in Modern Politics</i> (Stanford: Stanford University Press, 2000) pp. 69-73.
                  <Link href="#ref5" title="Jump back to footnote 5 in the text."><TbArrowBack size={14} className="inline mb-2"/></Link>
                </sup>
                <br />
                <sup id="fn6">
                  6. Sixteenth Census of the United States,1940: Population Schedule, New Orleans. Ancestry.com; Ali Joseph Abdin, Registration Card D.S.S. Form 1, October 16, 1940. Ancestry.com; John Adams Abdin, Registration Card D.S.S. Form 1, October 16, 1940. Ancestry.com.
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
                  <Link href="/works/teaching-arts-resistance-curriculum-of-love"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">“Take Me to the Palace of Love”: Teaching Out Loud about the Arts, Resistance and the Curriculum of Love</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex flex-col">
                {/* <p className="font-lato text-right text-sm text-[rgb(190,58,59)] md:mr-14">NEXT ESSAY</p>
                <div className="flex gap-1 items-center justify-end">
                  <Link href="/works/"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2"></div>
                  </Link>
                  <div className="hidden md:block"><BsChevronCompactRight size={50} color="#be3a3b" /></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}