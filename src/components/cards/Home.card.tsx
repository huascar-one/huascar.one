import Image from "next/image";
import logo from "public/logo.png";
import ReactTyped from "react-typed";

export const HomeCard = () => (
  <div className="card-started" id="home-card">
    <div className="profile">
      <div className="slide">
        <div style={{ zIndex: 0 }}>
          <Image
            src={require("public/images/bg.jpg")}
            layout="fill"
            placeholder="blur"
          ></Image>
        </div>
      </div>

      <div className="image">
        <Image src={logo} alt="" />
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

      {/* <div className="social">
        <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
          <span className="fab fa-dribbble"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
          <span className="fab fa-twitter"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/">
          <span className="fab fa-github"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
          <span className="fab fa-spotify"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/">
          <span className="fab fa-stack-overflow"></span>
        </a>
      </div> */}

      <div className="lnks">
        <a href="#" className="lnk">
          <span className="text">Descargar CV</span>
        </a>
        <a href="#" className="lnk discover">
          <span className="text">Contactame</span>
        </a>
      </div>
    </div>
  </div>
);
