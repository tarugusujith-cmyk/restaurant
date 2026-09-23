
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import PopularMenu from "../components/home/PopularMenu";
import ReserveSection from "../components/home/ReserveSection";
import ChefsSection from "../components/home/chefsSection";
import CTA from "../components/home/CTA";
import OpeningHours from "../components/home/OpeningHours";
import Footer from "../components/common/Footer";


function Home() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <PopularMenu />
        <ReserveSection />
        <ChefsSection />
        <CTA />
        <OpeningHours />
        <Footer />
      </main>

    </div>
  );
}

export default Home;