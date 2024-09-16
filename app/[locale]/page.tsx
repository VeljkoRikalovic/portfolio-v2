import About from "../_components/About";
import Contact from "../_components/Contact";
import Hero from "../_components/Hero";
import Navigation from "../_components/Navigation";
import Projects from "../_components/Projects";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
