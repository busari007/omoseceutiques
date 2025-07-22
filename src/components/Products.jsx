import { useState } from "react";
import product1 from "../assets/images/product1.jpeg";
import product2 from "../assets/images/product2.jpeg";
import product3 from "../assets/images/product3.jpeg";
import product4 from "../assets/images/product4.jpeg";
import product5 from "../assets/images/product5.jpeg";
import product6 from "../assets/images/product6.jpeg";

export default function Products() {
  const [product, setProduct] = useState(null);

  const items = [
    {
      name: "Bio-repair Rehydrating Serum",
      price: "₦8000",
      description: `<strong>Product description:</strong> <br/>A Vitamin C and antioxidant rich serum that is completely oil-free. Despite being oil-free, consistent daily use results in the dewy look. It has a gel consistency and the colour of blood.<br><br>

<strong>Ingredients:</strong><br>
1. <strong>Niacinamide:</strong> a pharmaceutical active ingredient that works at the cellular level to brighten the skin.<br>
2. <strong>Hyaluronic acid:</strong> a humectant that attracts water at the rate of 1000 × its weight. It works to hydrate the skin at the cellular level. This hydration behaviour causes the skin to reflect light i.e. to achieve effortless glow.<br>
3. <strong>Tocopherol:</strong> a Vitamin E compound that augments the nutritive capacities of other antioxidants. This simply means it makes its fellow ingredients work better and get better and faster results.<br><br>

<strong>How to use:</strong><br>
Apply 4 drops on your face immediately after using the toner.
`,
      image: product1,
    },
    {
      name: "Barrier Repair Toner",
      price: "₦4000",
      description:
        `
<strong>Product description:</strong><br>
A water-based toner whose core function is to actively brighten the face within its natural limits and fight off the effects of inflammation through its combination of antioxidants.<br><br>

The toner is naturally brightening and anti-inflammatory due to these ingredients:<br>
1. <strong>Hibiscus:</strong> antioxidant and vitamin C rich<br>
2. <strong>Licorice root extract:</strong> the presence of the flavonoid, glabridin, inhibits the production of melanin resulting in a lighter skin tone. The presence of the antioxidant glycyrrhizic acid which possesses great anti-inflammatory properties that helps to reduce redness and irritation.<br><br>

<strong>How to use:</strong><br>
It is applied directly onto the wet face immediately after each shower.<br><br>

Please note, the toner contains NO alcohol or synthetic fragrance.
`,
      image: product3,
    },
    {
      name: "Repair Face Milk",
      price: "₦5000",
      description:
        `
<strong>Product description:</strong><br>
A moisturizer made specifically to trap hydration within oily skin without any risk of blocking their skin's pores or triggering acne breakouts.<br><br>

Oily skin is the target skin of this moisturizer in a bid to dispel the myth that oily skin types need not moisturise; being already oily.<br><br>

Daily consistent use of the Repair Face Milk results in a deeply hydrated oil-less face. This is due to the following ingredients:<br><br>

1. <strong>Sunflower and olive oils:</strong><br>
These oils are high in alpha-linolenic, linoleic and oleic acids. These fatty acids are rich in Omega 3; they soothe the skin, help restore proper skin barrier functions and also help to reduce inflammation. They also improve hydration as well as help to regulate sebum production.<br><br>

2. <strong>Hibiscus:</strong><br>
Hibiscus is rich in elastin and mucilage; proteins that support the skin's elasticity.<br><br>

3. <strong>Hyaluronic acid:</strong><br>
Hyaluronic acid is a humectant, able to draw water at a rate of 1000× its weight. It hydrates skin cells at the cellular level and in so doing, helps to regulate sebum production.<br><br>

The Repair Face Milk contains NO synthetic perfume or colorant.<br><br>

<strong>How to use:</strong><br>
A sufficient quantity is applied immediately after applying the Òmose serum. Alternatively, it may be applied immediately after stepping out of the shower, on still wet face.
`,
      image: product2,
    },
    {
      name: "Facial gel cleanser (big size)",
      price: "₦8000",
      description:
        `
<strong>Product description:</strong><br>
A gentle cleanser that contains NO irritants such as soap or synthetic fragrance.<br>
It is pH balanced to ensure the continuous health of your skin's barrier by maintaining its acid mantle as nature intended.<br><br>

It is made from lemongrass which supplies polyphenols and chlorophyll and its hydrating power is increased through the presence of humectants like sodium lactate, glycerine and aloe vera.<br><br>

Its gel consistency makes it a pleasure to use at bath times although it is non-foaming.<br><br>

Do you want the dewy look?? Then you need to add it to your daily routine i.e. use it to wash your face during your morning and evening shower.<br><br>

<strong>How to use:</strong><br>
Apply a little quantity to your wet face and pass it all over; including your neck and behind your ears. Make sure to rinse it off completely immediately afterwards with cool water.
`,
      image: product6,
    },
    {
      name: "Facial gel cleanser (regular size)",
      price: "₦4000",
      description:
        "Same product, different size",
      image: product5,
    },
    {
      name: "Facial gel cleanser (economy size)",
      price: "₦2000",
      description:
        "The small size is travel friendly because it is small enough to pass through customs at any international airport.",
      image: product4,
    },
  ];

  return (
    <>
      <div className="flex-1 flex flex-col items-center w-full mt-20 xl:mt-30 text-center">
        <div className="flex-1 flex flex-col items-center mb-2">
          <h1
            id="products"
            className="text-2xl md:text-2xl xl:text-4xl mb-1 font-medium"
          >
            Our Products
          </h1>
          <p className="text-sm md:text-base xl:text-lg font-extralight">
            Shop our drops & everyone’s favourites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-20 xl:gap-y-24 p-4 w-[99%] md:w-full max-w-7xl mx-auto text-center">
          {items.map((item, index) => (
            <div key={index} className="relative">
              {/* Modal */}
              {product === index && (
                <div
                  className="fixed inset-0 z-30 flex items-center md:items-start justify-center transition-all duration-700"
                  onClick={() => setProduct(null)}
                >
                  <div className="absolute inset-0 bg-black opacity-70"></div>

                  <div
                    className="relative z-40 bg-white rounded-2xl shadow-2xl w-[90%] md:w-full h-screen max-w-xl xl:max-w-4xl max-h-[420px] md:max-h-[365px] lg:max-h-[420px] p-6 m-2 my-auto md:m-10 md:mt-28 overflow-y-scroll"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-3 text-gray-500 hover:text-black text-3xl lg:text-3xl xl:text-4xl font-bold"
                      onClick={() => setProduct(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>

                    <div className="flex flex-col md:flex-row mt-6 md:mt-2 items-center md:items-start justify-between">
                      <div className="w-full md:w-[45%] xl:w-[45%] h-60 md:h-90 flex-shrink-0 mx-auto sticky top-0">
                        <img
                          src={item.image}
                          className="object-cover rounded-xl w-full h-full"
                          alt={item.name}
                        />
                      </div>

                      <div className="w-full md:w-[55%] xl:w-[55%] mx-auto text-center md:text-left md:m-3 md:mt-0 lg:m-0 px-2 mt-2 mb-1 overflow-y-auto">
                        <h2 className="text-lg md:text-xl font-semibold mb-1 text-center">
                          {item.name}
                        </h2>
                        <h2 className="text-sm md:text-base font-semibold mb-2 text-green-700 text-center">
                          {item.price}
                        </h2>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed lg:m-3 " dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product Thumbnail */}
              <div
                className="text-center hover:cursor-pointer"
                onClick={() => {
                  setProduct(index);
                }}
              >
                <div className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-2xl"
                  />
                </div>
                <h2 className="text-base text-gray-800 xl:text-lg font-medium m-3">
                  {item.name}
                </h2>
                <p className="text-sm md:text-base font-semibold mb-2 text-green-700 text-center">
                  {item.price}
                </p>
                <p className="text-gray-500 text-xs md:text-base">
                  Click to learn more...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
