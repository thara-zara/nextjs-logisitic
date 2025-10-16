import Navbar from "@/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/components/HeroSection/Hero";
import Number from "@/components/Numbers/Number";
import Service from "@/components/Service/Service";
import Company from "@/components/Company/Company";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="main">
      {/* <div className="navbar_main">
        <Navbar />
      </div> */}
      <div className="heroMain">
        <Hero />
      </div>
      <div className="number-section">
        <Number />
      </div>
      <div className="service-section">
        <Service />
      </div>
      <div className="companyslider">
        <Company />
      </div>
      {/* <div className="foot">
        <Footer />
      </div> */}
    </div>
  );
}
