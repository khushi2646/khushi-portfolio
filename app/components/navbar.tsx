import Link from 'next/link';
import Image from 'next/image'; // Import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/KhushiLogo.svg" 
                alt="Khushi Logo" 
                width={180}  // Adjust width and height as needed
                height={70}
              />
            </Link>
          </div>
          {/* Buttons on the right */}
          <div className="hidden md:flex space-x-2">
            <Link href="/about" className="text-grey-700 hover:text-pink-400 hover:bg-pink-100 px-4 py-2 rounded-full text-sm font-semibold font-aileron border border-grey-700 hover:border-pink-400 ">
              Selected Work
            </Link>
            <Link href="/services" className="text-grey-700 hover:text-pink-400 hover:bg-pink-100 px-4 py-2 rounded-full text-sm font-semibold font-aileron border border-grey-700 hover:border-pink-400 ">
              About
            </Link>
            <Link href="/contact" className="text-grey-100  bg-pink-400 hover:bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold font-aileron border border-pink-500 hover:border-pink-600 flex gap-2 items-center text-center">
              Reach Out               <Image
                src="/upArrow.svg" 
                alt="Khushi Logo" 
                width={12}  // Adjust width and height as needed
                height={12}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
