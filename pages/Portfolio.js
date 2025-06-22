import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import source1 from "url:../assets/source1.png";
import source2 from "url:../assets/source2.png";
import source3 from "url:../assets/source3.jpg";
import Testimonial from "../components/Testimonial";

const projects = [
  {
    title: "E-Commerce Web Application",
    description:
      "Ecommerce web app built with Angular, NodeJS & SQL Server. Fully responsive with rich UI.",
    image: source3,
    link: "https://github.com/adityaxtalk/Organic-Shop",
  },
  {
    title: "Stock Market Prediction Web App",
    description:
      "Predicts stock prices using Deep Reinforcement Learning with sentiment and technical analysis.",
    image: source2,
    link: "https://github.com/adityaxtalk/Stock-Market-Prediction-Web-App",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "CNN-based digit recognition, useful in banking to process handwritten cheques.",
    image: source1,
    link: "https://github.com/adityaxtalk/Machine-Learning/blob/master/handwritten_digit_recognition.ipynb",
  },
];

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <i className="uil uil-angle-right-b" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <i className="uil uil-angle-left-b" />
  </button>
);

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
       <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="portfolio__content grid">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio__img"
              />
              <div className="portfolio__info">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--flex button--small portfolio__button"
                >
                  Source Code <i className="uil uil-arrow-right button__icon" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    <Testimonial/>
    </>
    
  );
};

export default Portfolio;
