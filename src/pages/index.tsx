import { NextSeo } from "next-seo";
import Head from "next/head";
import { AboutCard } from "src/components/cards/About.card";
import { BlogCard } from "src/components/cards/Services.card";
import { ContactsCard } from "src/components/cards/Contact.card";
import { HomeCard } from "src/components/cards/Home.card";
import { ResumeCard } from "src/components/cards/Skills.card";
import { Header } from "src/components/Header";
import { useState } from "react";

export default function Home() {
  const [activeCard, setActiveCard] = useState(1);
  const ChangeActiveCard = (numberCard: number) => {
    setActiveCard(numberCard);
  };
  console.log(activeCard);
  return (
    <>
      <NextSeo
        title="Huascar - Desarrollador de Software en La Paz > Bolivia"
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
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/gradient.css" />
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-2-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
      </Head>

      <div className="page new-skin">
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
          <Header onFunction={ChangeActiveCard} />
          <HomeCard onFunction={ChangeActiveCard} />
          <AboutCard numberCard={activeCard} />
          <ResumeCard numberCard={activeCard} />
          <BlogCard numberCard={activeCard} />
          <ContactsCard numberCard={activeCard} />
          {/* <WorksCard numberCard={activeCard}/> */}
        </div>

        <div className="s_overlay"></div>
        {/* <div className="content-sidebar">
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
    */}
      </div>
    </>
  );
}
