import { NextSeo } from "next-seo";
import Head from "next/head";
import { AboutCard } from "src/components/cards/About.card";
import { BlogCard } from "src/components/cards/Blog.card";
import { ContactsCard } from "src/components/cards/Contacts.card";
import { HomeCard } from "src/components/cards/Home.card";
import { ResumeCard } from "src/components/cards/Resume.card";
import { WorksCard } from "src/components/cards/Works.card";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Huascar - Desarrollador de Software"
        description="Dejame ayudarte con tu proyecto Web (App Web o Pagina Web) con Javascript, React, etc. Tambien desarrollo aplicaciones moviles para Android!"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/blogs.css" />
        <link
          rel="stylesheet"
          href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />

        <link rel="stylesheet" href="css/gradient.css" />

        <link rel="stylesheet" href="css/new-skin/new-skin.css" />

        <link rel="stylesheet" href="css/demos/demo-2-colors.css" />

        <link rel="stylesheet" href="css/new-skin/classNameic-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />

        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.validate.js"></script>
        <script src="js/jquery.magnific-popup.js"></script>
        <script src="js/imagesloaded.pkgd.js"></script>
        <script src="js/isotope.pkgd.js"></script>
        <script src="js/jquery.slimscroll.js"></script>
        <script src="js/owl.carousel.js"></script>
        <script src="js/typed.js"></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz2w7HUaWudHwd7AWQpCL48Qs050WOn9s"></script>

        <script src="js/scripts.js"></script>
      </Head>
      <div className="page new-skin">
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="background gradient">
          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div
          className="container opened"
          data-animation-in="fadeInLeft"
          data-animation-out="fadeOutLeft"
        >
          <Header />

          <HomeCard />
          <AboutCard />
          <ResumeCard />
          <WorksCard />
          <BlogCard />
          <ContactsCard />
        </div>

        <div className="s_overlay"></div>
        <div className="content-sidebar">
          <div className="sidebar-wrap search-form">
            <aside id="secondary" className="widget-area">
              <section id="search-2" className="widget widget_search">
                <label>
                  <span className="screen-reader-text">Search for:</span>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Search …"
                    value=""
                    name="s"
                  />
                </label>
                <input type="submit" className="search-submit" value="Search" />
              </section>
              <section className="widget widget_recent_entries">
                <h2 className="widget-title">
                  <span className="widget-title-span">
                    <span className="first-word">Recent</span> Posts
                  </span>
                </h2>
                <ul>
                  <li>
                    <a href="#">Creativity Is More Than</a>
                  </li>
                  <li>
                    <a href="#">Designing the perfect</a>
                  </li>
                  <li>
                    <a href="#">Music Player Design</a>
                  </li>
                  <li>
                    <a href="#">A Song And Dance Act</a>
                  </li>
                  <li>
                    <a href="#">By spite about do of allow</a>
                  </li>
                </ul>
              </section>
              <section className="widget widget_recent_comments">
                <h2 className="widget-title">
                  <span className="widget-title-span">
                    <span className="first-word">Recent</span> Comments
                  </span>
                </h2>
                <ul>
                  <li className="recentcomments">
                    <span className="comment-author-link">JOHN SMITH</span> on{" "}
                    <a href="#">Creativity Is More Than</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">ADAM SMITH</span> on{" "}
                    <a href="#">Creativity Is More Than</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">admin</span> on{" "}
                    <a href="#">Designing the perfect</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">admin</span> on{" "}
                    <a href="#">Designing the perfect</a>
                  </li>
                  <li className="recentcomments">
                    <span className="comment-author-link">James</span> on{" "}
                    <a href="#">Designing the perfect</a>
                  </li>
                </ul>
              </section>
              <section className="widget widget_archive">
                <h2 className="widget-title">
                  <span className="widget-title-span">
                    <span className="first-letter">Archives</span>
                  </span>
                </h2>
                <ul>
                  <li>
                    <a href="#">November 2018</a>
                  </li>
                </ul>
              </section>
              <section className="widget widget_categories">
                <h2 className="widget-title">
                  <span className="widget-title-span">
                    <span className="first-letter">Categories</span>
                  </span>
                </h2>
                <ul>
                  <li className="cat-item cat-item-2">
                    <a href="#">Design</a>
                  </li>
                  <li className="cat-item cat-item-3">
                    <a href="#">Music</a>
                  </li>
                </ul>
              </section>
              <section className="widget widget_meta">
                <h2 className="widget-title">
                  <span className="widget-title-span">
                    <span className="first-letter">Meta</span>
                  </span>
                </h2>
                <ul>
                  <li>
                    <a href="#">Log in</a>
                  </li>
                  <li>
                    <a href="#">Entries feed</a>
                  </li>
                  <li>
                    <a href="#">Comments feed</a>
                  </li>
                  <li>
                    <a href="#">WordPress.org</a>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
          <span className="close"></span>
        </div>
      </div>
    </>
  );
}
