export default function ContactUs() {
    return(
        <>
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
  <form
  action="https://formsubmit.co/sophiassecretsng@gmail.com" 
  method="POST"
  className="flex flex-col w-full max-w-xl xl:max-w-[60%] p-6 mt-7 lg:mt-0 bg-[#f3f2e6] md:bg-white border border-gray-200 rounded-xl shadow-sm space-y-4 mx-auto"
>
  <div className="flex flex-col md:flex-row gap-4 w-full">
    <div className="flex flex-col w-full">
      <label htmlFor="firstname" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
        Firstname
      </label>
      <input
        id="firstname"
        name="firstname"
        type="text"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Enter your first name"
        required
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="lastname" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
        Lastname
      </label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Enter your last name"
        required
      />
    </div>
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="email" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
      Email Address
    </label>
    <input
      id="email"
      name="email"
      type="email"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      placeholder="Enter your email address"
      required
    />
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="message" className="mb-1 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      placeholder="What inquiry do you have?"
      required
    />
  </div>

  <input 
    type="submit" 
    value="Send Message"
    className="text-sm md:text-lg text-[#f3f2e6] px-7 py-2 xl:px-14 xl:py-3 font-semibold bg-[#DB8C96] mx-auto rounded-3xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-black hover:cursor-pointer hover:bg-[#dd7d8a] transition-colors duration-300"
  />
</form>

      </div>
        </>
    );
}