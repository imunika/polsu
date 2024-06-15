import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { AiFillPrinter } from "react-icons/ai";

export default function SocialIcons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm font-medium">

      <a className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
      focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer">
        <FaFacebookF />
      </a>

      <a className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
      focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer">
        <FaTwitter />
      </a>
      
      <a className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
      focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer text-[1.1rem]">
        <TbMailFilled />
      </a>
      
      <a className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
      focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer text-[1.2rem]">
        <AiFillPrinter />
      </a>

    </div>
  );
}