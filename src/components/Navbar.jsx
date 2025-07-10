import { useState } from "react";

export default function Navbar(){
     const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="max-w-screeen">
    <nav className="hidden md:flex md:flex-row items-center justify-between p-1 text-gray-800 -mt-1 w-full max-w-screen fixed z-50 bg-transparent">
          <div className="flex flex-row gap-1 items-center text-center justify-between flex-shrink ml-5">
  {/* Logo stays the same */}
  <div className="border-gray-200 md:w-10 md:h-10 xl:w-12 xl:h-12 rounded-full flex items-center justify-center">
    <img src="/src/assets/images/cropped omose logo.png" alt="omose_logo" className="object-cover rounded-full" />
  </div>

  {/* Text with subtle overlay */}
  <div className="relative">
    {/* Overlay behind text only */}
    <h1 className="relative z-10 text-base md:text-xl xl:text-3xl font-light whitespace-nowrap text-[#DB8C96] font-libre brand_name">
      {/* <div className="absolute inset-0 bg-white rounded-sm blur-[1px] z-0 opacity-3"></div> */}
      ÒmoseCeutiques
    </h1>
  </div>
</div>
        <div className="hidden md:flex md:flex-row gap-5 xl:gap-16 text-sm xl:text-lg font-semibold justify-between items-center w-full md:p-6 md:w-auto mt-2">
          <div className="absolute inset-0 bg-white rounded-sm blur-[1px] -z-10 opacity-0.5"></div>
          <a className="hover:text-blue-600 hover:cursor-pointer whitespace-nowrap">About Us</a>
          <a
            href="#products"
            className="hover:text-blue-600 hover:cursor-pointer whitespace-nowrap"
          >
            Products
          </a>
          <a 
          href="#contact_us"
          className="hover:text-blue-600 hover:cursor-pointer whitespace-nowrap">Contact Us</a>
        </div>
      </nav>

        {/* Mobile Navbar*/}
        <nav className="md:hidden fixed flex flex-row items-center justify-between p-2 text-black m-0 w-full max-w-screen z-50 bg-transparent">
          <div className="absolute inset-0 bg-white rounded-sm blur-[1px] z-0 opacity-0.5"></div>
          <div className="flex flex-row gap-1 items-center text-center justify-between flex-shrink">
          <div className="border-gray-200 w-7 h-7 rounded-full flex items-center justify-center">
              <img src="\src\assets\images\cropped omose logo.png" alt="omose_logo" className="object-cover  rounded-full"/>
            </div>
            <h1 className="text-sm font-bold whitespace-nowrap text-[#DB8C96] font-libre brand_name">ÒmoseCeutiques</h1>
          </div>

          <div className="flex gap-4">
        {!isOpen ? (
          <img
            onClick={() => setIsOpen(true)}
            src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" // Hamburger
            alt="Open menu"
            className="block md:hidden w-4 h-4 cursor-pointer transition-transform duration-300 z-50"
          />
        ) : (
          <img
            onClick={() => setIsOpen(false)}
            src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" // X icon
            alt="Close menu"
            className="block md:hidden w-4 h-4 cursor-pointer transition-transform duration-300 rotate-90 z-50"
          />
        )}
      </div>

      {/* Sidebar Menu */}
      <div
        className={`md:hidden absolute top-0 right-0 w-1/2 bg-white border border-gray-300 rounded-bl-2xl rounded-br-sm px-6 py-4 text-sm font-semibold flex flex-col items-center gap-5 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <a href="#about_us" className="whitespace-nowrap">About Us</a>
        <a href="#products" className="whitespace-nowrap">Products</a>
        <a href="#contact_us" className="whitespace-nowrap">Contact Us</a>
      </div>
        </nav>
       </div>
  );
}