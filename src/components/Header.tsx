import Image from "next/image";
import logo from "public/logo.png"
export const Header = () => (
  <header className="header">
    <div className="profile">
      <div className="image">
        <a href="#">
          <Image
            src={logo}
            alt="Huascar Morales"
          />
        </a>
      </div>
      <div className="title">Huascar Morales</div>
      <div className="subtitle subtitle-typed">
        <div className="typing-title">
          <p>Desarrollador Web</p>
          <p>Desarrollador de Apps Moviles</p>
          <p>Freelancer</p>
        </div>
      </div>
    </div>

    <a href="#" className="menu-btn">
      <span></span>
    </a>

    <div className="top-menu">
      <ul>
        <li className="active">
          <a href="#about-card">
            <span className="icon ion-person"></span>
            <span className="link">Yo</span>
          </a>
        </li>
        <li>
          <a href="#resume-card">
            <span className="icon ion-android-list"></span>
            <span className="link">Resumen</span>
          </a>
        </li>
        <li>
          <a href="#works-card">
            <span className="icon ion-paintbrush"></span>
            <span className="link">Proyectos</span>
          </a>
        </li>
        <li>
          <a href="#blog-card">
            <span className="icon ion-chatbox-working"></span>
            <span className="link">Servicios</span>
          </a>
        </li>
        <li>
          <a href="#contacts-card">
            <span className="icon ion-at"></span>
            <span className="link">Contacto</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
);
