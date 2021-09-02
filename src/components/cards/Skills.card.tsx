import Image from "next/image";
import MemoCheckMark from "src/svg/CheckMark";
import MemoCode from "src/svg/Code";
import MemoFlag from "src/svg/Flag";
import MemoList from "src/svg/List";
import MemoPatron from "src/svg/Patron";
import { CircularProgressbar } from "react-circular-progressbar";

export const ResumeCard = () => (
  <div className="card-inner" id="resume-card">
    <div className="card-wrap">
      {/* <div className="content resume">
        <div className="title">Resume</div>

        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2013 - Present</div>
                <div className="name">Art Director</div>
                <div className="company">Facebook Inc.</div>
                <p>
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2011 - 2012</div>
                <div className="name">Front-end Developer</div>
                <div className="company">Google Inc.</div>
                <p>
                  Monitored technical aspects of the front-end delivery for
                  several projects.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer</div>
                <div className="company">Abc Inc.</div>
                <p>Optimize website performance using latest technology.</p>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university"></i>
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2006 - 2008</div>
                <div className="name">Art University</div>
                <div className="company">New York</div>
                <p>
                  Bachelor's Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2005 - 2006</div>
                <div className="name">Programming Course</div>
                <div className="company">Paris</div>
                <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
              </div>
              <div className="resume-item">
                <div className="date">2004 - 2005</div>
                <div className="name">Web Design Course</div>
                <div className="company">London</div>
                <p>
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript
                </p>
              </div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
   
      </div> */}

      <div className="content skills">
        <div className="title">Mis Habilidades</div>

        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <MemoPatron />
                </div>
                <div className="name">Patrones</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Frontend</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }}></div>
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Backend</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }}></div>
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Bases de datos</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}></div>
                  </div>
                </li>
                <li>
                  <div className="name">Docker y Servidores</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list dotted">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <MemoFlag />
                </div>
                <div className="name">Lenguajes</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Ingles</div>
                  <div className="progress">
                    <div className="progress">
                      <div
                        className="percentage"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Aleman</div>
                  <div className="progress">
                    <div className="progress">
                      <div
                        className="percentage"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </li>
                {/* <li className="border-line-h">
              <div className="name">Italian</div>
              <div className="progress">
                <div
                  className="percentage"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </li> */}
                <li>
                  <div className="name">Frances</div>
                  <div className="progress ">
                    <div className="progress">
                      <div
                        className="percentage"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <MemoCode />
                </div>
                <div className="name">Tecnologias</div>
              </div>
              <ul>
                <li>
                  <div className="name">React</div>
                  <CircularProgressbar
                    value={70}
                    text={`${70}%`}
                    styles={{
                      root: { width: "90px" },
                      text: {
                        fill: "rgba(255, 255, 255, 0.85)",
                        fontSize: "17px",
                        fontWeight: 500,
                      },
                      path: { stroke: "#ff9800" },
                      trail: {
                        stroke: "#3e4148",
                      },
                    }}
                  />
                </li>
                <li>
                  <div className="name">React Native</div>
                  <CircularProgressbar
                    value={85}
                    text={`${85}%`}
                    styles={{
                      root: { width: "90px" },
                      text: {
                        fill: "rgba(255, 255, 255, 0.85)",
                        fontSize: "17px",
                        fontWeight: 500,
                      },
                      path: { stroke: "#ff9800" },
                      trail: {
                        stroke: "#3e4148",
                      },
                    }}
                  />
                </li>
                <li>
                  <div className="name">Angular</div>
                  <CircularProgressbar
                    value={60}
                    text={`${60}%`}
                    styles={{
                      root: { width: "90px" },
                      text: {
                        fill: "rgba(255, 255, 255, 0.85)",
                        fontSize: "17px",
                        fontWeight: 500,
                      },
                      path: { stroke: "#ff9800" },
                      trail: {
                        stroke: "#3e4148",
                      },
                    }}
                  />
                </li>
                <li>
                  <div className="name">Docker</div>
                  <CircularProgressbar
                    value={70}
                    text={`${70}%`}
                    styles={{
                      root: { width: "90px" },
                      text: {
                        fill: "rgba(255, 255, 255, 0.85)",
                        fontSize: "17px",
                        fontWeight: 500,
                      },
                      path: { stroke: "#ff9800" },
                      trail: {
                        stroke: "#3e4148",
                      },
                    }}
                  />
                </li>
                <li>
                  <div className="name">Node</div>
                  <CircularProgressbar
                    value={70}
                    text={`${70}%`}
                    styles={{
                      root: { width: "90px" },
                      text: {
                        fill: "rgba(255, 255, 255, 0.85)",
                        fontSize: "17px",
                        fontWeight: 500,
                      },
                      path: { stroke: "#ff9800" },
                      trail: {
                        stroke: "#3e4148",
                      },
                    }}
                  />
                </li>
                <li>
                  <div className="name">MYSQL</div>
                  <CircularProgressbar
                    value={75}
                    text={`${75}%`}
                    styles={{
                      root: { width: "90px" },
                      text: {
                        fill: "rgba(255, 255, 255, 0.85)",
                        fontSize: "17px",
                        fontWeight: 500,
                      },
                      path: { stroke: "#ff9800" },
                      trail: {
                        stroke: "#3e4148",
                      },
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <MemoList />
                </div>
                <div className="name">Conocimientos</div>
              </div>
              <ul>
                <li>
                  <div className="name">Hosteo de paginas web</div>
                </li>
                <li>
                  <div className="name">
                    Asesoramiento para aparecer en Google Maps
                  </div>
                </li>
                <li>
                  <div className="name">Aplicaciones Android</div>
                </li>
                <li>
                  <div className="name">Diseño de Servidores con Docker</div>
                </li>
                <li>
                  <div className="name">Diseño por plantillas </div>
                </li>
                <li>
                  <div className="name">
                    Asesoramiento con la compra de Hosting y/o Dominio.
                  </div>
                </li>
                <li>
                  <div className="name">Desarrollo de microservicios</div>
                </li>
                <li>
                  <div className="name">Optimizacion de Paginas o Apps Web</div>
                </li>
                <li>
                  <div className="name">Web Scraping</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div>

      {/* <div className="content testimonials">
        <div className="title">Testimonials</div>

        <div className="row testimonials-items">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-carousel default-revs">
              <div className="owl-carousel">
                <div className="item">
                  <div className="revs-item">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="user">
                      <div className="img">
                        <Image src={require("public/images/man1.jpg")} alt="" />
                      </div>
                      <div className="info">
                        <div className="name">Helen Floyd</div>
                        <div className="company">Art Director</div>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="revs-item">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="user">
                      <div className="img">
                        <Image src={require("public/images/man1.jpg")} alt="" />
                      </div>
                      <div className="info">
                        <div className="name">Robert Chase</div>
                        <div className="company">CEO</div>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="revs-item">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="user">
                      <div className="img">
                        <Image src={require("public/images/man1.jpg")} alt="" />
                      </div>
                      <div className="info">
                        <div className="name">Helen Floyd</div>
                        <div className="company">Art Director</div>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div>
    */}
    </div>
  </div>
);
