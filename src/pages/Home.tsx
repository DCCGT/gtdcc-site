import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Values } from "../components/Values";
import { Methodology } from "../components/Methodology";
import { Partner } from "../components/Partner";
import { Opportunities } from "../components/Opportunities";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="size-full" style={{ backgroundColor: '#ebebeb', color: '#141414' }}>
      <Hero />
      <About />
      <Values />
      <Methodology />
      <Partner />
      <Opportunities />
      <Contact />
      <Footer />
    </div>
  );
}
