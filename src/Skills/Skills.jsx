import { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Bootstrap",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind",
    image:
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Django",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "SQL",
    image:
      "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

function Skills({darkmode, englishMode}) {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !visibleCards.includes(entry.target.dataset.index)
          ) {
            setVisibleCards((prev) => [
              ...prev,
              entry.target.dataset.index,
            ]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "100px 20px",
        backgroundColor: darkmode?"#020617":"#FDFBF4",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: darkmode?"white":"black",
          }}
        >
          {englishMode?"Skills":"Habilidades"}
        </h2>

        <div
          className="d-flex flex-wrap justify-content-center gap-4"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              style={{
                width: "140px",
                height: "140px",
                background: darkmode?"#0f172a":"#fdfdfd",
                borderRadius: "20px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.05)",
                transform: visibleCards.includes(index.toString())
                  ? "translateY(0)"
                  : "translateY(80px)",
                opacity: visibleCards.includes(index.toString())
                  ? 1
                  : 0,
                transition: `all 0.6s ease ${
                  index * 0.1
                }s`,
              }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                style={{
                  width: "55px",
                  height: "55px",
                  objectFit: "contain",
                }}
              />

              <h3
                style={{
                  color: darkmode?"white":"#0d6efd",
                  fontSize: "0.95rem",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;