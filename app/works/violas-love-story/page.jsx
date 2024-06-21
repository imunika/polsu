'use client';
import { useEffect, useState } from "react";
import ModalProfile from "../../components/ModalProfile";
import Image from "next/image";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function ViolasLovePoem() {
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
      author_headshot: "/images/headshots/khadija_sharif.png",
      author_name: "Khadija Sharif",
      bio: "Khadija Sharif is majoring in biology and creative writing. She is a 2019 Narratio Fellow and served as a Narratio artist-in-residence in 2021. In addition to serving in leadership positions within the fellowship program, Khadija works as a facilitator and research assistant for Write Out, a creative writing program associated with SU’s Engaged Humanities Network that works with youth across schools and community centers in Syracuse."
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
              Viola’s love story
            </h1>

            <div className="sm:mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <div><Image src="/images/headshots/khadija_sharif.png" width={64} height={64} className="p-2 mx-auto" alt="" /></div>
                <div>by <span className="text-[#be3a3b] font-medium cursor-pointer" onClick={handleLinkClick}>Khadija Sharif</span></div>
              </div>
              <div className="mt-4 flex items-center">
                <SocialIcons />
              </div>
            </div>

            <div className="text-md sm:text-lg text-zinc-800 font-light leading-8 tracking-wide">
              <div className="mt-2 border-t border-[#d3d3d3]">
              </div>
              <div className="mt-10">
                <div className="sm:indent-4">
                  <p className="text-center">That’s why I wear the mask</p>
                  <p className="text-center">As I uttered the prayer</p>
                  <p className="text-center">Ewat Ewat Ewat meel Jacel egay</p>
                  <br />
                  <p className="text-center">I am only a fraction of the lover I use to be</p>
                  <p className="text-center">A forgotten history</p>
                  <p className="text-center">And as vacant as the empty chair in my palace of love</p>
                  <p className="text-center">You have caused my weeds (weakness) to overgrow and take over the luscious garden that</p>
                  <p className="text-center">overflowed with what I thought was love</p>
                  <br />
                  <p className="text-center">But it wasn’t</p>
                  <p className="text-center">And as I looked around I saw just how identical to real thing it was</p>
                  <br />
                  <p className="text-center">And that is when</p>
                  <p className="text-center">I went in search of love,</p>
                  <p className="text-center">taking pieces from every land until I became so full</p>
                  <br />
                  <p className="text-center">Ewat Ewat meel jecke egay</p>
                  <br />
                  <p className="text-center">Allah said I have entrusted you with this vessel of a body</p>
                  <p className="text-center">A temple,</p>
                  <p className="text-center">At which you have to wash yourself before entering,</p>
                  <p className="text-center">Why did I ever let your filthy heart taunt my purity (make it more imaginary)</p>
                  <br />
                  <p className="text-center">When did my Taj Mahal</p>
                  <p className="text-center">Become nothing more than a</p>
                  <p className="text-center">Tourist attraction at the museum</p>
                  <p className="text-center">Every wandering eye mesmerized</p>
                  <p className="text-center">At the beauty that once was</p>
                  <br />
                  <p className="text-center">And it was then that I realized</p>
                  <p className="text-center">Hatebe at is jaclin wiliga mahesit.</p>
                  <br />
                  <p className="text-center">Isn’t it crazy</p>
                  <p className="text-center">That when I started smiling in the mirror</p>
                  <p className="text-center">It reflected in the people around me</p>
                  <p className="text-center">So imagine what happened when I started loving more</p>
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
                <p className="font-lato text-left text-sm text-[rgb(190,58,59)] md:ml-14">PREVIOUS POEM</p>
                <div className="flex gap-1 items-center justify-start">
                <div className="hidden md:block"><BsChevronCompactLeft size={50} color="#be3a3b" /></div>
                  <Link href="/works/unearthing-my-identity-through-viola"
                    className="text-gray-950 font-light text-md md:text-lg hover:text-[rgb(190,58,59)]">
                    <div className="line-clamp-2">Unearthing my Identity through Viola</div>
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