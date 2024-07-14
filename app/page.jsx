'use client';
import Image from "next/image";
import Articles from "./components/Articles";

const gallery1 = [
  {
    href: "/images/rina_viola.jpg",
    title: "",
    description: "",
  },
];

export default function HomePage() {
  return (
    <>
      <main>
      {/* Hero section */}
      <section className="h-screen bg-center bg-cover bg-blend-overlay bg-black/20 bgimg relative">
          <div className="h-full flex flex-col justify-between">
            {/* Top content (centered) */}
            <div className="flex-grow flex items-center justify-center text-white text-center">
              <div>
                <h1 className="font-italiana font-extralight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Reflections on
                </h1>
                <h1 className="pt-2 font-italiana font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                  <em>Take Me to the Palace of Love</em>
                </h1>
              </div>
            </div>

            {/* Bottom content (centered) */}
            <div className="pb-12 md:pb-32 text-center inline-block text-white">
              <p className="font-italiana font-extralight text-xl md:text-2xl">
                Syracuse University Art Museum
              </p>
              <p className="font-italiana font-extralight text-xl md:text-2xl">
                (January 19-May 14, 2023)
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <div className="grid grid-cols-8 bg-[rgb(253,249,249)] mb-6 p-8">
        <div></div>
        <div className="mb-6 md:col-span-6 col-span-8">
          <div>
            <p className="text-lg md:text-justify text-zinc-800 leading-8 tracking-wide sm:px-8 pb-8">
              Can we rescue love? This fundamental question underscored <i>Take Me to the Palace of Love</i>, an
              exhibition of acclaimed artist-engineer Rina Banerjee’s sculpture and drawings that took place at the Syracuse
              University Art Museum in Syracuse, New York (January 19 – May 14, 2023). Curated during a global pandemic, it
              invited the public to reflect on our place in the world and on the impact of human interventions in nature.
              It urged us to refresh our lost bonds. Three critical art installations by Banerjee shaped the core of the exhibition:
              “Take Me, Take Me…to the Palace of Love” (2003) (after which the exhibition was named), “A World Lost…” (2013),
              and “Viola, from New Orleans-“ (2017). Together with a selection of the artist’s drawings, these thought-provoking
              works of art were displayed alongside the museum’s collection of Mithila paintings,
              African masks, Indian sculpture, American paintings and prints, and historic photographs
              of Mughal architecture. Rare books from the Syracuse University Libraries; an intricately carved chair
              designed by Lockwood de Forest from the Munson; and a
              colonial era photograph of the Taj Mahal loaned by the Herbert F. Johnson Museum of Art at Cornell University,
              rounded off the exhibition. A series of public conversations, events, and lectures inspired by critical issues
              addressed by Banerjee and more broadly, by the exhibition, drew out the complexities of the theme of “love.”
              Designed as a post-exhibition catalogue, this website brings together those responses. We invite you to browse
              the videos, essays, and poems that focus on different aspects of Banerjee’s visual repertoire and
              on curating and installing the exhibition.
            </p>
            <p className="text-lg md:text-justify text-zinc-800 leading-8 tracking-wide sm:px-8 pb-8">
              In April 2024, <i>Take Me to the Palace of Love</i> was recognized by the Museum Association of New York
              (MANY) with an Award of Distinction in the “Engaging Communities” category. More than 5,000 visitors
              attended the exhibition and its events.
            </p>
          </div>
        </div>
        <div></div>
        </div>  

        {/* Section Divider */}
        <div className="flex justify-center items-center">
        <div className="bg-[rgb(248,226,226)] my-14 h-16 w-1.5 rounded-full hidden sm:block"></div>
        </div>

        {/* About Rina */}
        <div className="grid grid-cols-8 bg-[rgb(253,249,249)] mb-6 p-8">
        <div></div>
        <div className="mb-6 md:col-span-6 col-span-8">
          <div className="lg:px-5 pt-8 pb-4 lg:pb-6 md:mb-8 text-center font-lato font-light text-4xl sm:text-5xl leading-8 tracking-wide capitalize">
            About Rina Banerjee
          </div>
            <div className="flex justify-center text-oval-wrap p-4 lg:p-10 lg:float-left">
              <figure className="lg:mt-6 lg:mr-6 text-center">
                <Image
                  src="/images/rina_viola.jpg"
                  alt=""
                  width={480}
                  height={680}
                  className="border border-slate-300 mt-4 p-2 rounded-full mx-auto md:mx-0"
                />
                <figcaption className="mt-1 lg:mr-10 text-xs text-center text-slate-600 dark:text-gray-400">Rina Banerjee, Syracuse University Art Museum,<br />February 2023</figcaption>
              </figure>
            </div>
            <div className="pt-4 text-lg md:text-justify text-zinc-800 leading-8 tracking-wide text-content">
              <p className="sm:px-8 pb-8">Rina Banerjee was born in Kolkata, India, lived briefly in Manchester and London before arriving to Queens, New York. Drawing on her multinational background and personal history as an immigrant, Banerjee focuses on ethnicity, race, and migration and American diasporic histories in her sculpture, drawings, and video art. Her sculptures feature a wide range of globally sourced materials, textiles, colonial/historical and domestic objects while her drawings are inspired by Indian miniature and Chinese silk paintings and Aztec drawings.</p>
              <p className="sm:px-8 pb-8">In 2018 Pennsylvania Academy of the Fine Arts and the San José Museum of Art co-organized Banerjee’s first solo retrospective <i>Rina Banerjee: Make Me a Summary of the World</i> featuring 60 works of sculptures, paintings, and video. The retrospective’s North American tour includes exhibitions at the San Jose Museum of Art, Fowler Museum at the University of California, Los Angeles ending at the Frist Art Museum in Nashville Tennessee in 2020. Banerjee has exhibited internationally, spanning 14 biennials worldwide, including the Venice Biennial (Biennale), Yokohama Triennale, and Kochi Biennial. Banerjee’s works are included in many private and public collections such as the Foundation Louis Vuitton, Whitney Museum of American Art, San Francisco Museum of Modern Art, Centre Pompidou, Pennsylvania Academy of Fine Arts, San Jose Museum of Art, Kiran Nadar Museum of Art, and the Brooklyn Museum.</p>
              <p className="sm:px-8 pb-8">Banerjee returned to teaching in 2020, as a critic for the Yale School of Art Graduate Program. Between September 2021 and January 2022, she served a prestigious artist’s residency at the Centre Pompidou in Paris. In 2024, Banerjee received an Asia Arts Game Changer Award at the Asia Society in New York.</p>
            </div>
        </div>
        <div></div>
        </div>
            
        {/* Section Divider */}
        <div className="flex justify-center items-center">
        <div className="bg-[rgb(248,226,226)] my-14 h-16 w-1.5 rounded-full hidden sm:block"></div>
        </div>

        {/* All works/articles */}
        <div id='articles' className="pt-8 -mt-8 lg:pt-24 lg:-mt-24">
          <Articles />
        </div>

      </main>
    </>
  );
}