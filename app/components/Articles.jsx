'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '/src/data';
import CardWorks from './CardWorks';
import Buttons from '../components/Buttons';
import Head from 'next/head';

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
      const newItems = shuffleArray(data);
      setItems(newItems); // Shuffle the original data when "all" is selected
    } else {
      const newItems = data.filter((newval) => newval.category === cat);
      setItems(shuffleArray(newItems)); // Shuffle the filtered items
    }
  };

  return (
    <>
      <Head>
        <title>Contributors - Palace of Love</title>
      </Head>
      <div className="grid grid-cols-8 p-8 bg-[rgb(253,249,249)]">
        <div></div>
        <div className="col-span-8 lg:col-span-6 mt-10">
          <div className="lg:px-5 pt-3 text-center font-lato font-light text-4xl sm:text-5xl leading-8 tracking-wide uppercase">
            Works
          </div>
          <div className='flex items-center justify-center mt-10 h-[4rem] w-full 
          lg:translate-x-1/2 lg:w-1/2 rounded-full border border-white border-opacity-40
          bg-white bg-opacity-80 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem]'>
              <Buttons
              menuItems={menuItems}              
              data={data}
              filterItems={filterItems}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              />
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-8 mb-6 pt-8 bg-[rgb(253,249,249)]">
        <div></div>
        <div className="mb-16 border-x border-white col-span-6 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {/* <AnimatePresence> */}
            {items.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 1 }}
              >
                <CardWorks key={index} item={item} />
              </motion.div>
            ))}
          {/* </AnimatePresence> */}
        </div>
        <div></div>
      </div>
    </>
  );
}