import cream_on_hands from "../assets/images/cream_on_hands.png";
export default function FourthSection() {

    return(
        <>
        <div id="about_us" className="flex flex-col lg:flex-row gap-7 md:w-[80%] xl:w-[65%] md:h-[59rem] lg:h-[36rem] mt-24 md:mt-20 lg:mt-18 md:mb-15 rounded-2xl m-4 md:mx-auto bg-[#f3f2e6]">
                <div
                  className="
                    border border-gray-200 w-full lg:w-[45%] h-[24rem] lg:h-full
                    rounded-2xl
                    lg:rounded-tr-none md:rounded-br-none
                    rounded-bl-none rounded-br-none
                    lg:rounded-bl-2xl
                  "
                >
                  <img src={cream_on_hands} alt="products_linedup" className="w-full h-full object-cover  rounded-2xl
                    lg:rounded-tr-none md:rounded-br-none
                    rounded-bl-none rounded-br-none
                    lg:rounded-bl-2xl" />
                </div>
                <div className="flex flex-col w-full lg:w-[45%] rounded-2xl md:items-start justify-around text-left p-4 gap-y-10 md:gap-y-8 lg:gap-y-2">
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
                  <div className="flex flex-row gap-2 items-center mb-4 md:mb-8">
                    <div className="border border-gray-300 w-14 h-16 md:w-18 md:h-18 lg:w-14 lg:h-18 rounded-2xl p-2 flex items-center justify-center bg-white">
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
        </>
    );
}