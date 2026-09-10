import { useState, useEffect } from "react";
import bgLight from "../assets/homebglight.png";
import bgDark from "../assets/homebgdark.png";

function Home({ darkmode, englishMode }) {
  const texts = ["Soy Juan David Martinez", "Desarrollador Full Stack"];
  const enTexts = ["I am Juan David Martinez", "Full Stack Developer"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const currentText = englishMode ? enTexts[textIndex] : texts[textIndex];

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  //mostrar bg color mientras carga la imagen
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Mientras carga la nueva imagen,
    // mostramos nuevamente el color de fondo.
    setImageLoaded(false);
    const img = new Image();

    const backgroundImage  = darkmode ? bgDark : bgLight;

    img.src = backgroundImage;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageLoaded(false);
    };

  }, [darkmode]);

  return (
    <section
      id="home"
      className="container-fluid d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundColor: imageLoaded? undefined : darkmode ? "#0f172a":"white",
        backgroundImage: imageLoaded
          ? `url(${darkmode ? bgDark : bgLight})`
          : "none",
      }}
    >
      <div>
        {/* Titulo principal */}
        <h1
          className={`display-4 mb-3 fw-bold ${darkmode ? "text-light" : ""}`}
        >
          {englishMode ? "Hello there" : "Bienvenidos"}
        </h1>

        {/* Texto animado */}
        <h2 className="mb-4 text-primary">
          {displayText}
          <span className="typing-cursor">|</span>
        </h2>

        {/* Descripción */}
        <p className={`lead ${darkmode ? "text-light" : ""}`}>
          {`${englishMode ? "Specialize in" : "Especializado en"} MySQL, React js, y Django Framework.`}
        </p>
      </div>
    </section>
  );
}

export default Home;
