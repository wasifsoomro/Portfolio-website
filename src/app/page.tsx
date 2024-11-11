import About from "./(components)/About";
import HeroSection from "./(components)/HeroSection";
import Projects from "./(components)/Projects";
import Skills from "./(components)/Skills";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
