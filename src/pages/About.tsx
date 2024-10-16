import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faFutbol, faTrophy } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <div className="p-8 bg-secondary overflow-y-auto">
      {/* About Us Title */}
      <h1 className="text-4xl font-bold text-center mb-6 mt-14">About Us</h1>

      {/* Company History Section */}
      <section className="mb-8 bg-white shadow-lg rounded-lg p-6 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4 text-center md:text-left">Multilingual School Unified!</h2>
          {/* Image placed here for mobile layout */}
          <div className="md:hidden mb-4">
            <img src="/img/about.jpg" alt="Company Image" className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" />
          </div>
          <p className="mb-2 text-gray-600">
            Founded in 2019, Multilingual School Unified is dedicated to empowering individuals through language learning. In an increasingly interconnected world, we recognize the growing demand for proficiency in languages such as
            English, Korean, and Japanese. Our mission is to provide high-quality, accessible courses that equip our students with the skills they need to thrive in a globalized environment.
          </p>
          <p className="text-gray-600 mb-2">
            At the heart of our success is our commitment to innovative teaching methods. We leverage the latest pedagogical strategies to create dynamic and engaging learning experiences. Our team comprises experienced educators and
            language specialists from diverse cultural backgrounds, each bringing unique perspectives and expertise to the classroom. This diversity enriches our curriculum and fosters a vibrant learning atmosphere.
          </p>
          <p className="text-gray-600 mb-2">
            We prioritize the professional development of our instructors, ensuring they are well-equipped with the latest methodologies and technologies in language education. This commitment not only enhances the quality of our courses
            but also inspires our educators to continually seek new ways to engage and motivate students.
          </p>
          <p className="text-gray-600 font-light italic text-lg md:text-xl bg-secondary p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            Join us at Multilingual School Unified and embark on an exciting journey of language discovery and cultural exploration!
          </p>
        </div>
        <div className="hidden md:w-1/2 mt-6 md:mt-0 md:block">
          <img src="/img/about.jpg" alt="Company Image" className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105" />
        </div>
      </section>

      {/* Meet Our Team Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center mt-10 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-xl">
            <img src="/img/john-doe.jpg" alt="John Doe" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              John Doe<span className="text-gray-500 font-light text-lg"> - CEO</span>
            </h3>
            <p className="mt-2 text-gray-700">
              John Doe brings over 15 years of experience in the education industry, having held various leadership roles focused on curriculum development and innovation. His visionary leadership has driven Multilingual School Unified to
              become a leader in language education.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-xl">
            <img src="/img/jane-smith.jpg" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Jane Smith<span className="text-gray-500 font-light text-lg"> - CTO</span>
            </h3>
            <p className="mt-2 text-gray-700">
              Jane Smith is a technology enthusiast with over 10 years of experience in the education sector. She specializes in leveraging innovative tech solutions to enhance learning experiences. As CTO, Jane has played a key role in
              implementing cutting-edge educational technologies that drive student engagement and success.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-xl">
            <img src="/img/alice-johnson.jpg" alt="Alice Johnson" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
            <p className="text-gray-500">Head of Lecturers</p>
            <p className="mt-2 text-gray-700">
              Alice Johnson has over 12 years of experience in language education and curriculum development. As Head of Lecturers, she is dedicated to fostering a collaborative and supportive environment for educators. Alice's expertise in
              instructional design ensures our teaching team delivers high-quality language instruction.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>

      {/* Culture Section */}
      <section className="mb-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Our Culture</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <p className="text-gray-700 mb-4">
              At Multilingual School Unified, we cultivate a vibrant culture that emphasizes collaboration, respect, and inclusivity. We believe that a supportive learning environment fosters curiosity and creativity, allowing our students
              to thrive.
            </p>
            <p className="text-gray-700 mb-4">
              Our students are encouraged to engage in immersive experiences and cultural events, which deepen their understanding and appreciation of the languages they study. From language clubs to cultural festivals, we offer diverse
              extracurricular activities that allow students to practice their skills in real-world contexts, enhancing their educational journey.
            </p>
            <p className="text-gray-700 mb-4">
              We strive to create a supportive atmosphere where every student feels empowered to express themselves and explore new horizons. Whether you’re a beginner or looking to advance your language skills, our dedicated instructors
              are here to guide you every step of the way.
            </p>
          </div>
          <div>
            <img src="/img/culture.jpg" alt="Cultural Event" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        <div className="flex justify-around mt-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faComments} className="text-blue-500 mb-2" size="2x" />
            <p className="text-center text-gray-700">Language Clubs</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faFutbol} className="text-blue-500 mb-2" size="2x" />
            <p className="text-center text-gray-700">Cultural Festivals</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faTrophy} className="text-blue-500 mb-2" size="2x" />
            <p className="text-center text-gray-700">Extracurricular Activities</p>
          </div>
        </div>
      </section>

      <section className="mb-8 p-6 text-center">
        <p className="text-3xl font-semibold italic text-gray-900 mb-4 animate__animated animate__fadeIn animate__delay-2s">“Where Every Language Opens New Doors”</p>
        <p className="text-md text-yellow-500">Join us on a journey of discovery through language learning!</p>
      </section>
    </div>
  );
};

export default About;
