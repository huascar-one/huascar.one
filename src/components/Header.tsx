import Image from "next/image";
import logo from "public/logo.png";
import ReactTyped from "react-typed";
import MemoMail from "src/svg/Mail";
import MemoMan from "src/svg/Man";
import MemoStar from "src/svg/Star";
import MemoTool from "src/svg/Tool";
import { Link } from "react-scroll";
export const Header = ({ onFunction }: any) => (
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
          typeSpeed={100}
          backSpeed={70}
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
        <li>
          <Link
            onClick={() => onFunction(1)}
            to="about-card"
            smooth="true"
            spy={true}
          >
            <div className="svgContainer">
              <MemoMan />
            </div>
            <span className="link">Yo</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => onFunction(2)}
            to="resume-card"
            smooth="true"
            spy={true}
          >
            <div className="svgContainer">
              <MemoStar />
            </div>
            <span className="link">Habilidades</span>
          </Link>
        </li>
        {/* <li>
          <Link onClick={()=>onFunction(1)} to="works-card" smooth="true" spy={true}>
            <span className="icon ion-paintbrush"></span>
            <span className="link">Proyectos</span>
          </Link>
        </li> */}
        <li>
          <Link
            onClick={() => onFunction(3)}
            to="blog-card"
            smooth="true"
            spy={true}
          >
            <div className="svgContainer">
              <MemoTool />
            </div>
            <span className="link">Servicios</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => onFunction(4)}
            to="contacts-card"
            smooth="true"
            spy={true}
          >
            <div className="svgContainer">
              <MemoMail />
            </div>
            <span className="link">Contacto</span>
          </Link>
        </li>
      </ul>
    </div>
  </header>
);
