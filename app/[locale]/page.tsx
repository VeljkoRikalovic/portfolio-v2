import About from "../_components/About";
import Contact from "../_components/Contact";
import Hero from "../_components/Hero";
import Navigation from "../_components/Navigation";
import Projects from "../_components/Projects";
import SplashCursor from "../_components/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SplashCursor SPLAT_RADIUS={0.01} SPLAT_FORCE={0.1} />
    </div>
  );
}
