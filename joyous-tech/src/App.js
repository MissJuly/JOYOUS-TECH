import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

