import logo from "../assets/images/cropped omose logo.png";
export default function Footer() {
    return(
        <>
  <footer className="bg-white text-gray-700 mt-10 border-gray-300 p-4">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start p-4 gap-y-10 lg:gap-x-16">

    {/* Branding Section */}
    <div className="flex flex-col space-y-4 lg:w-[45%]">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full">
          <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full"/>
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
            <img src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="address_icon" className="object-contain"/>
          </div>
          <p className="text-xs xl:text-sm">1 Oluyemisi Olajide Close, <br/>Adeniyi Jones, Ikeja, Lagos, Nigeria</p>
        </div>
        <p className="text-xs xl:text-sm">📞 +234 814 230 3540</p>
      </div>

      {/* Quick Links */}
      <div className="space-y-2">
        <h4 className="text-sm xl:text-base font-semibold mb-1">Quick Links</h4>
        <ul className="text-xs space-y-1">
          {/* <li><a href="#about_us" className="hover:underline">About Us</a></li> */}
          <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#contact_us" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="space-y-2">
        <h4 className="text-sm xl:text-base font-semibold mb-1">Follow Us</h4>
        <div className="flex space-x-4 text-xs xl:text-sm">
          <a href="https://www.instagram.com/sophias_secretstg?igsh=MWdhemhxb2VxcjZyNg==" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" className="w-5 h-5 xl:w-7 xl:h-7"/>
          </a>
          <a href="https://www.tiktok.com/@omose.skincare_?_t=ZM-8y9lCgM7Yoi&_r=1" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/3046/3046121.png" alt="tiktok" className="w-5 h-5 xl:w-7 xl:h-7"/>
          </a>
          <a href="https://youtube.com/@omoseskincare?si=Ae7MGAZh1NBSTPLU" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="youtube" className="w-6 h-6 xl:w-8 xl:h-8"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
        </>
    );
}
