import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash?.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sections = {
    home: (
      <div className="home-expertise-container">
        <Hero />
        <Expertise />
      </div>
    ),
    about: (
      <div className="about-with-skills">
        <About />
        <Skills />
      </div>
    ),
    // Backward-compatibility: map skills to about-with-skills
    skills: (
      <div className="about-with-skills">
        <About />
        <Skills />
      </div>
    ),
    resume: <Resume />,
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ThemeToggle />
        <main>
          {sections[activeSection] || sections.home}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
