import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Service List Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mt-10 mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Item 1: Korean Language Course */}
          <div className="bg-slate-950 shadow-lg rounded-lg p-6 text-white transform transition-transform hover:scale-105 hover:shadow-xl">
            <img src="/src/assets/korea.jpg" alt="Korean Language Course" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">Korean Language Course</h3>
            <p className="mb-4">
              Our Korean Language Course offers a complete learning experience designed for beginners to advanced learners. 
              <br />
              <strong>Offline:</strong> Interactive classroom sessions with cultural activities and real-life practice. 
              <br />
              <strong>Online:</strong> Flexible virtual classes with engaging content and live interaction.
            </p>
            <p className="font-bold text-lg">Price:</p>
            <p>Offline: <span className="font-bold">$200 / month</span></p>
            <p>Online: <span className="font-bold">$150 / month</span></p>
            <p className="italic">*Recommended duration: 3 months*</p>
          </div>

          {/* Service Item 2: Japanese Language Course */}
          <div className="bg-slate-950 shadow-lg rounded-lg p-6 text-white transform transition-transform hover:scale-105 hover:shadow-xl">
            <img src="/src/assets/jepang.jpg" alt="Japanese Language Course" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">Japanese Language Course</h3>
            <p className="mb-4">
              Immerse yourself in the Japanese language with our comprehensive course that covers speaking, reading, and writing.
              <br />
              <strong>Offline:</strong> Engaging lessons in a supportive environment with cultural insights. 
              <br />
              <strong>Online:</strong> Interactive sessions that allow for group discussions and personal practice.
            </p>
            <p className="font-bold text-lg">Price:</p>
            <p>Offline: <span className="font-bold">$220 / month</span></p>
            <p>Online: <span className="font-bold">$170 / month</span></p>
            <p className="italic">*Recommended duration: 3 months*</p>
          </div>

          {/* Service Item 3: English Language Course */}
          <div className="bg-slate-950 shadow-lg rounded-lg p-6 text-white transform transition-transform hover:scale-105 hover:shadow-xl">
            <img src="/src/assets/english.jpg" alt="English Language Course" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">English Language Course</h3>
            <p className="mb-4">
              Enhance your English skills with a focus on communication, grammar, and vocabulary tailored to your needs.
              <br />
              <strong>Offline:</strong> Dynamic lessons that encourage real-world application of language skills. 
              <br />
              <strong>Online:</strong> Flexible courses designed to fit your schedule with collaborative projects.
            </p>
            <p className="font-bold text-lg">Price:</p>
            <p>Offline: <span className="font-bold">$180 / month</span></p>
            <p>Online: <span className="font-bold">$130 / month</span></p>
            <p className="italic">*Recommended duration: 3 months*</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial Item 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="italic mb-4">"The Korean classes were outstanding! I never felt bored, and I learned so much!"</p>
            <h4 className="font-semibold">- Sarah Johnson</h4>
            <p className="text-gray-500">Korean Language Student</p>
          </div>

          {/* Testimonial Item 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="italic mb-4">"The Japanese course was very engaging, and the teachers are amazing!"</p>
            <h4 className="font-semibold">- David Lee</h4>
            <p className="text-gray-500">Japanese Language Student</p>
          </div>

          {/* Testimonial Item 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="italic mb-4">"The English course helped me improve my skills significantly. Highly recommend!"</p>
            <h4 className="font-semibold">- Emma Wang</h4>
            <p className="text-gray-500">English Language Student</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
