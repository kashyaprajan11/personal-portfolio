import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import socials from "./json/social";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      {/* Header */}
      <Header socials={socials} />
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-center">
        <About />
      </section>
      <section className="snap-center">
        <WorkExperience />
      </section>
      <section className="snap-start">
        <Skills />
      </section>
      <section className="snap-start">
        <Projects />
      </section>
    </div>
  );
}

export default App;
