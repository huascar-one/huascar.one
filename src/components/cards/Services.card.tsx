import Image from "next/image";
export const BlogCard = () => (
  <div className="card-inner blog" id="blog-card">
    <div className="card-wrap">
      <div className="content services">
        <div className="title">Mis Servicios</div>

        <div className="row service-items border-line-v">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <span className="fa fa-code"></span>
              </div>
              <div className="name">
                <span>Creacion de Paginas Web </span>
              </div>
              <div className="desc">
                <div>
                  <p>
                    Modern and mobile-ready website that will help you reach all
                    of your marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <span className="fa fa-music"></span>
              </div>
              <div className="name">
                <span>Desarrollo de Aplicaciones Moviles </span>
              </div>
              <div className="desc">
                <div>
                  <p>
                    Music copying, writing, creating, transcription, arranging
                    and composition services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <span className="fab fa-buysellads"></span>
              </div>
              <div className="name">
                <span>Desarrollo de Microservicios </span>
              </div>
              <div className="desc">
                <div>
                  <p>
                    Advertising services include television, radio, print, mail,
                    and web apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
            <div className="service-item">
              <div className="icon">
                <span className="fa fa-gamepad"></span>
              </div>
              <div className="name">
                <span>Desarrollo de Servidores y Docker </span>
              </div>
              <div className="desc">
                <div>
                  <p>
                    Developing memorable and unique mobile android, ios and
                    video games.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>

      {/* <div className="content blog">
      
        <div className="title">
          <span>Blog</span>
        </div>

        <div className="row border-line-v">
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="blog-post-new.html">
                  <Image
                    src={require("public/images/blog/blog1.jpg")}
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text"></span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="blog-post-new.html">
                  <span className="date">April 28, 2020</span>
                </a>
                <a href="blog-post-new.html" className="name">
                  By spite about do of allow
                </a>
                <div className="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos&#8230;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="blog-post-new.html">
                  <Image
                    src={require("public/images/blog/blog2.jpg")}
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text"></span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="blog-post-new.html">
                  <span className="date">April 28, 2020</span>
                </a>
                <a href="blog-post-new.html" className="name">
                  By spite about do of allow
                </a>
                <div className="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos&#8230;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="blog-post-new.html">
                  <Image
                    src={require("public/images/blog/blog3.jpg")}
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text"></span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="blog-post-new.html">
                  <span className="date">April 28, 2020</span>
                </a>
                <a href="blog-post-new.html" className="name">
                  By spite about do of allow
                </a>
                <div className="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos&#8230;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="blog-post-new.html">
                  <Image
                    src={require("public/images/blog/blog1.jpg")}
                    alt="By spite about do of allow"
                  />
                  <span className="info">
                    <span className="ion ion-document-text"></span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="blog-post-new.html">
                  <span className="date">April 28, 2020</span>
                </a>
                <a href="blog-post-new.html" className="name">
                  By spite about do of allow
                </a>
                <div className="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos&#8230;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>

        <div className="pager">
          <nav className="navigation pagination">
            <div className="nav-links">
              <span className="page-numbers current">1</span>
              <a className="page-numbers" href="#">
                2
              </a>
              <a className="next page-numbers" href="#">
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
     */}
    </div>
  </div>
);
