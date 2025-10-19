import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
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
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ThemeToggle />
        <LanguageSelector />
        <main>
          {sections[activeSection] || sections.home}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
