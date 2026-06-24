import Navbar from "../components/Navbar";
import LandingPage from "./LandingPage";

import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.jpeg";
import product4 from "../assets/images/product4.jpeg";
import product5 from "../assets/images/product5.jpeg";
import product6 from "../assets/images/product6.jpeg";
import product7 from "../assets/images/product7.jpeg";
import product8 from "../assets/images/product8.jpeg";
import product9 from "../assets/images/product9.png";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import FourthSection from "../components/FourthSection";
import FAQs from "../components/FAQs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Products from "../components/Products";


export default function Home() {

  return (
    <div className="flex flex-col max-w-screeen">
      <Navbar />
      {/* <LandingPage /> */}

      <FirstSection /> {/*The First Header*/}

      <SecondSection /> {/*The Second Header*/}

      <Products /> {/*The Third Section describing the products*/}

      <FourthSection /> {/*The Fourth Section describing us*/}

      <FAQs /> {/* The section containing facts and questions */}

      <ContactUs /> {/*The Contact us section*/}

      <Footer /> {/*The Footer section*/}

{/* Bottom line */}
  <div className="text-center mt-10 text-xs text-gray-500">
    &copy; {new Date().getFullYear()} Eloclaire. All rights reserved.
  </div>
    </div>
  );
}