import backgroundImage2 from '../assets/images/woman_holding_cream_landscape.png';
import backgroundImage4 from '../assets/images/woman with cream on her face.jpeg';

export default function SecondSection() {
    return(
        <>
        <div
                className="hidden flex-1 md:flex flex-col justify-center items-center hover:cursor-pointer bg-[#f3f2e6] rounded-none h-[100vh]">
                <div className="relative w-full h-[100vh] m-0 p-0" >
                  {/* Overlay */}
        
            {/* Content */}
            <div className="relative z-20 flex items-center md:p-7 xl:p-11 w-full h-full rounded-2xl md:rounded-none border border-black justify-end" style={{
            backgroundImage: `url(${backgroundImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="absolute inset-0 bg-black blur-[1px] z-0 opacity-10 lg:opacity-6"></div>
              <span className="text-base sm:text-lg md:text-xl text-[#f3f2e6] text-left md:w-[60%] lg:w-[50%] xl:w-[50%]">
                <h1 className="leading-12 xl:leading-16 header text-4xl xl:text-6xl mt-30 mb-4">The face cream your skin has been waiting for.</h1>
                <p className=" mt-2 text-base xl:text-xl mb-5">Crafted for confidence. <br/> Powered by botanicals. <br/>Made for the face that tells <span className="font-bold"> your</span> story.</p>
                <button
              className="
               text-black
                border border-gray-300 rounded-lg bg-white 
                px-4 py-3 xl:px-3 xl:py-4 z-30
                text-base xl:text-[20px] font-medium hover:cursor-pointer header
              "
              style={{ maxWidth: "max-content" }}
            >
              Shop now
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
                      <div className="absolute inset-0 bg-black blur-[1px] z-0 opacity-15 rounded-2xl"></div>
                      <h1 className="text-3xl leading-[31px] header">The face cream your skin has been waiting for.</h1>
                      <p className="text-[11px] mb-4 mt-3">Crafted for confidence. <br/> Powered by botanicals. <br/>Made for the face that tells <span className="font-bold"> your</span> story.</p>
                      <button
                        className="
                          border border-gray-300 rounded-2xl bg-white text-black 
                          px-3 py-2 z-30
                          text-[13px] font-medium hover:cursor-pointer header
                        "
                        style={{ maxWidth: "max-content" }}
                      >
                        Shop now
                      </button>
                    </span>
                  </div>
                </div>
              </div>
        </>
    );
}