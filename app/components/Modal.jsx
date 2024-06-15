import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ isVisible, onClose, children, key, item}) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#fdf9f9] bg-opacity-95 backdrop-blur-sm flex justify-center items-center" 
                    key={key}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mx-5 mt-5 max-w-5xl text-center font-italiana font-light pb-3 text-4xl md:text-5xl tracking-wide">
          {item.title}
        </h1>

        <div className="w-[560px] lg:w-[1120px] flex flex-col">
          <button className="text-[#be3a3a] text-xl place-self-end" onClick={() => onClose()}>
            <IoCloseOutline className="stroke-custom" size={40} />
          </button>
          <div className="bg-white shadow-2xl">{ children }</div>
        </div>

        <p className="mx-5 max-w-[900px] mt-6" dangerouslySetInnerHTML={{ __html: item.desc }}>
        </p>
      </div> 
    </div>
  );
}