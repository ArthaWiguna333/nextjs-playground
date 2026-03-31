import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <CardSection />
      </main>
      <Footer />
    </>
  );
}
