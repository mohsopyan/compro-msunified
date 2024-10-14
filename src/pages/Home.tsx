import React from "react";
import "animate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faBookOpen, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface Service {
  title: string;
  description: string;
  link: string;
  icon: any; 
}

const services: Service[] = [
  {
    title: "English Language Course",
    description: "Join our immersive English courses designed to improve your speaking, writing, and comprehension skills. Perfect for all levels!",
    link: "/services/english",
    icon: faLanguage,
  },
  {
    title: "한국어 강좌",
    description: "Discover the beauty of the Korean language with our expert instructors. Engage in fun activities that boost your conversational skills!",
    link: "/services/korean",
    icon: faBookOpen,
  },
  {
    title: "日本語のコース",
    description: "Immerse yourself in the Japanese language and culture through interactive lessons. Ideal for beginners to advanced learners!",
    link: "/services/japanese",
    icon: faGlobe,
  },
];

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="hero relative w-full h-[70vh] bg-cover bg-center md:h-screen" style={{ backgroundImage: "url('src/img/hero-section.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-white text-center p-6">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Multilingual School Unified</h1>
          <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">We are dedicated to providing the best services for our students and making a difference in the industry.</p>
          <p className="text-sm italic mb-8 animate__animated animate__fadeIn animate__delay-1s">"Our mission is to innovate and lead in our field, ensuring excellence in everything we do."</p>
          <p className="text-xl italic mb-8 animate__animated animate__fadeIn animate__delay-2s">“Where Every Language Opens New Doors”</p>
          <a href="#services" className="border mt-20 hover:bg-primary text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Get Started
          </a>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 ">Company Overview</h2>

        <div className="max-w-4xl mx-auto bg-slate-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-slate-900 flex flex-col md:flex-row">
          <img src="/src/img/msu.png" alt="Description of image" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4 object-cover" />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">Multilingual School Unified</h2>
            <p className="mb-4 text-white">
              Founded in 2019, Multilingual School Unified aims to empower individuals through language learning. We offer high-quality courses in English, Korean, and Japanese, responding to the growing demand for these skills in a
              globalized world.
            </p>
            <p className="mb-4 text-white">
              Our commitment to innovative teaching methods has established us as a leader in language education. Our dedicated team consists of experienced educators and language specialists from diverse cultural backgrounds.
            </p>
            <p className="mb-4 text-white">We focus on creating engaging learning environments and prioritize professional development to ensure our instructors are equipped with the latest teaching methodologies.</p>
            <p className="mb-4 text-white">
              At Multilingual School Unified, we cultivate a culture of collaboration, respect, and inclusivity. We value curiosity and creativity, encouraging students to engage in immersive experiences and cultural events.
            </p>
            <p className="text-white">Our goal is to make language learning enjoyable and enriching for everyone involved.</p>
          </div>
        </div>

        {/* Section team */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mt-10 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-xl relative">
              <div className="overflow-hidden rounded-lg">
                <img src="/src/assets/john-doe.jpg" alt="John Doe" className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">John Doe</h3>
              <p className="text-gray-500">CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-xl relative">
              <div className="overflow-hidden rounded-lg">
                <img src="/src/assets/alice-johnson.jpg" alt="Alice Johnson" className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Alice Johnson</h3>
              <p className="text-gray-500">Head of Lecturers</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-xl relative">
              <div className="overflow-hidden rounded-lg">
                <img src="/src/assets/jane-smith.jpg" alt="Jane Smith" className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Jane Smith</h3>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Language Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-secondary">
              <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <a href={service.link} className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">What Students Say</h2>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {/* Testimonial Item 1 */}
            <div className="bg-white shadow-lg rounded-lg p-9">
              <p className="italic mb-4">
                "Learning Korean at Multilingual School Unified has been amazing! The interactive classes and experienced instructors boosted my confidence. Now I enjoy understanding Korean dramas and songs. Highly recommend!"
              </p>
              <h4 className="font-semibold text-primary">- Tracy Gibson</h4>
              <p className="text-gray-500">Korean Language Students</p>
            </div>
            {/* Testimonial Item 2 */}
            <div className="bg-white shadow-lg rounded-lg p-9">
              <p className="italic mb-4">"I’m thrilled with my progress in the Japanese course at MSU. The classes are interactive and fun, making learning enjoyable. Highly recommend it to anyone interested in Japanese!"</p>
              <h4 className="font-semibold text-primary">- Jose Rojas</h4>
              <p className="text-gray-500">Japan Language Students</p>
            </div>
            {/* Testimonial Item 3 */}
            <div className="bg-white shadow-lg rounded-lg p-10">
              <p className="italic mb-4">"Learning English here has been enjoyable and rewarding. The friendly atmosphere and well-structured lessons keep me motivated. I look forward to every class!"</p>
              <h4 className="font-semibold text-primary">- Katarina Bekic</h4>
              <p className="text-gray-500">English Language Students</p>
            </div>
            {/* Add more testimonials as needed */}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;
