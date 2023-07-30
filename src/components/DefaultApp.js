/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
// import bullet from "../Img/bullet.svg";
import close from "../Img/close.svg";
// import dots from "../Img/dots.svg";
import holdingPhone from "../Img/holding-phone.jpg";
import illustration from "../Img/illustration.svg";
import person1 from "../Img/person-1.jfif";
import menu from "../Img/menu.svg";
import person2 from "../Img/person-2.jfif";
import person3 from "../Img/person-3.jpg";
import video from "../Img/video.svg";

const DefaultApp = () => {
  // const mobileBtn = document.getElementById("mobile-cta");
  // const nav = document.querySelector("nav");
  // const mobileBtnExit = document.getElementById("mobile-exit");

  // mobileBtn.addEventListener("click", () => {
  //   nav.classList.add("menu-btn");
  // });

  // mobileBtnExit.addEventListener("click", () => {
  //   nav.classList.remove("menu-btn");
  // });
  return (
    <div className="App">
      {/* <!--NAVIGATION BLOG START--> */}
      <div className="nav-bar">
        <div className="container">
          <a className="logo-nav" href="">
            Remember<span>That</span>
          </a>
          <img
            id="mobile-cta"
            className="mobile-menu"
            src={menu}
            alt="navigation"
          />
          <nav>
            <img
              id="mobile-exit"
              className="mobile-menu-exit"
              src={close}
              alt="close navigation"
            />
            <ul className="primary-nav">
              <li className="current">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>

            <ul className="second-nav">
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="go-premium-cta">
                <a href="#">Go Premium</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!--NAVIGATION BLOG END--> */}

      {/* <!--SECTION HERO BLOG START--> */}
      <section className="hero">
        <div className="container">
          <div className="left-col">
            <p className="sub-head">it's nitty &amp; gritty</p>
            <h1>a task app that doesn't stink</h1>

            <div className="hero-cta">
              <a href="#" className="primery-cta">
                Try for free
              </a>
              <a href="#" className="watch-video-cta">
                <img src={video} alt="Video Clip" />
                Watch a video
              </a>
            </div>
          </div>

          <img src={illustration} alt="Illustration" className="hero-img" />
        </div>
      </section>
      {/* <!--SECTION HERO BLOG END--> */}

      {/* <!--SECTION FEATURES BLOG START--> */}
      <section className="features-section">
        <div className="container">
          <ul>
            <li>unlimited tasks</li>
            <li>confetti Explosions upon task completions</li>
            <li>real time collaboration</li>
            <li>sms task reminder</li>
            <li>social media announcement</li>
            <li>other awesome features</li>
          </ul>
        </div>
        <img src={holdingPhone} alt="phone" />
      </section>
      {/* <!--SECTION FEATURES BLOG END--> */}

      {/* <!--SECTION TEST  BLOG START--> */}
      <section className="test-monials-section">
        <div className="container">
          <ul>
            {/* <!--PERSON 1--> */}
            <li>
              <img src={person1} alt="Person 1" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Sergio de Paula</cite>
            </li>

            {/* <!--PERSON 2--> */}
            <li>
              <img src={person2} alt="Person 2" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Craig McKay</cite>
            </li>

            {/* <!--PERSON 3--> */}
            <li>
              <img src={person3} alt="Person 3" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Jane Doe</cite>
            </li>
          </ul>
        </div>
      </section>
      {/* <!--SECTION TEST  BLOG END--> */}

      {/* <!--SECTION CONTACT  BLOG START--> */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-left">
            <h2>Contact</h2>
            <form action="#" method="post">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>

              <input type="submit" value="send message" className="send-message" />
            </form>
          </div>

          <div className="contact-left"></div>
        </div>
      </section>

      {/* <!--JAVASCRIPT START-->
     <script>
            
     </script> */}
    </div>
  );
};

export default DefaultApp;
