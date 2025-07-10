export default function LandingPage() {
    return (
        <>
    <div className="hidden md:flex flex-row justify-between w-full mx-auto bg-[#e5e0e0]">
        <img
          src="..\src\assets\images\cropped omose logo.png"
          alt="omose_logo"
          className="absolute left-5 top-3 w-16 h-16 object-cover rounded-full border border-gray-300"
        />
        <div className="flex flex-col m-4 justify-center ml-6">
          <h1 className="text-3xl xl:text-5xl font-bold text-left md:mt-4 md:leading-10 xl:leading-14">
            Elevate Your Skin's Story with{" "}
            <span className="text-4xl text-center md:text-4xl xl:text-5xl font-bold mt-1 md:mt-4 xl:mx-auto text-green-700">
              Òmose Skincare
            </span>
          </h1>

          <p className="w-[70%] md:w-[80%] md:mx-auto mt-2 md:mt- xl:mt-14 text-left md:text-center text-sm md:text-base xl:text-lg font-extralight leading-5 md:leading-6">
            Discover expertly crafted skincare made for people of all skin types. <br /> Shop with{" "}
            <b className="font-semibold">confidence</b>, Glow with{" "}
            <b className="font-semibold">intention</b>.
          </p>

          <button className="rounded-2xl w-[45%] xl:mt-16 bg-green-700 text-white font-semibold py-3 px-6 mt-6 shadow-md hover:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mx-auto hover:cursor-pointer">
            Explore Products
          </button>
        </div>

        <div className="hidden md:flex xl:w-[78%] xl:h-[95vh] rounded-2xl p-1 m-3 mt-5">
          <img
            src="..\src\assets\images\dark_skinned_woman_creaming.png"
            alt="woman_rubbing_cream"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      {/*Mobile Landing Page*/}
      <div
  className="flex md:hidden flex-row justify-between w-full mx-auto bg-cover bg-center"
  style={{ backgroundImage: "url('../src/assets/images/dark-skinned woman rubbing cream.png')" }}
>
        <img
          src="..\src\assets\images\cropped omose logo.png"
          alt="omose_logo"
          className="absolute left-5 top-3 w-12 h-12 object-cover rounded-full border border-gray-300"
        />
        <div className="flex flex-col m-4 justify-center ml-6 text-gray-900">
          <h1 className="text-3xl xl:text-5xl font-bold text-left md:mt-4 md:leading-10 xl:leading-14">
            Elevate Your Skin's Story with{" "}
            <span className="text-4xl text-center md:text-4xl xl:text-5xl font-bold mt-1 md:mt-4 xl:mx-auto text-green-700">
              Òmose Skincare
            </span>
          </h1>

          <p className="w-[70%] md:w-[80%] md:mx-auto mt-2 md:mt- xl:mt-14 text-left md:text-center text-sm md:text-base xl:text-lg font-extralight leading-5 md:leading-6">
            Discover expertly crafted skincare made for people of all skin types. <br /> Shop with{" "}
            <b className="font-semibold">confidence</b>, Glow with{" "}
            <b className="font-semibold">intention</b>.
          </p>

          <button className="rounded-2xl w-[45%] xl:mt-16 bg-green-700 text-white font-semibold py-3 px-6 mt-6 shadow-md hover:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mx-auto hover:cursor-pointer">
            Explore Products
          </button>
        </div>
      </div>
      </>
    );
}