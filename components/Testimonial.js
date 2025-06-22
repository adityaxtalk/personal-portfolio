import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teacgherImage from "url:../assets/teacher.jpg";
import cdacImage from "url:../assets/cdac.jpg";
import clientImage from "url:../assets/client.jpg";

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

const testimonials = [
  {
    name: "Dr. Archana Chaudhari",
    role: "Final Year Project Mentor",
    image: teacgherImage,
    rating: 5,
    description:
      "Aditya always maintained a good academic record in all subjects. He was among the few students who completed their assignments and practical work such as topic, project report and synopsis before the stipulated time with precision and optimum results. His performance can be ascribed to his lucid concepts and strong fundamentals in data preprocessing, reinforcement learning.",
  },
  {
    name: "Anil Kumar Gupta",
    role: "CDAC, IEEE senior member",
    image: cdacImage,
    rating: 5,
    description:
      "I have had an extremely wonderful and pleasant experience working with Aditya. He is quite diligent, committed/eager to learn, a team worker, his initiative-taking and innovative nature pleasantly surprised me. One of the best interns I ever had the privilege to work with.",
  },
  {
    name: "Supendra",
    role: "Client",
    image: clientImage,
    rating: 5,
    description:
      "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
};

const Testimonial = () => {
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
    <section className="testimonial section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What people say about me</span>

      <div className="testimonial__container container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial__content" key={index}>
              <div className="testimonial__data">
                <div className="testimonial__header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial__img"
                  />
                  <div>
                    <h3 className="testimonial__name">{testimonial.name}</h3>
                    <span className="testimonial__client">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i
                      key={i}
                      className="uil uil-star testimonial__icon-star"
                    ></i>
                  ))}
                </div>
              </div>

              <p className="testimonial__description">
                {testimonial.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
