import logo from "public/logo.png";
import Image from "next/image";
import { Element } from "react-scroll";

export const AboutCard = ({ numberCard }: any) => (
  <Element
    className={`card-inner animated ${numberCard === 1 ? "active" : "hidden"}`}
    name="about-card"
  >
    <div className="card-wrap">
      <div className="content about">
        <div className="title">Acerca de mi</div>

        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="text-box">
              <p>
                Soy Huascar Morales, desarrollador de Software de Bolivia, La
                Paz. Tengo una amplia experiencia en creacion y mantenimiento de
                Paginas Web y Aplicaciones Web. Tambien desarrollo aplicaciones
                moviles para Android en Google Play Store. Me encanta superar
                obstaculos con programacion!.
              </p>
            </div>
          </div>
          {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age . . . . .</strong> 24
                </li>
                <li>
                  <strong>Residence . . . . .</strong> USA
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
                <li>
                  <strong>Address . . . . .</strong> California, USA
                </li>
              </ul>
            </div>
          </div> */}
          <div className="clear"></div>
        </div>
      </div>

      {/* <div className="content pricing">
        <div className="title">Pricing</div>

        <div className="row pricing-items">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="pricing-item">
              <div className="icon">
                <i className="fa fa-battery-half"></i>
              </div>
              <div className="name">Basic</div>
              <div className="amount">
                <span className="dollar">$</span>
                <span className="number">22</span>
                <span className="period">hour</span>
              </div>
              <div className="feature-list">
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li className="disable">Music Writing</li>
                  <li className="disable">
                    Photography <strong>new</strong>
                  </li>
                </ul>
              </div>
              <div className="lnks">
                <a href="#" className="lnk">
                  <span className="text">Buy Basic</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="pricing-item">
              <div className="icon">
                <i className="fa fa-battery-full"></i>
              </div>
              <div className="name">Pro</div>
              <div className="amount">
                <span className="dollar">$</span>
                <span className="number">48</span>
                <span className="period">hour</span>
              </div>
              <div className="feature-list">
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li>Music Writing</li>
                  <li>
                    Photography <strong>new</strong>
                  </li>
                </ul>
              </div>
              <div className="lnks">
                <a href="#" className="lnk">
                  <span className="text">Buy Pro</span>
                </a>
              </div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div> */}

      {/* <div className="content fuct">
        <div className="title">Fun Fact</div>

        <div className="row fuct-items">
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-music"></span>
              </div>
              <div className="name">80 Albumes Listened</div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-trophy"></span>
              </div>
              <div className="name">15 Awards Won</div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-coffee"></span>
              </div>
              <div className="name">1 000 Cups of coffee</div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-flag"></span>
              </div>
              <div className="name">10 Countries Visited</div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div> */}

      {/* <div className="content clients">
        <div className="title">Clients</div>

        <div className="row client-items">
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <Image
                    src={require("public/images/clients/client_1.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <Image
                    src={require("public/images/clients/client_2.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <Image
                    src={require("public/images/clients/client_3.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <Image
                    src={require("public/images/clients/client_4.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div> */}

      {/* <div className="content quote">
        <div className="title">
          <span>Quote</span>
        </div>

        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-item">
              <div className="text">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className="user">
                <div className="img">
                  <Image src={logo} alt="Huascar Morales" />
                </div>
                <div className="info">
                  <div className="name">Huascar Morales</div>
                  <div className="company">Web Designer</div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div> */}
    </div>
  </Element>
);
