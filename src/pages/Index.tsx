// import { Navbar } from '@/components/Navbar';
// import { Hero } from '@/components/Hero';
// import { About } from '@/components/About';
// import { Skills } from '@/components/Skills';
// import { Experience } from '@/components/Experience';
// import { Projects } from '@/components/Projects';
// import { Education } from '@/components/Education';
// import { Contact } from '@/components/Contact';
// import { Footer } from '@/components/Footer';

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Education />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;



import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
