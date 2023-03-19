import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Fragment>
<html lang="en">

<body>

<header id="header" class="fixed-top header-scrolled">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html">Website & Portfolio</a></h1>
      <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto active" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#work">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#services">Learning</a></li>
          <li><a class="nav-link scrollto" href="#blog">Interests</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>

  <main id="main">

  <div id="hero" class="hero route bg-image" src="images/unsplash.jpg" alt="" height="800px" width="1100px" >
    <div class="overlay-itro"> <img src="images/blacksand.jpg" class="img-fluid rounded b-shadow-a" height="800px" alt="" /> </div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          <p class="display-6 color-d">Kaj Tassi</p>
          <h1 class="hero-title mb-4">Web Developer</h1>
           <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p>
        </div>
      </div>
    </div>
  </div>

  <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img src="images/suit.jpg" class="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p><span class="title-s">Name: </span> <span>Kaj Tassi</span></p>
                        <p><span class="title-s">Profile: </span> <span>Full Stack Developer</span></p>
                        <p><span class="title-s">Email: </span> <span>KajTassi63@gmail.com</span></p>
                        <p><span class="title-s">Phone: </span> <span>(650) 291-6792</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="skill-mf">
                    <p class="title-s">Skills & Comfort Level</p>
                    <span>HTML5</span> <span class="pull-right">80%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" width="75%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS3</span> <span class="pull-right">70%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" width="75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JavaScript</span> <span class="pull-right">70%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" width="75%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>PostgreSQL</span> <span class="pull-right">55%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" width="75%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        About me
                      </h5>
                    </div>
                    <p class="lead">
                      My name is Kaj Tass, and I am a San Diego based web developer. I started learning full-stack web development in early 2022 and
                      I spend at least a few hours everyday working on projects, languages and new web features.
                      I have been primarly working with JavaScript, HTML5, CSS3, Node.js, React.js, Express.js and PostgreSQL. 
                    </p>
                    <p class="lead">
                      As an oppurtunity to learn and help others, I am taking on a volunteer web development project for an educational
                      daycare and have a few other personal and professional projects planned in the future. I primarly do React.js based full stack 
                      web applications at the moment but but am learning other languages and framesworks too. I have all of my current projects listed below,
                      and am looking forward to improving some of my completed work. 
                    </p>
                    <p class="lead">
                      For my backround, I have spent the last few years in property management and love working and colaborating with others.
                      In regards to software engineering, I have been learning independantly and was also a graduate of Thinkful's 6 month 
                      online full stack engineering program in November 2022. There is a lot to learn with programming though, and have been enjoying
                      learning new things everyday. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="work" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Portfolio
              </h3>
              <p class="subtitle-a">
                Current projects and their descriptions, follow the github links for tools in the projects and more information. 
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="work-box">
              <a href="https://front-end-three-sand.vercel.app/dashboard" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src="images/restresq.jpg" height="500px" alt="" class="img-fluid" />
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Resturante Reservation App</h2>
                    <div class="w-more">
                    <a class="w-ctegory" href="https://github.com/KajTassi/Resturante-Res" type="text">View Project</a> / <span class="w-date">Live website and full stack application utilizing data tables for a hypothetical resturante.
                      Was the final project for Thinkful's online program</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src="images/Pumpingironsq.jpg" alt="" class="img-fluid" />
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Pumping Iron, Tracking App</h2>
                    <div class="w-more">
                    <a class="w-ctegory" href="https://github.com/KajTassi/ToDoList" type="text">View Project</a> / <span class="w-date">Full stack appliaction built for my brother to track weight lifting records. I wanted another oppurtunity
                      to work on a full stack application.</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src="images/biggerstepssq.JPG" alt="" class="img-fluid" />
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Big Steps Webpage</h2>
                    <div class="w-more">
                    <a class="w-ctegory" href="https://github.com/KajTassi/BigStepsM" type="text">View Project</a> / <span class="w-date">Currently it is in the outline stage, and I still
                      need to decide on content and pictures with the client. Will be a webpage for an educational daycare.</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="assets/img/work-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src="images/flashcardsq.jpg" alt="" class="img-fluid" />
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Flashcard App</h2>
                    <div class="w-more"> 
                    <a class="w-ctegory" href="https://github.com/KajTassi/Flashcard-application" type="text">View Project</a> / <span class="w-date">Frontend application built using React.js for making
                      a flashcard deck for studying. It was a good oppurtunity to practice components in other components.</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="assets/img/work-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src="images/moviessq.jpg" alt="" class="img-fluid" />
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">We Love Movies</h2>
                    <div class="w-more">
                    <a class="w-ctegory" href="https://github.com/KajTassi/Movies-movies" type="text">View Project</a> / <span class="w-date">An Express.js application making use of data tables;
                      built to link into a hypothetical frontend and passed KNEX based tests.</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="work-box">
              <a href="assets/img/work-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src="images/recipesq.jpg" alt="" class="img-fluid" />
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Recipe Creation App</h2>
                    <div class="w-more">
                    <a class="w-ctegory" href="https://github.com/KajTassi/Recipe-App" type="text">View Project</a> / <span class="w-date">First React.js based application, it can store recipes
                      and add new ones. React.js has become one of my favorite framesworks that I use often.</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services-mf pt-5 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Learning Goals
              </h3>
              <p class="subtitle-a">
                I am in progress learning the following skills and features below.
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class="bi bi-briefcase"></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">AWS certification</h2>
                <p class="s-description text-center">
                  I spend 30 minutes to an hour everyday learning and studying for an AWS certification. Being the most
                  common cloud service, I thought it would be a great place to start. I am hoping to have my certification 
                  completed soon and would like to use AWS to launch future web applications. 
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class="bi bi-card-checklist"></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">TypeScript & Python</h2>
                <p class="s-description text-center">
                  I am focusing on adding TypeScript and Python languages to my skill set. I have learned a lot about Python previously
                  and would like to integrate it soon in a backend focused project. TypeScript has been easier to pick up because of 
                  its simularity to JavaScript, and it has taught more about an object orineted programming approach.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class="bi bi-bar-chart"></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Improving Web Features</h2>
                <p class="s-description text-center">
                  The next web feature I am working on would be adding log ins to a website as a means to save individual
                  user information. I would like to impliment this in the weight lifting score tracking app I have already 
                  made; and also believe it is a great feature to be familiar with.  
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <section id="blog" class="blog-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Interests
              </h3>
              <p class="subtitle-a">
                A little more info about me, and what I like to do in freetime. 
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-img">
                <a href="blog-single.html"><img src="images/travelsq.jpg" alt="" class="img-fluid" /></a>
              </div>
              <div class="card-body">
                <div class="card-category-box">
                </div>
                <h3 class="card-title"><a href="blog-single.html">Traveling</a></h3>
                <p class="card-description">
                  I love to take trips once or twice a year with my wife. Our favorite places to visit have been
                  Spain, Italy and Hawaii so far, but we still have a lot of places left to see and our hoping to visit New Zealond soon!
                </p>
              </div>
              <div class="card-footer">
                <div class="post-author">
                  
                    <span class="author">Rome, Italy</span>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-img">
                <a href="blog-single.html"><img src="images/surfsq.jpg" alt="" class="img-fluid" /></a>
              </div>
              <div class="card-body">
                <div class="card-category-box">
                  
                </div>
                <h3 class="card-title"><a href="blog-single.html">Surfing</a></h3>
                <p class="card-description">
                  One of my favorite things to do being located in San Diego is to spend time at the beach and in the water.
                  I am a morning person and usually up early to be able to get out surfing when the sun comes up. 
                </p>
              </div>
              <div class="card-footer">
                <div class="post-author">
                  
                    <span class="author">La Jolla, San Diego</span>
                 
                </div>
                <div class="post-date">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-img">
                <a href="blog-single.html"><img src="images/computersq.jpg" alt="" class="img-fluid" /></a>
              </div>
              <div class="card-body">
                <div class="card-category-box">
              
                </div>
                <h3 class="card-title"><a href="blog-single.html">Software Engineering</a></h3>
                <p class="card-description">
                  Orinally it was computer games that took up a lot of my time; but that is what lead
                  me to programming and now I spend a lot of my time
                  after work and on my days off working on learning and projects.  
                </p>
              </div>
              <div class="card-footer">
                <div class="post-author">
                 
                    <span class="author">* NA</span>
                  
                </div>
                <div class="post-date">
                  <span class="bi bi-clock"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route">
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Send Me a Message
                      </h5>
                    </div>
                    <div>
                      <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                            </div>
                          </div>
                          <div class="col-md-12 text-center my-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div class="col-md-12 text-center">
                            <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        Feel free to reach out about anything related to programming, software engineering, web development,
                        or web based design. I am always open to working with others and looking to plan out new projects.
                      </p>
                      <ul class="list-ico">
                        <li><span class="bi bi-geo-alt"></span> Location: San Diego, California</li>
                        <li><span class="bi bi-phone"></span> (650) 291-6792</li>
                        <li><span class="bi bi-envelope"></span> kajtassi63@gmail.com</li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li><a href="https://github.com/KajTassi"><span class="ico-circle"><i class="bi bi-github"></i></span></a></li>
                        <li><a href="https://www.linkedin.com/in/kaj-tassi-9142b873/"><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>

    <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="copyright-box">
            
          </div>
        </div>
      </div>
    </div>
  </footer>

</body>
</html>
    </Fragment>
  );
}

export default App;
