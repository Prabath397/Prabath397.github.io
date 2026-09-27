import { ThemeProvider } from './context/ThemeContext';
import { SkipLink } from './components/ui/SkipLink';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { ChatWidget } from './components/chat/ChatWidget';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Work } from './components/sections/Work';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <SkipLink />
        <Header />
        
        <main id="main">
          <Hero />
          <About />
          <Work />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default App;
