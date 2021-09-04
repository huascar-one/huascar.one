import { useState } from "react";
import { Element } from "react-scroll";

export const ContactsCard = ({ numberCard }: any) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  const [error, seterror] = useState(false);
  const [success, setSuccess] = useState(false);
  const SendMsg = () => {
    if (name !== "" && email !== "" && msg !== "") {
      console.log({ name, email, msg });
      seterror(false);
      setSuccess(true);
    } else {
      setSuccess(false);
      seterror(true);
    }
  };

  return (
    <Element
      className={`card-inner animated contacts ${
        numberCard === 4 ? "active" : "hidden"
      }`}
      name="contacts-card"
    >
      <div className="card-wrap">
        <div className="content contacts">
          <div className="title">Contactame!</div>

          <div className="row">
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="contact_form">
                <form id="cform">
                  <div className="row">
                    <div className="col col-d-6 col-t-6 col-m-12">
                      <span style={{ color: "#ff9800" }}>Nombre Completo</span>
                      <div className="group-val">
                        <input
                          type="text"
                          placeholder="Escriba tu nombre Completo..."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col col-d-6 col-t-6 col-m-12">
                      <span style={{ color: "#ff9800" }}>
                        {" "}
                        Correo Electronico
                      </span>
                      <div className="group-val">
                        <input
                          type="text"
                          placeholder="Escribe tu Correo Electronico..."
                          onChange={(e) => setemail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                    </div>
                    <div className="col col-d-12 col-t-12 col-m-12">
                      <span style={{ color: "#ff9800" }}>Mensaje</span>

                      <div className="group-val">
                        <textarea
                          placeholder="Escribe tu mensaje..."
                          onChange={(e) => setmsg(e.target.value)}
                          value={msg}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {error && (
                    <span style={{ color: "#CF6679" }}>
                      Error, llena todos los campos
                    </span>
                  )}
                  {success && (
                    <span style={{ color: "#4caf50" }}>
                      Mensaje Enviado Correctamente
                    </span>
                  )}
                  <div className="align-left">
                    <a onClick={SendMsg} className="button">
                      <span className="text">Enviar Mensaje</span>
                      <span className="arrow"></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
        {/* <div className="content contacts">
        <div className="title">Contactame!</div>

        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="map" id="map"></div>
            <div className="info-list">
              <ul>
                <li>
                  <strong>Address . . . . .</strong> California, USA
                </li>
                <li>
                  <strong>Email . . . . .</strong> adlard@example.com
                </li>
                <li>
                  <strong>Phone . . . . .</strong> +123 654 78900
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
     
      </div> */}{" "}
      </div>
    </Element>
  );
};
