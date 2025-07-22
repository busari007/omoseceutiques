import backgroundImage1 from '../assets/images/woman_in_spa.png';
import backgroundImage3 from '../assets/images/woman_in_spa(potrait).png';

export default function FirstSection() {

    return(
        <>
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
              <span className="text-base sm:text-lg md:text-xl text-[#f3f2e6] text-left md:w-[50%] lg:w-[37%] xl:w-[40%]">
                <h1 className="leading-11 xl:leading-16 header text-5xl xl:text-7xl mt-36 mb-4 xl:mb-6">Glow naturally everyday</h1>
                <p className="mb-4 mt-2 text-base xl:text-xl xl:w-[70%]">Discover our skincare essentials, crafted with love and powered by nature.</p>
                <button
              className="
               text-black
                border border-gray-300 rounded-lg bg-white 
                px-4 py-3 xl:px-5 xl:py-4 z-30
                text-base xl:text-[20px] font-medium hover:cursor-pointer header
              "
              style={{ maxWidth: "max-content" }}
            >
              Wear it
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
                    <span className="justify-end z-10 flex flex-col h-full text-base sm:text-lg md:text-xl text-[#f3f2e6] w-[90%] p-7">
                      <h1 className="text-3xl leading-8 header">Glow naturally everyday</h1>
                      <p className="text-[11px] mb-4 mt-2">Discover our skincare essentials, crafted with love and powered by nature.</p>
                      <button
                        className="
                          border border-gray-300 rounded-2xl bg-white text-black 
                          px-3 py-2 z-30
                          text-[13px] font-medium hover:cursor-pointer header
                        "
                        style={{ maxWidth: "max-content" }}
                      >
                        Wear it
                      </button>
                    </span>
                  </div>
                </div>
              </div>
        </>
    );
}