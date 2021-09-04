import Image from "next/image";
import logo from "public/logo.png";
import ReactTyped from "react-typed";
import MemoMail from "src/svg/Mail";
import MemoMan from "src/svg/Man";
import MemoStar from "src/svg/Star";
import MemoTool from "src/svg/Tool";
export const Header = () => (
  <header className="header">
    <div className="profile">
      <div className="image">
        <a href="#">
          <Image src={logo} alt="Huascar Morales" />
        </a>
      </div>
      <div className="title">Huascar Morales</div>

      <div className="subtitle subtitle-typed">
        <ReactTyped
          loop
          typeSpeed={50}
          backSpeed={20}
          strings={[
            "Desarrollador Web",
            "Freelancer",
            "Desarrollador de Apps Moviles",
          ]}
          smartBackspace
          shuffle={false}
          backDelay={1}
          fadeOut={false}
          fadeOutDelay={100}
          loopCount={0}
          showCursor
          cursorChar="|"
        />
      </div>
    </div>

    {/* <a href="#" className="menu-btn">
      <span></span>
    </a> */}

    <div className="top-menu">
      <ul>
        <li className="active">
          <a href="#about-card">
            <div className="svgContainer">
              <MemoMan />
            </div>
            <span className="link">Yo</span>
          </a>
        </li>
        <li>
          <a href="#resume-card">
            <div className="svgContainer">
              <MemoStar />
            </div>
            <span className="link">Habilidades</span>
          </a>
        </li>
        {/* <li>
          <a href="#works-card">
            <span className="icon ion-paintbrush"></span>
            <span className="link">Proyectos</span>
          </a>
        </li> */}
        <li>
          <a href="#blog-card">
            <div className="svgContainer">
              <MemoTool />
            </div>
            <span className="link">Servicios</span>
          </a>
        </li>
        <li>
          <a href="#contacts-card">
            <div className="svgContainer">
              <MemoMail />
            </div>
            <span className="link">Contacto</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
);
