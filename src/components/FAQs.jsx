import FAQItem from "./FAQItem";

export default function FAQs() {

    const faqs = [
        {
          question: "Will the products bleach me?",
          answer:
            "Òmose products don't bleach or whiten. Rather, the products lighten/brighten to within your natural limits. This is because of the presence of exfoliants like lactic acid, brighteners like niacinamide and ingredients that inhibit melanin production like licorice root extract. \nTherefore light skinned Africans will remain light skinned whilst dark skinned Africans will remain dark skinned.",
        },
        {
          question: "Do Òmose products darken?",
          answer:
            "Òmose products are more focused on hydrating the skin, restoring/improving the skin's barrier functions are helping to regulate sebum production. \nAs a result, they don't change skin colour. Naturally light skinned Africans won't be made darker and dark skinned Africans won't be made light.",
        },
        {
          question: "What are the side effects; acne breakouts for example?",
          answer:
            "No negative side effects have been recorded from consistent use of Òmose products.\nFirst time users especially those with allergies are encouraged to patch test products before applying. Users with historically reactive skin who opt for the full Òmose routine are advised to ease into it by staggering the implementation of the routine.\nThis is achieved by beginning the routine one product at a time and leaving a gap of 3-4 weeks before another product in the kit is adopted into the routine.",
        },
        {
          question: "Must I use all the products?",
          answer:
            "No you mustn't but whatever product(s) you choose to incorporate into your routine must be used consistently and as specified.",
        },
      ];
      
    return(
        <>
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
        </>
    );
}