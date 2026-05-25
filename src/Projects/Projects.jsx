import { useState, useEffect } from "react";
import {CircleArrowRight, CircleArrowLeft} from 'lucide-react'

import littleLemonR from '../assets/littleLemonProject.png'

const projects = [
  {
    title: "Little Lemon Restaurant",
    spTitle:"Restaurante Pequeño Limón",
    image:littleLemonR,
    description:
      "Aplicación front-end para restaurante, en ella podras ver información del negocio, menu, y simular la reserva de una mesa.",
    englishDescription: "Front-end application for restaurants, in which you can view business information, menu, and simulate a table reservation.",
    technologies: ["HTML & CSS","React", "Bootstrap5"],
    link: "https://littlelemon-seven.vercel.app/",
  },

  {
    title: "Task Management App",
    spTitle:"Aplicación de gestión de tareas",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    description: "Sistema de gestión de tareas colaborativo con función de arrastrar y soltar, actualizaciones en tiempo real y análisis de productividad.",
    englishDescription:"Collaborative task management system with drag and drop, real-time updates and productivity analytics.",
    technologies: ["React", "Tailwind", "Django REST"],
    link: "https://example.com",
  },

  {
    title: "Analytics Dashboard",
    spTitle:"Panel de Análisis",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description:"Panel de control interactivo para la visualización de datos a gran escala con filtros, gráficos e informes exportables.",
    englishDescription:"Interactive dashboard for large-scale data visualization with filters, charts and exportable reports.",
    technologies: ["React", "Bootstrap", "PostgreSQL"],
    link: "https://example.com",
  },

  {
    title: "Portfolio Website",
    spTitle:"Portafolio Personal",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    description:"Portafolio personal con interfaz de usuario adaptable, animaciones fluidas y rendimiento optimizado para la web moderna.",
    englishDescription:"Personal portfolio with responsive UI, smooth animations and optimized performance for modern web.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://example.com",
  },
];

function Projects({darkmode,englishMode}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const difference = index - current;

    if (difference === 0) {
      return {
        transform: "translateX(0) translateZ(180px) scale(1)",
        opacity: 1,
        zIndex: 5,
      };
    }

    if (
      difference === -1 ||
      difference === projects.length - 1
    ) {
      return {
        transform:
          "translateX(-320px) translateZ(0) rotateY(25deg) scale(0.85)",
        opacity: 0.6,
        zIndex: 3,
      };
    }

    if (
      difference === 1 ||
      difference === -(projects.length - 1)
    ) {
      return {
        transform:
          "translateX(320px) translateZ(0) rotateY(-25deg) scale(0.85)",
        opacity: 0.6,
        zIndex: 3,
      };
    }

    return {
      transform: "translateX(0) scale(0.6)",
      opacity: 0,
      zIndex: 1,
    };
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: darkmode?"#0f172a":"white",
        padding: "100px 20px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: darkmode?"white":"black",
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          {englishMode?"Projects":"Proyectos"}
        </h2>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "650px",
            perspective: "1400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projects.map((project, index) => {
            const position = getPosition(index);

            return (
              <div
                key={project.title}
                style={{
                  position: "absolute",
                  width: "min(90vw, 500px)",
                  background: "#0f172a",
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: "all 0.8s ease",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  ...position,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "260px",
                  }}
                />

                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      fontSize: "1.6rem",
                      margin: 0,
                    }}
                  >
                    {englishMode?project.title:project.spTitle}
                  </h3>

                  <p
                    style={{
                      color: "#cbd5e1",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {englishMode?project.englishDescription:project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: "#1e293b",
                          color: "#38bdf8",
                          padding: "8px 14px",
                          borderRadius: "999px",
                          fontSize: "0.9rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "fit-content",
                      padding: "12px 22px",
                      borderRadius: "12px",
                      background: "#38bdf8",
                      color: "#020617",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                  >
                    {englishMode?"See Project":"Ver Proyecto"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores */}
        <div
          className="d-flex justify-content-center gap-3 mt-4"
        >
        <button
        style={{
          backgroundColor:"#0f172a",
          borderRadius: "50%",
          marginBottom: "1rem"
        }}
          onClick={()=>{
            if((current-1) < 0){
              let max = projects.length - 1;
              setCurrent(max);
            }else{
              setCurrent(current-1);
            }
            }}
        ><CircleArrowLeft style={{
          width:"100%"
        }} color="#38bdf8" fill="#1e293b" /></button>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: current === index ? "30px" : "12px",
                height: "12px",
                borderRadius: "999px",
                border: "none",
                background:
                  current === index ? "#38bdf8" : "#475569",
                transition: "0.3s",
              }}
            />
          ))}
          <button
            style={{
              backgroundColor:"#0f172a",
              borderRadius: "50%",
              marginBottom: "1rem"
            }}
            onClick={()=>{
              if((current + 1) > (projects.length-1)){
                setCurrent(0);
              }else{
                setCurrent(current+1);
              }
              }}
          ><CircleArrowRight style={{
          width:"100%"
        }} color="#38bdf8" fill="#1e293b" /></button>
        </div>
      </div>
    </section>
  );
}

export default Projects;