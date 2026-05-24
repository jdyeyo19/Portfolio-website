import imgProfile from '../assets/IMG_20260522_085415.jpg'

function About({darkmode, englishMode}) {
  return (
    <section
      id="about"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        backgroundColor: darkmode?"#0f172a":"white",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1000px",
        }}
      >
        <h2
          id="conoceme"
          className="fw-bold text-center mb-5"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: darkmode?"#ffffff":"black",
          }}
        >
          {englishMode?"About me":"Conóceme"}
        </h2>

        <div
          className='d-flex flex-column align-items-center flex-md-row'
        >
          <img
          src={imgProfile}
          style={{
            maxWidth: "200px",
            maxHeight: "342px",
            borderRadius: "16px",
          }}/>
          <div className='p-md-5'>
            <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: "1.9",
              color: darkmode?"#cbd5e1":"#34373a",
              textAlign: "justify",
            }}
          >
            {englishMode?"I am a passionate Fullstack developer, specializing in React.js, Django + REST Framework, and PostgreSQL. My experience combines technical skills with a solid grasp of large data volumes, acquired while working as a data entry clerk.":
            "Soy un desarrollador Fullstack apasionado, especializado en React.js, Django + REST Framework y PostgreSQL. Mi experiencia combina habilidades técnicas con un sólido manejo de grandes volúmenes de datos, adquirido trabajando como data entry clerk."}
          </p>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: "1.9",
              color: darkmode?"#cbd5e1":"#34373a",
              textAlign: "justify",
            }}
          >
            {englishMode?"I am motivated to solve complex problems efficiently and persistently, always ensuring I deliver complete and high-quality solutions. In addition to programming, I have advanced knowledge of Excel and VBA Macros, as well as some experience with Figma for UX/UI design, allowing me to effectively connect design and development.":
            "Me motiva resolver problemas complejos de manera eficiente y persistente, siempre asegurándome de entregar soluciones completas y de alta calidad. Además de la programación, cuento con conocimientos avanzados de Excel y Macros VBA, así como nociones de Figma para diseño UX/UI, lo que me permite conectar diseño y desarrollo de manera efectiva."}
          </p>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: "1.9",
              color: darkmode?"#cbd5e1":"#34373a",
              textAlign: "justify",
            }}
          >
            {englishMode?"With English as my second language, I am always looking to learn and expand my skills to stay current in modern web development. I am ready to contribute to projects that challenge me and create impactful digital experiences."
            :"Con inglés como segunda lengua, siempre busco aprender y expandir mis habilidades para mantenerme actualizado en el desarrollo web moderno. Estoy listo para aportar a proyectos que me desafíen y que generen experiencias digitales de impacto."}
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
