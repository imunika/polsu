'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '/src/data';
import CardWorks from '../components/CardWorks';
import Buttons from '../components/Buttons';

function shuffleArray(array) {
  const shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function MultiFilters() {
  const [items, setItems] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setItems(data);
  }, []);

  const menuItems = [...new Set(data.map((val) => val.category))];
  menuItems.push('all');
  menuItems.sort();

  const filterItems = (cat) => {
    if (cat === 'all') {
      setItems(shuffleArray(data)); // Shuffle the original data when "all" is selected
    } else {
      const newItems = data.filter((newval) => newval.category === cat);
      setItems(shuffleArray(newItems)); // Shuffle the filtered items
    }
  };

  return (
    <>
      <div className="grid grid-cols-8 pt-16 lg:p-8 bg-[rgb(253,249,249)]">
        <div></div>
        <div className="col-span-6 mt-10">
          <div className="lg:px-5 pt-3 text-zinc-950 text-center font-lato font-light text-5xl capitalize leading-8 tracking-wide">
            REFLECTIONS
          </div>
        </div>
        <div></div>
      </div>

      <div className="w-full border-b border-red-100"></div>
      <div className="mt-1 w-full border-b border-red-100"></div>

      <Buttons
        menuItems={menuItems}
        setItems={setItems}
        data={data}
        filterItems={filterItems}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="w-full border-b border-red-100"></div>
      <div className="mt-1 w-full border-b border-red-100"></div>

      <div className="grid grid-cols-8 mb-6 p-8 bg-[rgb(253,249,249)]">
        <div></div>
        <div className="mb-6 border-x border-white col-span-6 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 p-6">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <CardWorks key={index} item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div></div>
      </div>
    </>
  );
}