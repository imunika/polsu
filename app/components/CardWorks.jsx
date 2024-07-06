import Link from 'next/link';
import { IoTimeOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function CardWorks({ item }) {  
  const val = item;
  return (
    <motion.div
      className="bg-white border border-slate-100 overflow-hidden 
                  shadow-[rgba(0,_0,_0,_0.1)_0px_25px_50px_-12px]
                  hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                  transition-all duration-1000 h-full rounded-lg">
      <Link className='cursor-pointer' href={val.url}>
        <div className='relative bg-white aspect-[4/3]'>
          <img className="absolute h-full w-full object-cover p-2 cursor-pointer rounded-xl" src={val.cover_img} alt="" />
          <div className="absolute right-0 bottom-0 mr-7 mb-7">
            {val.icon}
          </div>
        </div>
      </Link>
      <div className='mt-4 mx-4'>
        {val.category === 'lectures' ? (
          <div className='flex flex-wrap'>
            <p className="mb-2 text-left text-zinc-950 text-sm font-lato font-light tracking-wide flex items-center"><IoTimeOutline className='mr-1'/> {val.time}</p>
            <p className="mb-2 text-right text-zinc-950 text-sm font-lato font-light tracking-wide flex-auto">{val.date}</p>
          </div>
        ) : (
          <p className="text-zinc-950 text-sm font-lato font-light tracking-wider">By {val.author_name}</p>
        )}
      </div>
      <Link className='cursor-pointer' href={val.url}>
        <h2 className="mb-2 mt-1 mx-4 text-black font-light text-lg sm:text-xl hover:text-[#be3a3b]">
          {val.title}
        </h2>
      </Link>
    </motion.div>
  );
}