import { useState } from "react";
import { Element } from "react-scroll";
import { ContactMsg } from "src/types/ContactMsg";

export const ContactsCard = ({ numberCard }: any) => {
  // const [contactMessage, setContactMessage] = useState<ContactMsg>({
  //   name: "",
  //   email: "",
  //   msg: "",
  // });
  // const [error, seterror] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const SendMsg = () => {
  //   if (
  //     contactMessage.name !== "" &&
  //     contactMessage.email !== "" &&
  //     contactMessage.msg !== ""
  //   ) {
  //     console.log(contactMessage);
  //     seterror(false);
  //     setSuccess(true);
  //   } else {
  //     setSuccess(false);
  //     seterror(true);
  //   }
  // };

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
          <a
            style={{
              display: "flex",
              justifyContent: "center ",
            }}
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=59179134768&text=Hola%20Huascar!"
          >
            <button>Mandame un WhatsApp</button>
          </a>
          {/* <div className="row">
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
                          value={contactMessage.name}
                          onChange={(e) =>
                            setContactMessage({
                              ...contactMessage,
                              name: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setContactMessage({
                              ...contactMessage,
                              email: e.target.value,
                            })
                          }
                          value={contactMessage.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="col col-d-12 col-t-12 col-m-12">
                      <span style={{ color: "#ff9800" }}>Mensaje</span>

                      <div className="group-val">
                        <textarea
                          placeholder="Escribe tu mensaje..."
                          onChange={(e) =>
                            setContactMessage({
                              ...contactMessage,
                              msg: e.target.value,
                            })
                          }
                          value={contactMessage.msg}
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
       */}
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
