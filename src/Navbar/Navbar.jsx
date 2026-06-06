import { useState, useEffect } from "react";
import { HatGlasses, MessageCircle, Menu, X, Sun, Moon } from "lucide-react";
import Navigation from "./components/Navigation";



function Navbar({darkmode, setDarkMode, englishMode, setEnglishMode}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detectar scroll
  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // bajar -> esconder
      } else {
        setShowNavbar(true); // subir -> mostrar
      }
      setLastScrollY(currentScrollY);
    };
    const handleMouseMove = (e) => {
      if (e.clientY < 80) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, [lastScrollY]);

  return (

    <nav
      className={`pnavbar navbar-expand-lg shadow-sm px-3 py-2 fixed-top`}
      style={{
        backgroundColor: darkmode?"#0f172a":"white",
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease"
      }}
    >

      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1 className={`fw-bold fs-4 ${darkmode ? "text-light":""}`}>
            Juan David Martinez
          </h1>
          <div className="d-flex">
            <button
              className="btn btn-outline-primary p-1 mx-2"
              onClick={()=>setEnglishMode(!englishMode)}>{englishMode?"English":"Español"}</button>
            <button
              className={darkmode ? "sun":"moon"}
              onClick={()=> setDarkMode(!darkmode)}>
                {darkmode? <Sun />:<Moon />}
            </button>
          </div>
        </div>
        {/* Botón hamburguesa */}
        <button
          className="btn d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} color={darkmode? "white":"black"}/> : <Menu size={28} color={darkmode? "white":"black"}/>}
        </button>
        {/* App content */}
        <Navigation darkmode={darkmode} menuOpen={menuOpen} englishMode={englishMode} />
      </div>
    </nav>
  );
}

export default Navbar;
