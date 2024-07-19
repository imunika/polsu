import React from "react";

export default function Buttons({ menuItems, filterItems, selectedCategory, setSelectedCategory }) {
  const handleClick = (category) => {
    setSelectedCategory(category);
    filterItems(category);
  };

  return (
    <div className="flex space-x-4 md:space-x-6 p-8 items-center justify-center font-lato font-light">
      {menuItems.map(val => (
        <button
          key={val}
          className={`text-xs sm:text-sm bg-red-50 px-4 py-1 rounded-full ring-1 ring-red-100 ring-offset-2 uppercase transition hover:bg-red-700 hover:text-white
          ${selectedCategory === val ? 'bg-red-700 text-white font-normal' : 'text-black'}`}
          onClick={() => handleClick(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}