import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Values } from "../components/Values";
import { Partner } from "../components/Partner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="size-full" style={{ backgroundColor: '#ebebeb', color: '#141414' }}>
      <Hero />
      <About />
      <Values />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
