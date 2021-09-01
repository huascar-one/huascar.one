import Image from "next/image";
import logo from "public/logo.png";

export const HomeCard = () => (
  <div className="card-started" id="home-card">
    <div className="profile">
      <div
        className="slide"
        style={{ backgroundImage: "url(images/bg.jpg)" }}
      ></div>

      <div className="image">
        <Image src={logo} alt="" />
      </div>

      <div className="title">Huascar Morales</div>
      <div className="subtitle subtitle-typed">
        <div className="typing-title">
          <p>Desarrollador Web</p>
          <p>Desarrollador de Apps Moviles</p>
          <p>Freelancer</p>
        </div>
      </div>

      <div className="social">
        <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
          <span className="fa fa-dribbble"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
          <span className="fa fa-twitter"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/">
          <span className="fa fa-github"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
          <span className="fa fa-spotify"></span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/">
          <span className="fa fa-stack-overflow"></span>
        </a>
      </div>

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
