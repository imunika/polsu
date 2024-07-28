import { useState, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import data from '/src/data';

export default function SocialIcons() {
  const [loading, setLoading] = useState(true);
  const [entry, setEntry] = useState(null);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      const slug = currentUrl.split('/').pop();
      setSlug(slug);
      
      const foundEntry = data.find(item => item.url.endsWith(slug));
      if (foundEntry) {
        setEntry(foundEntry);
      }
      setLoading(false);
    }
  }, []); // Empty dependency array ensures useEffect runs only once

  if (loading) {
    return <p>Loading...</p>; // Optionally, show a loading indicator
  }

  if (!entry) {
    return <p>No matching entry found.</p>;
  }

  const mailtoLink = `mailto:?subject=${encodeURIComponent(entry.title)}&body=https://www.palaceoflovesyracuse.com${entry.url}`;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-medium">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?display=page&u=https://www.palaceoflovesyracuse.com/works/${slug}`}
        className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
          focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=https://www.palaceoflovesyracuse.com${entry.url}&text=${encodeURIComponent(entry.title)}`}
        className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full 
          focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter />
      </a>

      <a
        href={mailtoLink}
        className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
          focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer text-[1.1rem]"
      >
        <IoMdMail />
      </a>
    </div>
  );
}

// import { useState, useEffect } from 'react';
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoMdMail } from "react-icons/io";
// import data from '/src/data';

// export default function SocialIcons() {
//   const [loading, setLoading] = useState(true);
//   const [entry, setEntry] = useState(null);
//   const currentUrl = window.location.href;
//   const slug = currentUrl.split('/').pop();

//   useEffect(() => {
//     const currentUrl = window.location.href;
//     const slug = currentUrl.split('/').pop();

//     const foundEntry = data.find(item => item.url.endsWith(slug));
//     if (foundEntry) {
//       setEntry(foundEntry);
//     }
//     setLoading(false);
//   }, []); // Empty dependency array ensures useEffect runs only once

//   if (loading) {
//     return <p>Loading...</p>; // Optionally, show a loading indicator
//   }

//   if (!entry) {
//     return <p>No matching entry found.</p>;
//   }

//   const mailtoLink = `mailto:?subject=${encodeURIComponent(entry.title)}&body=https://polsu.vercel.app${entry.url}`;

//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-medium">
//       <a
//         href={`https://www.facebook.com/sharer/sharer.php?display=page&u=https://polsu.vercel.app/works/${slug}`}
//         className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
//           focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaFacebookF />
//       </a>

//       <a
//         href={`https://twitter.com/intent/tweet?url=https://polsu.vercel.app${entry.url}&text=${encodeURIComponent(entry.title)}`}
//         className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full 
//           focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaXTwitter />
//       </a>

//       <a
//         href={mailtoLink}
//         className="bg-[rgb(252,252,252)] border border-[#be3a3b]/10 p-2 text-gray-700 flex items-center gap-2 rounded-full
//           focus:scale-110 hover:scale-[1.15] hover:bg-white hover:text-[#be3a3b] active:scale-105 transition cursor-pointer text-[1.1rem]"
//       >
//         <IoMdMail />
//       </a>
//     </div>
//   );
// }