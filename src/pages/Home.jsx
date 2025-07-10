import { useState } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";
import FAQItem from "../components/FAQItem";
import backgroundImage1 from '../assets/images/woman_in_spa.png';
import backgroundImage2 from '../assets/images/woman_holding_cream_landscape.png';
import backgroundImage3 from '../assets/images/woman_in_spa(potrait).png';
import backgroundImage4 from '../assets/images/woman with cream on her face.jpeg';


export default function Home() {

  const faqs = [
    {
      question: "What skin types are your products suitable for?",
      answer:
        "Our products are carefully formulated to be inclusive and effective for all skin types, including sensitive, oily, dry, and combination skin. Each product page includes specific details to help you find the perfect match for your needs.",
    },
    {
      question: "Are your products cruelty-free and vegan?",
      answer:
        "Yes! All Òmose Skincare products are 100% cruelty-free, and many are vegan-friendly. We’re committed to ethical practices and never test on animals.",
    },
    {
      question: "How do I choose the right product for my skin?",
      answer:
        "We provide tailored consultancy to help you choose the right products for your skin. With clear, in-depth descriptions, you’ll feel confident in every purchase.",
    },
    {
      question: "What ingredients do you use?",
      answer:
        "We use high-quality, natural ingredients known for their effectiveness and safety. Each product page lists all ingredients, and we prioritize clean, non-toxic formulations free from harmful chemicals.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "We currently ship across Nigeria and are working on expanding to international locations soon.",
    },
  ];

  return (
    <div className="flex flex-col max-w-screeen">
      <Navbar />
      {/* <LandingPage /> */}

      {/* First Section (Larger Screens)*/}
      <div
        className="hidden flex-1 md:flex flex-col justify-center items-center hover:cursor-pointer bg-[#f3f2e6] rounded-none">
        <div className="relative w-full h-[100vh] m-0 p-0" >
          {/* Overlay */}

    {/* Content */}
    <div className="relative z-20 flex text-right items-center md:p-7 xl:p-11 w-full h-full rounded-2xl md:rounded-none" style={{
    backgroundImage: `url(${backgroundImage1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
    <div className="absolute inset-0 bg-black blur-[1px] z-0 opacity-23"></div>
      <span className="text-base sm:text-lg md:text-xl text-[#f3f2e6] text-left md:w-[40%] lg:w-[30%] xl:w-[40%]">
        <h1 className="leading-12 xl:leading-20 header text-4xl xl:text-7xl mt-48">Glow naturally every day</h1>
        <p className="mb-4 mt-2 text-base xl:text-xl xl:w-[70%]">Discover our skincare essentials, crafted with love and powered by nature.</p>
        <button
      className="
       text-black
        border border-gray-300 rounded-lg bg-[#f3f2e6] 
        px-4 py-3 xl:px-8 xl:py-6 z-30
        text-base xl:text-2xl font-medium hover:cursor-pointer
      "
      style={{ maxWidth: "max-content" }}
    >
      WEAR IT
    </button>
        </span>
    </div>
  </div>
</div>

      {/* First Section (Mobile Screens)*/}

      <div
        className="flex-1 flex md:hidden flex-col justify-between hover:cursor-pointer m-4 mt-12 bg-[#f3f2e6] rounded-2xl"
      >
        <div className="relative w-full h-[33.5rem] md:h-[39.5rem]">

          {/* Content */}
          <div
            className="relative z-20 flex flex-col justify-between h-full w-full rounded-2xl"
            style={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src={backgroundImage3}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-none z-0 bg-cover"
              style={{ pointerEvents: 'none' }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black blur-[1px] z-0 opacity-15 rounded-2xl"></div>
            <span className="justify-end z-10 flex flex-col h-full text-base sm:text-lg md:text-xl text-[#f3f2e6] w-[80%] p-7">
              <h1 className="text-4xl leading-11 header">Glow naturally every day</h1>
              <p className="text-xs mb-4 mt-2">Discover our skincare essentials, crafted with love and powered by nature.</p>
              <button
                className="
                  border border-gray-300 rounded-2xl bg-[#f3f2e6] text-black 
                  px-4 py-3 z-30
                  text-sm md:text-lg xl:text-2xl font-medium hover:cursor-pointer
                "
                style={{ maxWidth: "max-content" }}
              >
                WEAR IT
              </button>
            </span>
          </div>
        </div>
      </div>

        {/*Second Section*/}
      <div
        className="hidden flex-1 md:flex flex-col justify-center items-center hover:cursor-pointer bg-[#f3f2e6] rounded-none">
        <div className="relative w-full h-[100vh] m-0 p-0" >
          {/* Overlay */}

    {/* Content */}
    <div className="relative z-20 flex text-right items-center md:p-7 xl:p-11 w-full h-full rounded-2xl md:rounded-none" style={{
    backgroundImage: `url(${backgroundImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
    <div className="absolute inset-0 bg-black blur-[1px] z-0 opacity-20"></div>
      <span className="text-base sm:text-lg md:text-xl text-[#f3f2e6] text-left md:w-[40%] lg:w-[40%] xl:w-[40%]">
        <h1 className="leading-12 xl:leading-20 header text-4xl xl:text-7xl mt-48">The face cream your skin has been waiting for.</h1>
        <p className="mb-4 mt-2 text-base xl:text-xl">Crafted for confidence. <br/> Powered by botanicals. <br/>Made for the face that tells <span className="font-bold"> your</span> story.</p>
        <button
      className="
       text-black
        border border-gray-300 rounded-lg bg-[#f3f2e6] 
        px-4 py-3 xl:px-8 xl:py-6 z-30
        text-base xl:text-2xl font-medium hover:cursor-pointer
      "
      style={{ maxWidth: "max-content" }}
    >
      SHOP NOW
    </button>
        </span>
    </div>
  </div>
</div>

  {/* Second Section (Mobile Screens)*/}

      <div
        className="flex-1 flex md:hidden flex-col justify-between hover:cursor-pointer m-4 mt-12 bg-[#f3f2e6] rounded-2xl"
      >
        <div className="relative w-full h-[33.5rem] md:h-[39.5rem]">

          {/* Content */}
          <div
            className="relative z-20 flex flex-col justify-between h-full w-full rounded-2xl "
            style={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src={backgroundImage4}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-none z-0 bg-cover"
              style={{ pointerEvents: 'none' }}
              aria-hidden="true"
            />
            <span className="justify-end z-10 flex flex-col h-full text-[#f3f2e6] w-[80%] text-left p-6">
              <div className="absolute inset-0 bg-black blur-[1px] z-0 opacity-22 rounded-2xl"></div>
              <h1 className="text-3xl leading-9 header">The face cream your skin has been waiting for.</h1>
              <p className="text-xs mb-4 mt-3">Crafted for confidence. <br/> Powered by botanicals. <br/>Made for the face that tells <span className="font-bold"> your</span> story.</p>
              <button
                className="
                  border border-gray-300 rounded-2xl bg-[#f3f2e6] text-black 
                  px-4 py-3 z-30
                  text-sm md:text-lg xl:text-2xl font-medium hover:cursor-pointer
                "
                style={{ maxWidth: "max-content" }}
              >
                SHOP NOW
              </button>
            </span>
          </div>
        </div>
      </div>


      {/* Third Section */}
      <div className="flex-1 flex flex-col items-center w-full mt-20 xl:mt-30 text-center">
        <div className="flex-1 flex flex-col items-center mb-2">
          <h1 id="products" className="text-2xl md:text-2xl xl:text-4xl mb-1 font-medium">Our Products</h1>
          <p className="text-sm md:text-base xl:text-lg font-extralight">Shop our drops & everyone’s favourites.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-20 xl:gap-y-24 p-4 w-[99%] md:w-full max-w-7xl mx-auto text-center">
          <div className="text-center hover:cursor-pointer">
            <div className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl">
              <img src="../src/assets/images/product1.jpeg" alt="product_image" className="w-full rounded-2xl"/>
            </div>
            <h2 className="text-base text-gray-800 xl:text-lg font-medium m-3">Bio-repair Rehydrating Serum</h2>
            <p className="text-gray-500 text-xs md:text-base">Content for Product 1.</p>
          </div>
          <div className="text-center hover:cursor-pointer">
            <div className="shadow-md hover:shadow-lg transition-shadow duration-300 mt-7 md:mt-0 rounded-2xl">
              <img src="../src/assets/images/product2.jpeg" alt="product_image" className="object-contain rounded-2xl"/>
            </div>
            <h2 className="text-base text-gray-800 xl:text-lg font-medium m-3">Repair Face Milk</h2>
            <p className="text-gray-500 text-xs md:text-base">Content for Product 2.</p>
          </div>
          <div className="text-center hover:cursor-pointer">
            <div className="shadow-md hover:shadow-lg transition-shadow duration-300 mt-7 md:mt-0 rounded-2xl">
              <img src="../src/assets/images/product3.jpeg" alt="product_image" className="object-contain rounded-2xl"/>
            </div>
            <h2 className="text-base text-gray-800 xl:text-lg font-medium m-3">Barrier Repair Toner</h2>
            <p className="text-gray-500 text-xs md:text-base">Content for Product 3.</p>
          </div>
          <div className="text-center hover:cursor-pointer">
            <div className="shadow-md hover:shadow-lg transition-shadow duration-300 mt-7 md:mt-0 rounded-2xl">
              <img src="../src/assets/images/product4.jpeg" alt="product_image" className="object-contain rounded-2xl"/>
            </div>
            <h2 className="text-base text-gray-800 xl:text-lg font-medium m-3">Oily Skin Cleanser</h2>
            <p className="text-gray-500 text-xs md:text-base">Content for Product 4.</p>
          </div>
          <div className="text-center hover:cursor-pointer">
            <div className="shadow-md hover:shadow-lg transition-shadow duration-300 mt-7 md:mt-0 rounded-2xl">
              <img src="../src/assets/images/product5.jpeg" alt="product_image" className="object-contain rounded-2xl"/>
            </div>
            <h2 className="text-base text-gray-800 xl:text-lg font-medium m-3">Facial Gel Cleanser (105g)</h2>
            <p className="text-gray-500 text-xs md:text-base">Content for Product 5.</p>
          </div>
          <div className="text-center hover:cursor-pointer mb-10">
            <div className="shadow-md hover:shadow-lg transition-shadow duration-300 mt-7 md:mt-0 rounded-2xl">
              <img src="../src/assets/images/product6.jpeg" alt="product_image" className="object-contain rounded-2xl"/>
            </div>
            <h2 className="text-base text-gray-800 xl:text-lg font-medium m-3">Facial Gel Cleanser (280g)</h2>
            <p className="text-gray-500 text-xs md:text-base">Content for Product 6.</p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div id="about_us" className="flex flex-col lg:flex-row gap-2 md:w-[80%] xl:w-[65%] md:h-[59rem] lg:h-[36rem] mt-24 md:mt-20 lg:mt-18 md:mb-15 rounded-2xl m-4 md:mx-auto bg-[#f3f2e6]">
        <div
          className="
            border border-gray-200 w-full lg:w-[45%] h-[24rem] md:h-full
            rounded-2xl
            lg:rounded-tr-none md:rounded-br-none
            rounded-bl-none rounded-br-none
            lg:rounded-bl-2xl
          "
        >
          <img src="" alt="products_linedup" className="" />
        </div>
        <div className="flex flex-col w-full lg:w-[55%] rounded-2xl md:items-start justify-around text-left p-4 gap-y-10 lg:gap-y-2">
          <span>
            <p className="text-sm">
              Happiness guarantee
            </p>
            <h1 className="text-2xl md:text-[36px] font-semibold">
              Love it, or it's on us.
            </h1>
          </span>
          <div className="flex flex-row gap-2 items-center">
            <div className="border border-gray-300 w-18 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-2xl p-2 flex items-center justify-center bg-white">
              <img src="https://cdn-icons-png.flaticon.com/128/18610/18610337.png" alt="_icon" className="object-contain w-12 h-12"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-base md:text-xl">
                Confidence in every bottle
              </h1>
              <p className="text-xs md:text-base font-extralight">
                Feel radiant with cosmetics that work as hard as you do
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="border border-gray-300 w-18 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-2xl p-2 flex items-center justify-center bg-white">
              <img src="https://cdn-icons-png.flaticon.com/128/14362/14362783.png" alt="_icon" className="object-contain w-12 h-12"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-base md:text-xl">
                Timeless formulas
              </h1>
              <p className="text-xs md:text-base font-extralight">
                Ageless beauty with products crafted to enhance your natural glow.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="border border-gray-300 w-18 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-2xl p-2 flex items-center justify-center bg-white">
              <img src="https://cdn-icons-png.flaticon.com/128/1769/1769041.png" alt="_icon" className="object-contain w-12 h-12"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-base md:text-xl">
                For all of us
              </h1>
              <p className="text-xs md:text-base font-extralight">
                Inclusive products that celebrate every body, everywhere.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center mb-4">
            <div className="border border-gray-300 w-14 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-2xl p-2 flex items-center justify-center bg-white">
              <img src="https://cdn.prod.website-files.com/676d87378093040ba9ee597e/677fee12ab16541469375ea0_scale-comparison-alt.svg" alt="_icon" className="object-contain w-9 h-9"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-base md:text-xl">
                Pure & ethical
              </h1>
              <p className="text-xs md:text-base font-extralight">
                Clean ingredients, no compromises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="flex flex-col lg:flex-row gap-x-5 w-full p-4 lg:p-15 justify-between mt-15 mb-10">

        <div className="flex flex-col text-left w-full mx-auto lg:w-[55%] m-3 md:text-center lg:text-left">
          <p className="text-sm lg:text-base font-light">FAQs</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold">Your answers to popular questions</h1>
        </div>

        <div className="w-full flex flex-col space-y-7">

         {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}

        </div>
      </div>

      {/*Contact us Section*/}
      <div id="contact_us" className="flex flex-col lg:flex-row justify-between items-start w-full p-4 xl:p-15 md:bg-[#f3f2e6] rounded-2xl lg:mx-auto border-b border-[#f3f2e6]">
        <div className="flex flex-col gap-5 w-full md:w-[80%] lg:w-[45%] lg:p-5 mx-auto">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">Contact Us</h1>
          <p className="text-base lg:text-lg xl:text-lg font-extralight lg:w-[80%]">Feel free to reach out whenever you need help finding the perfect products for your skin.</p>
          <p className="text-base lg:text-lg xl:text-lg font-extralight">Send a message to 
            <a className="w-50 xl:w-60 flex flex-row items-center justify-center text-sm xl:text-lg gap-1 mt-4 mx-auto md:mx-0 border border-[#A3D9B1] rounded-xl py-2 px-2 bg-[#539c66] font-medium hover:bg-green-700 text-white transition-colors duration-300" href="https://wa.me/2348142303540" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384055.png" alt="whatsapp_logo" className="w-6 h-6 xl:w-9 xl:h-9"/>
            +234 814 230 3540
            </a>
            </p>
            <p className="text-base lg:text-lg xl:text-lg font-extralight">or submit an inquiry</p>
        </div>

  {/* Form Field */}
  <form className="flex flex-col w-full max-w-xl xl:max-w-[60%] p-6 mt-7 lg:mt-0 bg-[#f3f2e6] md:bg-white border border-gray-200 rounded-xl shadow-sm space-y-4 mx-auto">
  <div className="flex flex-col md:flex-row gap-4 w-full">
    
    {/* Firstname Field */}
    <div className="flex flex-col w-full">
      <label htmlFor="firstname" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
        Firstname
      </label>
      <input
        id="firstname"
        type="text"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Enter your first name"
        required
      />
    </div>

    {/* Lastname Field */}
    <div className="flex flex-col w-full">
      <label htmlFor="lastname" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
        Lastname
      </label>
      <input
        id="lastname"
        type="text"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Enter your last name"
        required
      />
    </div>
  </div>

  {/*Email Field*/}
     <div className="flex flex-col w-full">
      <label htmlFor="lastname" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Enter your email address"
        required
      />
    </div>

    {/*Message Field*/}
     <div className="flex flex-col w-full">
      <label htmlFor="lastname" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
        Message
      </label>
      <input
        id="message"
        type="textarea"
        className="w-full px-4 py-15 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="What inquiry do you have?"
        required
      />
    </div>

    <input type="submit" className="text-sm md:text-lg xl:text-xl text-[#f3f2e6] px-7 py-2 xl:px-14 xl:py-3 font-semibold bg-[#DB8C96] mx-auto rounded-3xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-black hover:cursor-pointer hover:bg-[#dd7d8a] transition-colors duration-300"/>
</form>

      </div>

      {/* Footer Section */}
  <footer className="bg-white text-gray-700 mt-10 border-gray-300 p-4">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start p-4 gap-y-10 lg:gap-x-16">

    {/* Branding Section */}
    <div className="flex flex-col space-y-4 lg:w-[45%]">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full">
          <img src="../src/assets/images/cropped omose logo.png" alt="Logo" className="w-full h-full object-cover rounded-full"/>
        </div>
        <span className="text-3xl lg:text-4xl font-semibold brand_name text-[#DB8C96]">ÒmoseCeutiques</span>
      </div>
      <p className="text-sm xl:text-base font-light max-w-md">
        Nature-powered skincare focused on your natural glow. <br/>Every formula, a promise to your face.
      </p>
    </div>

    {/* Footer Info Section */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-8 lg:w-[50%] justify-between">

      {/* Contact Info */}
      <div className="space-y-2">
        <h4 className="text-sm xl:text-base font-semibold mb-1">Contact</h4>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4">
            {/* ICON PLACEHOLDER */}
            <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="address_icon" className="object-contain"/>
          </div>
          <p className="text-xs xl:text-sm">Somewhere in lagos on G</p>
        </div>
        <p className="text-xs xl:text-sm">📞 +234 814 230 3540</p>
      </div>

      {/* Quick Links */}
      <div className="space-y-2">
        <h4 className="text-sm xl:text-base font-semibold mb-1">Quick Links</h4>
        <ul className="text-xs space-y-1">
          <li><a href="#about_us" className="hover:underline">About Us</a></li>
          <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#contact_us" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="space-y-2">
        <h4 className="text-sm xl:text-base font-semibold mb-1">Follow Us</h4>
        <div className="flex space-x-4 text-xs xl:text-sm">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" className="w-5 h-5 xl:w-7 xl:h-7"/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/3046/3046121.png" alt="Facebook" className="w-5 h-5 xl:w-7 xl:h-7"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="Twitter" className="w-6 h-6 xl:w-8 xl:h-8"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

{/* Bottom line */}
  <div className="text-center mt-10 text-xs text-gray-500">
    &copy; {new Date().getFullYear()} ÒmoseCeutiques. All rights reserved.
  </div>
    </div>
  );
}