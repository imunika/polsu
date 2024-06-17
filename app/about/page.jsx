import Image from "next/image";
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Palace of Love</title>
      </Head>
      <div className="grid grid-cols-8 pt-16 lg:p-8 bg-[rgb(253,249,249)]">
        <div></div>
          <div className="col-span-8 lg:col-span-6 mt-10">
            <div className="lg:px-5 pt-3 text-center font-lato font-light text-4xl sm:text-5xl leading-8 tracking-wide uppercase">
              About
            </div>
          </div>
        <div></div>
      </div>

      <div className="grid grid-cols-6 mb-6 bg-[rgb(253,249,249)]">
        <div></div>
        <div className="mb-10 md:col-span-4 col-span-6">
          <div className="text-lg md:text-justify text-zinc-800 leading-8 tracking-wide p-4 pt-16">
            <figure className="object-center lg:float-right lg:ml-7 mt-2">
              <Image src="/images/about/RomitaRay_bio.jpg" width={360} height={480} alt="Romita Ray" className="w-80 h-100 border border-slate-300 p-1" />
              <figcaption className="mt-1 ml-1 text-xs text-slate-600 dark:text-gray-400">Romita Ray</figcaption>
            </figure>
            <p className="mt-4 lg:mt-0">
              <i>Take Me to the Palace of Love</i> grew out of a global pandemic (January 19 – May 14, 2023).
              Rooted in the nourishing power of love, it coaxed us to reflect on our sense of place in our communities and on our planet.
              Yet love, as Banerjee reminds us, has been distorted to create inequity and destroy our relationships with the natural world.
              Drawing us into these disruptions and broken connections, <i>Take Me to the Palace of Love</i> aimed to revive conversations
              on our campus and wider Syracuse community, about the need to restore our social bonds and rediscover our fragile links to
              nature. As such, it invited viewers to ask: can love play a role in how we view ourselves and shape our sense of place? Has
              climate change been shaped by a loss of love? How does love shape or resist gendered and racialized identities? These questions
              continue to haunt as we slowly come to terms with the impact of COVID-19 on our families, friends, and communities.
            </p>
            <br />
            <p>
              <i>Take Me to the Palace of Love</i> was more than just an exhibition: it was also a series of community events that brought
              the artist together with students, faculty, staff, and community members from the city of Syracuse, during Banerjee’s residency
              at Syracuse University as the Jeannette K. Watson Distinguished Visiting Professor in the Humanities (February 19 - March 4, 2023).
            </p>
            <br />
            <p>
              A post exhibition catalogue, this website pays tribute to the exhibition, Banerjee’s Watson residency, and the numerous
              interlocutors who generously participated in the conversations, workshops, and exchanges organized in conjunction with
              <i>Take Me to the Palace of Love</i>, including a grand finale that saw Banerjee in dialogue with acclaimed scholar,
              Gayatri Chakravorty Spivak. It also includes essays on the art installations penned by Syracuse University faculty,
              Jason Vartikar (Whitney Museum of American Art) and Rebecca Brown (Johns Hopkins University).
            </p>
            <br />
            <p>
              Curated by Romita Ray, associate professor of art history at Syracuse University, in collaboration with Vanja Malloy
              (former director) and Melissa Yuen (interim chief curator) at the Syracuse University Art Museum, <i>Take Me to the
                Palace of Love</i> was generously supported by the National Endowment for the Arts and the Syracuse University Humanities
              Center, along with The Republic of Tea and the following departments, units, and programs at the university: African American
              Studies; Anthropology; Art and Music Histories; Chemistry; CNY Humanities Corridor; College of Arts and Sciences; College of
              Law; East Asia Program; Earth and Environmental Sciences; Engaged Humanities Network; English; Geography; Goldring Arts
              Journalism and Communications Program; Hendricks Chapel; History; Interdisciplinary Neuroscience Program; Maxwell School of
              Citizenship and Public Affairs; Museum Studies; Office of Diversity and Inclusion; Office of Research; Office of Strategic
              Initiatives - Academic Affairs; Renée Crown University Honors Program; School of Architecture; S.I. Newhouse School of
              Public Communications; South Asia Center; Special Collections Research Center; Syracuse University Art Museum; Syracuse
              University Humanities Center; The Lender Center for Social Justice; William P. Tolley Distinguished Teaching Professor in
              the Humanities; Women in Science and Engineering (WiSE); Women’s and Gender Studies; and Writing Studies, Rhetoric, and
              Composition.
            </p>
            <br />
            <p>
              In April 2024, Take Me to the Palace of Love was recognized by the Museum Association of New York (MANY) with an
              Award of Distinction in the “Engaging Communities” category.
            </p>
          </div>
        </div>
        <div></div>
      </div>  
    </>
  );
} 