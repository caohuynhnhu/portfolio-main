import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
//import Projects from '@/components/Projects';
//import Awards from '@/components/Awards';
//import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <Projects />
      <Awards />
      <Contact /> */}
      <Footer />
    </main>
  );
}