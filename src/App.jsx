import './App.css'
import { useState } from "react";
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Certificates from './Certificates/Certificates';
import Contact from './Contact/Contact';

function App() {

  const [darkmode, setDarkMode] = useState(true);
  const [englishMode, setEnglishMode] = useState(true)

  return (
      <>
        <Navbar
          darkmode={darkmode}
          setDarkMode={setDarkMode}
          englishMode={englishMode}
          setEnglishMode={setEnglishMode}/>
        <main>
          <Home darkmode={darkmode} englishMode={englishMode} />
          <About darkmode={darkmode} englishMode={englishMode} />
          <Skills darkmode={darkmode} englishMode={englishMode}/>
          <Projects darkmode={darkmode} englishMode={englishMode}/>
          <Certificates darkmode={darkmode} englishMode={englishMode}/>
          <Contact darkmode={darkmode} englishMode={englishMode}/>
        </main>
      </>
  )
}

export default App
