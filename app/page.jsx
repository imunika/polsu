// import Image from "next/image";
'use client'
import Articles from "./components/Articles";

export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero section */}
        <section className="h-screen bg-center bg-cover bg-blend-overlay bg-black/20 bgimg">
          <div className="h-screen flex items-center">
            <div className="pt-10 px-5 text-white flex flex-col justify-center items-center mx-auto [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 className=" text-center font-italiana font-extralight text-3xl lg:text-5xl">
                Reflections on
              </h1>
              <br />
              <br />
              <br />
              <h2 className="pt-5 text-center center font-italiana font-extralight text-4xl md:text-5xl lg:text-7xl">
                <em>Take Me to the Palace of Love</em>
              </h2>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="pt-10 pb-10 text-center inline-block font-italiana font-extralight text-2xl md:text-3xl lg:text-3xl mb-4">
                Syracuse University Art Museum
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <div className="grid grid-cols-8 bg-[rgb(253,249,249)] mb-6 p-8">
        <div></div>
        <div className="mb-6 md:col-span-6 col-span-8">
          <div>
            <p className="text-lg text-justify text-zinc-800 leading-8 tracking-wide p-8">
              Can we rescue love? This fundamental question underscored <i>Take Me to the Palace of Love</i>, an
              exhibition of acclaimed artist-engineer Rina Banerjee’s work that took place at the Syracuse
              University Art Museum in Syracuse, New York (January 19 – May 14, 2023). Three critical art
              installations by Banerjee shaped the core of the exhibition: “Take Me, Take Me…to the Palace
              of Love” (2003) (after which the exhibition was named), “A World Lost…” (2013), and “Viola,
              from New Orleans-“ (2017). Together with a selection of the artist’s drawings, these thought-provoking
              works of art were displayed alongside the museum’s collection of Mithila paintings,
              African masks, Indian sculpture, North American paintings and prints, and historic photographs
              of Mughal architecture; rare books from the Syracuse University Libraries; a magnificent chair
              designed by Lockwood de Forest from the Munson-Williams-Proctor-Arts Institute; and a
              colonial era photograph of the Taj Mahal loaned by the Herbert F. Johnson Museum of Art at Cornell University.
            </p>
          </div>
        </div>
        <div></div>
        </div>  

        {/* Section Divider */}
        <div className="flex justify-center items-center">
        <div className="bg-[rgb(248,226,226)] my-14 h-16 w-1.5 rounded-full hidden sm:block"></div>
        </div>

        {/* All works/articles */}
        <div id='articles' className="pt-24 -mt-24">
          <Articles />
        </div>

        {/* Section Divider */}
        <div className="flex justify-center items-center">
        <div className="bg-[rgb(248,226,226)] my-14 h-16 w-2 rounded-full hidden sm:block"></div>
        </div>
      </main>
    </>
  );
}