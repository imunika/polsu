import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { text: 'WORKS', path: '/#articles' },
    { text: 'CONTRIBUTORS', path: '/all-authors' },
    { text: 'ABOUT', path: '/about' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-30 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 py-3 shadow-lg bg-white bg-opacity-80 shadow-stone-400/[0.3] backdrop-blur-[0.5rem]">
        <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
          <li className="mr-auto pt-1">
            <Link href="/" className="text-[#be3a3b] text-2xl hover:no-underline">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <div className="-mt-1 bg-trasparent">
                    <div className="font-arizonia text-5xl -mb-2">PL</div>
                    {/* <img src="/images/logo_POLSU3.png" alt="" width={150} height={80} /> */}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-taviraj text-base">Syracuse University</div>
                  <div className="font-taviraj text-sm -mt-1">Art Museum</div>
                </div>
              </div>
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.path} className={pathname === item.path ? 'active' : ''}>
              <Link href={item.path}
                className={`hover:no-underline relative text-[#be3a3b] font-lato font-normal after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-[#be3a3b] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100`}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 lg:mt-24">
        {/* Add some margin to the top of the main content to prevent it from being covered by the navbar */}
        {/* The main content goes here */}
      </div>
    </>
  );
}