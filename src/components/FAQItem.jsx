import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col text-left w-full h-fit p-8 border border-[#f3f2e6] bg-[#f3f2e6] rounded-2xl items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="font-medium text-lg xl:text-2xl">
          {question}
        </h1>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
          alt="plus sign"
          className={`w-4 h-4 cursor-pointer transform transition-transform duration-300 ${
            isVisible ? "rotate-[45deg]" : "rotate-0"
          }`}
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>

      {isVisible && (
        <p className="m-4 transition-opacity duration-300 ease-in-out text-sm lg:text-base font-light w-full">
          {answer}
        </p>
      )}
    </div>
  );
}
