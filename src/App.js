import Layout from './Components/Navbar.js';

import Home from './Components/Home.js';
import './App.scss';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Skills from './Components/Skills/Skill';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <>
      <Layout />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>  
    );
}

export default App;
