import { IoCloseOutline } from "react-icons/io5";

export default function ModalProfile({ isVisible, onClose: func, key, item }) {
  if (!isVisible) return null;

  return (
    <div className="z-40 fixed inset-0 bg-red-50 bg-opacity-80 backdrop-blur-sm flex justify-center items-center" key={key}>
      <div className="flex flex-col justify-center items-center w-full h-full max-w-5xl">
        <h1 className="mx-5 mt-5 text-center font-italiana font-light pb-3 text-4xl md:text-5xl tracking-wide">
          {item.title}
        </h1>

        <div className="bg-[rgb(253,249,249)] shadow-xl w-[360px] sm:w-[560px] lg:w-[960px] flex flex-col border-dotted border border-[#be3a3a] ring-1 ring-[#be3a3a]/25 ring-offset-8 max-h-full overflow-y-auto mb-10">
          <button className="text-[#be3a3a] text-xl place-self-end" onClick={() => func()}>
            <IoCloseOutline className="stroke-custom" size={40} />
          </button>
          <div className="mb-6 md:col-span-2 col-span-4">
            <img src={item.author_headshot} className="mt-6 p-2 mx-auto w-72 h-72" alt="" />
            <h2 className="p-2 text-center text-slate-700 font-light font-lato text-2xl mb-10">{item.author_name}</h2>
            <div dangerouslySetInnerHTML={{ __html: item.bio }} className="text-zinc-800 font-light leading-6 tracking-wide lg:text-justify	p-4 md:p-10" />
          </div>
        </div>
      </div>
    </div>
  );
}