export default function Profile({item, onClick: func , key}) {
  
  return (
    <div className="" key={key} onClick={() => func(item.url)}>
      <div className='aspect-[3/2] cursor-pointer hover:no-underline'>
        <img
          src={item.author_headshot}
          alt=""
          className="mx-auto rounded-full w-40 h-40 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
        />
        <h2 className="p-2 text-center text-slate-700 font-light font-lato text-xl md:text-lg hover:text-[#be3a3b]">
          {item.author_name}
        </h2>
      </div>
    </div>    
  );
}