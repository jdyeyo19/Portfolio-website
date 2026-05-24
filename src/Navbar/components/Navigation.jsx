import { HatGlasses, MessageCircle, Menu, X} from "lucide-react";

export default function Navigation({darkmode, menuOpen, englishMode}){
    return(
        <div
          className={`align-items-center justify-content-between w-100
          ${menuOpen ? "d-block mt-3" : "d-none"} d-lg-flex`}
        >

          {/* Redes sociales */}
          <div className="d-flex gap-3 align-items-center justify-content-center my-3 my-lg-0 social-list">
            <a href="https://www.linkedin.com/in/juan-david-martinez-hernandez-bba14023a/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_640.png"
                alt="LinkeIn_logo"
                className="social-icon"
              />
            </a>
            <a href="https://github.com/jdyeyo19" target="_blank" rel="noreferrer">
                <img
                    src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                    alt="github_logo"
                    className="social-icon"
                />
            </a>
            <a href="https://wa.me/+573182893664" target="_blank" rel="noreferrer">
              <img
                    src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png"
                    alt="whatsapp_logo"
                    className="social-icon"
                />
            </a>
          </div>


          {/* Navegación */}
          <ul className="d-flex flex-column flex-lg-row list-unstyled gap-3 ms-lg-auto text-center m-0 p-0">
            <li className="nav-item">
              <a className={`nav-link ${darkmode?"text-white":"text-dark"}`} href="#home">{englishMode?"Home":"Inicio"}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${darkmode?"text-white":"text-dark"}`} href="#about">{englishMode?"About":"Sobre mí"}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${darkmode?"text-white":"text-dark"}`} href="#projects">{englishMode?"Projects":"Proyectos"}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${darkmode?"text-white":"text-dark"}`} href="#contact">{englishMode?"Contact":"Contacto"}</a>
            </li>
          </ul>
        </div>
    )
}